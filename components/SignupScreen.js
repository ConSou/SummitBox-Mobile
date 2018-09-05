import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, TextInput  } from 'react-native';

class SignupScreen extends Component{
  render(){
    return (
      <ImageBackground source={require('../images/Signup2.jpg')} style={{width: '100%', height: '100%'}} resizeMode='cover' >
        <Text style={styles.text}> Welcome. </Text>

        <TextInput placeholder="First Name" />
        <TextInput placeholder="Last Name" />
        <TextInput placeholder="Email" />
        <TextInput placeholder="Password" />
        <TextInput placeholder="Password Confirmation" />
        <Button title="Sign Up" />
      </ImageBackground>
    );
  }
}

export default SignupScreen

const styles = StyleSheet.create({
  text: {
      textAlign: 'center',
      color: 'black',
      backgroundColor: 'rgba(0,0,0,0)',
      fontSize: 45,
      marginTop: 100
  }
});
