import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import ForgottenPassword from './ForgottenPassword';


const Stack = createStackNavigator();

const StackScreen = ({navigation}) => (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name="ForgottenPassword" component={ForgottenPassword}/>
    </Stack.Navigator>
);

export default StackScreen;