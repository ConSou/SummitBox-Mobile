import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';

const Landing = () => {
    return (
      <ImageBackground source={require('../images/Landing3.jpg')} style={{width: '100%', height: '100%'}} resizeMode='cover' >
        <Text style={styles.text}> SummitBox </Text>
        <Button onPress={this.goLogIn} title="Send It!" />
      </ImageBackground>
    );
}

goLogIn = () => {

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

export default Landing;

    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'




// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
//
// class Landing extends Component {
//   render() {
//     return (
//       <div className='page-header'>
//       <img className='bg-image' alt='mountian top' src={require('../images/Landing3.jpg')} height='100%' width='100%' />
//         <header>
//             <h2 className="title-dark">SummitBox</h2>
//         </header>
//         <main className='nav'>
//
//           <Link to='/signin' className='linx'>
//           <button className='btn btn-primary'>
//             Send It
//           </button>
//           </Link>
//
//           <Link to='/info' className='info'> i </Link>
//
//         </main>
//       </div>
//     );
//   }
// }
//
// export default Landing;
