import React from 'react';
import { AsyncStorage } from "react-native";
import { StyleSheet, Text, View } from 'react-native';
import { withNavigation } from 'react-navigation';

class ProfileScreen extends React.Component {

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

  componentWillMount(){
    let userData = this._retrieveData('userObj')
    //let userObject = JSON.parse(userData)
    //console.warn(userObject)
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Profile. </Text>
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
