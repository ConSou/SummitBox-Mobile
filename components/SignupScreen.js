import React, { Component } from 'react';
import { StyleSheet, Text, View  } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

class SignupScreen extends Component{
  constructor(props){
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirm: ''
    }
  }

  textChange = (text, field) => {
    this.setState({ [field]: text })
  }

  submitSignUp = () => {
    let firstName = this.state.firstName
    let lastName = this.state.lastName
    let email = this.state.email.toLowerCase()
    let password = this.state.password
    let passwordConfirm = this.state.passwordConfirm

    fetch('https://6fe09b31.ngrok.io/v1/users/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          email: email,
          password: password,
          password_confirmation: passwordConfirm,
          first_name: firstName,
          last_name: lastName
        }
      })
  })
  .then(response => response.json())
  .then(json =>
    console.warn(json.data)
    )
    alert('You have signed up!')
  }

  render(){
    return (
      <View>
        <Text style={styles.text}> Welcome. </Text>

        <FormLabel> First Name </FormLabel>
          <FormInput onChangeText={(text) => this.textChange(text, 'firstName')} placeholder="Please enter first name..." />

        <FormLabel> Last Name </FormLabel>
          <FormInput onChangeText={(text) => this.textChange(text, 'lastName')} placeholder="Please enter last name..." />

        <FormLabel> Email </FormLabel>
          <FormInput onChangeText={(text) => this.textChange(text, 'email')} placeholder="Please enter email..." />

        <FormLabel> Password </FormLabel>
          <FormInput onChangeText={(text) => this.textChange(text, 'password')} placeholder="Select a password..." />

        <FormLabel> Password Confirmation </FormLabel>
          <FormInput onChangeText={(text) => this.textChange(text, 'passwordConfirm')} placeholder="Confirm password..." />

        <View style={styles.container}>
          <Button
          onPress={this.submitSignUp}
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
