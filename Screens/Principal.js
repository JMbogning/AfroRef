import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Details from './Details';
import Home from './Home';
import ChercheResult from './ChercheResults';
const Stack = createStackNavigator();
const Principal = () => {
    return (
            <Stack.Navigator
                headerMode={'none'}
            >

                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Details" component={Details} />
                <Stack.Screen name="Result" component={ChercheResult} />
            </Stack.Navigator>
    );

}


export default Principal