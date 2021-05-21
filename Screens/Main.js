import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements';
import Home from './Home';
import Mape from './Map';
import Likes from './Likes';
import Add from './Add';
import color from '../Components/color'

const Tab = createBottomTabNavigator();


const Main = (props) => {
    return <NavigationContainer>
        <Tab.Navigator
        tabBarOptions={{
            activeTintColor: color.primary
        }}
        >
            <Tab.Screen name={'Home'} component={Home} options={{
                tabBarIcon:(props)=><Icon name={'home'} 
                color={props.color}
                />
            }} />
            <Tab.Screen name={'Map'} component={Mape} options={{
                tabBarIcon:(props)=><Icon name={'room'} 
                color={props.color}
                />
            }} />
            <Tab.Screen name={'Like'} component={Likes} options={{
                tabBarIcon:(props)=><Icon name={'favorite'} 
                color={props.color}
                />
            }} />
            <Tab.Screen name={'Add'} component={Add} options={{
                tabBarIcon:(props)=><Icon name={'add-circle'} 
                color={props.color}
                />
            }} />
        </Tab.Navigator>
    </NavigationContainer>
}

export default Main