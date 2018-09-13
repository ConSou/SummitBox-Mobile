import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import BottomNav from './BottomNav'

class PlanScreen extends React.Component {

  render(){
    return (
      <View style={styles.container}>
          <Text> Plan. </Text>
          <BottomNav />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default PlanScreen;
