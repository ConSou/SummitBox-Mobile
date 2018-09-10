import React, { Component } from 'react';
import { StyleSheet, Text, View  } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { Header } from 'react-navigation';


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

    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};
  }

  focusNextField(id) {
   this.inputs[id].focus();
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

    fetch('https://a2b6a7c7.ngrok.io/v1/users/', {
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
  .then(response => {
    if(response.status == 200){
      alert('You have signed up!')
      return response.json()
    }else{
      alert("There was an issue creating your account.  Please try again.")
    }
  })
  // .then(json =>
  //   console.warn(json.data)
  //   )
    .catch(error => console.warn(error))
  }

  render(){
    return (
      <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
    >
        <Text style={styles.text}> Welcome. </Text>

        <FormLabel> First Name </FormLabel>
          <FormInput
            onChangeText={(text) => this.textChange(text, 'firstName')}
            placeholder="Please enter first name..."
            onSubmitEditing={() => {
              this.focusNextField('two');
            }}
            returnKeyType={ "next" }
            ref={ input => {
              this.inputs['one'] = input;
            }} />

        <FormLabel> Last Name </FormLabel>
          <FormInput
            onChangeText={(text) => this.textChange(text, 'lastName')}
            placeholder="Please enter last name..."
            onSubmitEditing={() => {
              this.focusNextField('three');
            }}
            returnKeyType={ "next" }
            ref={ input => {
              this.inputs['two'] = input;
            }} />

        <FormLabel> Email </FormLabel>
          <FormInput
            onChangeText={(text) => this.textChange(text, 'email')}
            placeholder="Please enter email..."
            onSubmitEditing={() => {
              this.focusNextField('four');
            }}
            returnKeyType={ "next" }
            ref={ input => {
              this.inputs['three'] = input;
            }} />

        <FormLabel> Password </FormLabel>
          <FormInput
            onChangeText={(text) => this.textChange(text, 'password')}
            secureTextEntry={true}
            placeholder="Select a password..."
            onSubmitEditing={() => {
              this.focusNextField('five');
            }}
            returnKeyType={ "next" }
            ref={ input => {
              this.inputs['four'] = input;
            }} />

        <FormLabel> Password Confirmation </FormLabel>
          <FormInput
            onChangeText={(text) => this.textChange(text, 'passwordConfirm')}
            secureTextEntry={true}
            placeholder="Confirm password..."
            onSubmitEditing={() => {
              this.submitSignUp();
            }}
            returnKeyType={ "done" }
            ref={ input => {
              this.inputs['five'] = input;
            }} />

        <View style={styles.container}>
          <Button
          onPress={this.submitSignUp}
          title="Sign Up"
          buttonStyle={styles.button} />
        </View>
          </KeyboardAwareScrollView>
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
