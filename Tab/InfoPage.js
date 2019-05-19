import React, { Component } from 'react';
import MenuButton from '../components/MenuButton';

import { View,StyleSheet, Text } from 'react-native';

export default class InfoPage extends Component {
  static navigationOptions ={ title : 'Info'}
  render() {
    return (

      <View style={styles.container}>
      <MenuButton navigation={this.props.navigation}/>
        <Text>173140719111001 Syahrina Khadiza</Text>
        <Text>173140719111002 Annas Usbah</Text>
      </View>
      
    );
  }
}

const styles= StyleSheet.create({
  container:  {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  text:{
    fontSize: 30,
    color: '#8e44ad'
  }
})
