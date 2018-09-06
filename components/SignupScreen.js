import React, { Component } from 'react';
import { StyleSheet, Text, View  } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

class SignupScreen extends Component{
  render(){
    return (
      <View>
        <Text style={styles.text}> Welcome. </Text>

        <FormLabel> First Name </FormLabel>
          <FormInput placeholder="Please enter first name..." />

        <FormLabel> Last Name </FormLabel>
          <FormInput placeholder="Please enter last name..." />

        <FormLabel> Email </FormLabel>
          <FormInput placeholder="Please enter email..." />

        <FormLabel> Password </FormLabel>
          <FormInput placeholder="Select a password..." />

        <FormLabel> Password Confirmation </FormLabel>
          <FormInput placeholder="Confirm password..." />

        <View style={styles.container}>
          <Button
          title="Sign Up"
          buttonStyle={styles.button} />
        </View>
      </View>
    );
  }
}

export default SignupScreen

const styles = StyleSheet.create({
  container: {
      alignItems: 'center'
  },
  text: {
      textAlign: 'center',
      color: 'black',
      backgroundColor: 'rgba(0,0,0,0)',
      fontSize: 45,
      marginTop: 100,
      marginBottom: 50
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

//<ImageBackground source={require('../images/Signup2.jpg')} style={{width: '100%', height: '100%'}} resizeMode='cover' >
//</ImageBackground>
