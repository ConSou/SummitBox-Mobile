import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';
import { AsyncStorage } from "react-native";
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

class LoginScreen extends Component{
  constructor(props){
    super(props)

    this.state = {
      email: "",
      password: "",
      signinSuccess: false,
      userId: null
    }

    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};
  }

  focusNextField(id) {
   this.inputs[id].focus();
 }

  // componentWillMount(){
  //   let email = this._retrieveData('email')
  //   if(email){
  //     this.props.navigation.navigate('Profile')
  //   }
  // }

  _storeData = async (userInfo, title) => {
  try {
    await AsyncStorage.setItem(title, userInfo);
  } catch (error) {
    console.warn(error.message);
  }
  }

  _retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      //console.warn(value);
  }
  } catch (error) {
     console.warn(error);
  }
  }

  textChange = (text, field) => {
    this.setState({ [field]: text })
  }

  submitSignIn = () => {

    let email = this.state.email.toLowerCase()
    let password = this.state.password

    fetch('https://a2b6a7c7.ngrok.io/v1/sessions/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(response => {
      if(response.status == 201){
        return response.json()
      }else{
      alert('Incorrect email or password entered.  Please try again')
      this.setState({ email: '' })
      this.setState({ password: '' })
    }
    })
    .then(json => {
      if(json){
      console.warn(json.data)
      this._storeData(json.data.user.id.toString(), "id")
      this._storeData(json.data.user.email, "email")
      this._storeData(json.data.user.authentication_token, "authentication_token")
      this._storeData(JSON.stringify(json.data.user), "userObj")
      this.setState({ signinSuccess: true, userId: json.data.user.id})
      this.setState({ signinSuccess: true })
      alert(`Welcome back ${json.data.user.first_name}.`)
      this.props.navigation.navigate('Profile')

    }
     })
    .catch(error => console.warn(error))
    //alert('You have signed in!')
  }

  render(){
    // if(this.state.signinSuccess){
    //   this.setState({ signinSuccess: false })
    //   this.props.navigation.navigate('Profile')
    // }
    return (
      <View>
        <Text style={styles.text}> Sign In. </Text>

        <FormLabel> Email </FormLabel>
        <FormInput
          onChangeText={(text) => this.textChange(text, 'email')}
          placeholder="Please enter your email..."
          value={this.state.email}
          onSubmitEditing={() => {
            this.focusNextField('two');
          }}
          returnKeyType={ "next" }
          ref={ input => {
            this.inputs['one'] = input;
          }} />

        <FormLabel> Password </FormLabel>
        <FormInput
          onChangeText={(text) => this.textChange(text, 'password')}
          secureTextEntry={true} placeholder="Please enter your password..."
          value={this.state.password}
          onSubmitEditing={() => {
            this.submitSignIn();
          }}
          returnKeyType={ "done" }
          ref={ input => {
            this.inputs['two'] = input;
          }} />

        <View style={styles.container}>
          <Button
            onPress={this.submitSignIn}
            title="Sign In"
            buttonStyle={styles.button}/>

          <Text style={styles.smlTxt}> or </Text>

          <Button
            onPress={() => this.props.navigation.navigate('Signup')}
            title="Sign Up"
            transparent={true}
            color="blue"/>
        </View>
      </View>
    );
  }
}

export default withNavigation(LoginScreen)

const styles = StyleSheet.create({
  container: {
      alignItems: 'center'
  },
  text: {
      textAlign: 'center',
      color: 'black',
      backgroundColor: 'rgba(0,0,0,0)',
      fontSize: 45,
      marginTop: 125
  },
  smlTxt: {
    textAlign: 'center',
    color: 'black',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  button: {
    backgroundColor: "rgba(92, 99,216, 1)",
    width: 300,
    height: 45,
    marginTop: 25,
    marginBottom: 10,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5
    }
});

//<ImageBackground source={require('../images/Signup.jpg')} style={{width: '100%', height: '100%', alignItems: 'center'}} resizeMode='cover' >
//</ImageBackground>
