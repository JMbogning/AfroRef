/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

class App extends React.Component{
  componentDidMount() {
    // do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
      SplashScreen.hide();
      
  }
  render(){
    return <View>
      <Text>Hello</Text>
    </View>
  }
}

export default App;
