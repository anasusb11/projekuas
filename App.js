import React from 'react';
import firebase from "firebase";
import {createAppContainer,createStackNavigator,createSwitchNavigator} from 'react-navigation';

import AuthLoadingScreen from './components/AuthLoadingScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import DrawerNavigator from './navigation/DrawerNavigator';

import { StyleSheet, Text, View } from 'react-native';

const AppStack = createStackNavigator({ Home: DrawerNavigator},{headerMode:'none'});
const AuthStack = createStackNavigator({ Login: LoginScreen }, { headerMode: 'none' });

const AppContaner =  createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

export default class App extends React.Component {
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyAMAXMvKR6YlyDzNUOwO1i6o1kiSnuDjMc",
      authDomain: "projekakhir-8d82e.firebaseapp.com",
      databaseURL: "https://projekakhir-8d82e.firebaseio.com",
      projectId: "projekakhir-8d82e",
      storageBucket: "projekakhir-8d82e.appspot.com",
      messagingSenderId: "1052808361463"
});

  }
  render() {
    return (
      <AppContaner />
    );
  }
}
