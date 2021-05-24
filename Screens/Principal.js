import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Details from './Details';
import Home from './Home';
import Login from './Login';
const Stack = createStackNavigator();
const Principal = () => {
    return (
            <Stack.Navigator
                headerMode={'none'}
            >

                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Details" component={Details} />
                <Stack.Screen name="login" component={Login} />
            </Stack.Navigator>
    );

}


export default Principal