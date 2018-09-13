import React from 'react';
import { AsyncStorage } from "react-native";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

class BottomNav extends React.Component {

  navAction = (name) => {
    //console.warn(name)
    this.props.navigation.navigate(name)
  }

  render(){
    return (
      <View style={styles.footerWrapper}>
        <TouchableOpacity onPress={() => {this.navAction("Explore")}}>
          <Text style={styles.menuItem}> Explore. </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {this.navAction("Plan")}}>
          <Text style={styles.menuItem}> Plan. </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {this.navAction("Profile")}}>
          <Text style={styles.menuItem}> Home. </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    footerWrapper: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection:'row',
        alignItems: 'center'
    },
    menuItem: {
        flexDirection: 'column',
        color: 'black',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 25,
        marginTop: 300
    }
});

export default withNavigation(BottomNav);
