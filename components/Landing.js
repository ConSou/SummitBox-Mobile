import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

class Landing extends React.Component {

  render(){
    return (
      <ImageBackground source={require('../images/Landing3.jpg')} style={{width: '100%', height: '100%'}} resizeMode='cover' >
        <Text style={styles.text}> SummitBox </Text>
        <Button onPress={() => this.props.navigation.navigate('Login')} title="Send It!" />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 45,
        marginTop: 250
    }
});

export default withNavigation(Landing);
