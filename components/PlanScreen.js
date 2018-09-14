import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import BottomNav from './BottomNav'

class PlanScreen extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      myPlans: null
    }
  }

  componentDidMount(){
    fetch('http://cd33fbaf.ngrok.io/v1/plans/', {
    method: 'GET',
    headers: {
      'X-User-Token': 'A3Unsfy9dwwn6x8xJHAy',
      'X-User-Email': 'the.coolest.test.user@gmail.com'
    }})
    .then(response => response.json())
    .then(json => {
      this.setState({ myPlans: json.data})
      console.warn(this.state.myPlans)
    })


  }

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
