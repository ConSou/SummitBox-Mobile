import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, TextInput  } from 'react-native';
import { withNavigation } from 'react-navigation';

class LoginScreen extends Component{
  constructor(props){
    super(props)

    this.state = {
      email: "",
      password: ""
    }
  }

  textChange = (text, field) => {
    this.setState({ [field]: text })
  }

  submitSignIn = () => {

    let email = this.state.email
    let password = this.state.password

    console.warn(email)
    console.warn(password)

    fetch('http://localhost:3001/v1/sessions/', {
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
      console.warn(json.data)
    //   // localStorage.setItem('token', json.data.user.authentication_token);
    //   // localStorage.setItem('email', json.data.user.email);
    //   // localStorage.setItem('id', json.data.user.id);
    //   // this.setState({ signedIn: true, userId: json.data.user.id})
     })
    //.catch(error => console.warn(error))
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
