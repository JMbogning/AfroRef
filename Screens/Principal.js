import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Details from './Details';
import Home from './Home';
import ChercheResult from './ChercheResults';
import ForgottenPassword from './ForgottenPassword';
import Register from './Register';
import Login from './Login';

const Stack = createStackNavigator();
const Principal = () => {
    return (
            <Stack.Navigator
                headerMode={'none'}
            >

                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Details" component={Details} />
                <Stack.Screen name="Result" component={ChercheResult} />
                <Stack.Screen name="ForgottenPassword" component={ForgottenPassword} />
                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
    );

}


export default Principal