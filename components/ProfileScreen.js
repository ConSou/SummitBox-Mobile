import React from 'react';
import { AsyncStorage } from "react-native";
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import BottomNav from './BottomNav'

class ProfileScreen extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      name: '',
      city: '',
      state: '',
      country: '',
      bio: '',
      email: '',
      auth_tok: ''
    }
  }

  _retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      //console.warn(value)
      return value;
  }
  } catch (error) {
     //console.warn(error);
  }
  }

  signOut = () => {
    AsyncStorage.removeItem('userObj')
    alert("You have Signed Out")
    this.props.navigation.navigate('Landing')

    fetch('http://cd33fbaf.ngrok.io/v1/sessions/', {
      method: 'DELETE',
      headers: {
        'X-User-Token': this.state.auth_tok,
        'X-User-Email': this.state.email
      }
    })
    .catch(error => console.warn(error))

  }


  componentWillMount(){
    this._retrieveData('userObj')
    .then((value) => {
      let parseValue = JSON.parse(value)
      this.setState({ name: `${parseValue.first_name} ${parseValue.last_name}`,
        city: parseValue.city,
        state: parseValue.state,
        country: parseValue.country,
        bio: parseValue.bio,
        email: parseValue.email,
        auth_tok: parseValue.authentication_token
      })
    })
  }

//   const ComponentRight = () => {
//   return(
//     <View style={{ flex: 1, alignItems: 'flex-end', }}>
//       <TouchableOpacity>
//         <Text style={{ color: 'white', }}> Right </Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text}> {this.state.name} </Text>
        <Text> {this.state.city} | {this.state.state} | {this.state.country} </Text>
        <Button
        title="Sign Out"
        onPress={() => this.signOut()}
        transparent={true}
        color='blue' />
        <Button
        title="Edit"
        //onPress={() => this.signOut()}
        transparent={true}
        color='blue' />
        <View>
          <BottomNav />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        color: 'black',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 45,
        marginTop: 250
    }
});


export default withNavigation(ProfileScreen);
