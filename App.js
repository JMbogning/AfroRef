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
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import Step from './Screens/Step';
import storage from './api/storage'
import { SafeAreaProvider } from 'react-native-safe-area-context';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      first: false
    }
  }
  

  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
    var first = storage.load({
      key:'loginState'
    }).then(data =>{
      this.setState({ first: data })

    }).catch(e=>{
      this.setState({ first: {isLog:false} })
    })

    



  }

  render() {
   
    return <SafeAreaProvider style={{ flex: 1}}>
     
      {
         this.state.first.isLog ? <Text>old runing</Text>:<Step />
      }
    </SafeAreaProvider>
  }
}

export default App;
