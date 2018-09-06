import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class Landing extends React.Component {

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text}> SummitBox. </Text>
        <Button
        onPress={() => this.props.navigation.navigate('Login')}
        title="Send It!"
        buttonStyle={styles.button}/>

        <Button
        onPress={() => this.props.navigation.navigate('Info')}
        title="info"
        style={styles.iButton}
        transparent={true}
        color='blue' />

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
    },
    iButton: {
      height: 100,
      width: 100
    }
});

export default withNavigation(Landing);

//<ImageBackground source={require('../images/Landing3.jpg')} style={{width: '100%', height: '100%'}} resizeMode='cover' >
//</ImageBackground
