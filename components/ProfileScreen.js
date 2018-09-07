import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { withNavigation } from 'react-navigation';

class ProfileScreen extends React.Component {

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
