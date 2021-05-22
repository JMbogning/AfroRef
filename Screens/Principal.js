import React from 'react'
import Home from './Home';
import { createStackNavigator } from '@react-navigation/stack';
import Details from './Details';
const Stack = createStackNavigator();
const Principal =()=> {
      return (
        <Stack.Navigator
        headerMode={'none'}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      );
    
}


export default Principal