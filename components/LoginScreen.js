import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, TextInput  } from 'react-native';
import { withNavigation } from 'react-navigation';
import { AsyncStorage } from "react-native"

class LoginScreen extends Component{
  constructor(props){
    super(props)

    this.state = {
      email: "",
      password: "",
      signinSuccess: false,
      userId: null
    }
  }

  _storeData = async (userInfo) => {
  try {
    await AsyncStorage.setItem(userInfo, userInfo);
  } catch (error) {
    console.warn(error.message);
  }
  }

  _retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.warn(value);
  }
  } catch (error) {
     console.warn(error);
  }
  }

  textChange = (text, field) => {
    this.setState({ [field]: text })
  }

  submitSignIn = () => {

    let email = this.state.email
    let password = this.state.password

    fetch('http://906db3b8.ngrok.io/v1/sessions/', {
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
    .then(response => response.json())
    .then(json => {
      this._storeData(json.data.user.id.toString())
      this._storeData(json.data.user.email)
      this._storeData(json.data.user.authentication_token)
      this.setState({ signinSuccess: true, userId: json.data.user.id})
     })
    .catch(error => console.warn(error))
  }

  render(){
    return (
      <ImageBackground source={require('../images/Signup.jpg')} style={{width: '100%', height: '100%'}} resizeMode='cover' >
        <Text style={styles.text}> Sign In. </Text>

        <TextInput onChangeText={(text) => this.textChange(text, 'email')} placeholder="Email" />
        <TextInput onChangeText={(text) => this.textChange(text, 'password')} placeholder="Password" />
        <Button onPress={this.submitSignIn} title="Sign In" />

        <Text style={styles.smlTxt}> or </Text>

        <Button onPress={() => this.props.navigation.navigate('Signup')} title="Sign Up" />
      </ImageBackground>
    );
  }
}

export default withNavigation(LoginScreen)

const styles = StyleSheet.create({
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
  }
});
