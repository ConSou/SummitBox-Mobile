import React from 'react';
import BottomNav from './BottomNav';
import { AsyncStorage } from "react-native";
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class ExploreScreen extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      search: '',
      email: '',
      auth_tok: '',
      searchResult: null
    }
  }

  componentWillMount(){
    this._retrieveData('email')
    .then((value) => {
      this.setState({ email: value})
    })
    this._retrieveData('authentication_token')
    .then((value) => {
      this.setState({ auth_tok: value })
    })
  }

  _retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      //console.warn(value);
      return value
  }
  } catch (error) {
     console.warn(error);
  }
  }

  searchGo = () => {
    //console.warn(this.state.search)
    let mountianSearch = this.state.search;
    console.warn(this.state.auth_tok)
    console.warn(this.state.email)
    //console.warn(mountianSearch)
    fetch(`https://7d767201.ngrok.io/v1/mountians/${mountianSearch}`, {
      method: 'GET',
      headers: {
        'X-User-Token': this.state.auth_tok,
        'X-User-Email': this.state.email
      }})
      .then(response => response.json()
      .then(this.setState({serverRes: response.status})))
      .then(json => {
          console.warn(json)
          if(this.state.serverRes === 200){
          this.setState({ searchResult: json })
        }
        })
      .catch(error => console.log(error))
  }

  textChange = (text) => {
    this.setState({ search: text })
  }

  render(){
    return (
      <View style={styles.container}>
          <Text> Explore. </Text>
          <FormInput
            placeholder="Search by mountain name..."
            onChangeText={(text) => this.textChange(text)}
            onSubmitEditing={() => {
              this.searchGo();
            }}
            returnKeyType={ "done" }/>
          <Button
            title="Search"
            onPress={this.searchGo}/>
          <BottomNav />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default ExploreScreen;
