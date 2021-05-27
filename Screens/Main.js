import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements';
import Pricipal from './Principal';
import Mape from './Map';
import Favoris from './Favoris';
import Add from './Add';
import color from '../Components/color'
import Login from './Login';
import { createDrawerNavigator } from '@react-navigation/drawer'
import Content from '../Components/DrawerNavigation';
import Home from './Home';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator()

const TabNav = (props) => <Tab.Navigator
    tabBarOptions={{
        activeTintColor: color.primary
    }}
    {...props}
>
    <Tab.Screen name={'pricipal'} component={Pricipal} options={{
        tabBarIcon: (props) => <Icon name={'home'}
            color={props.color}
        />
    }} />
    <Tab.Screen name={'Map'} component={Mape} options={{
        tabBarIcon: (props) => <Icon name={'room'}
            color={props.color}
        />
    }} />
    <Tab.Screen name={'Favorite'} component={Favoris} options={{
        tabBarIcon: (props) => <Icon name={'favorite'}
            color={props.color}
        />
    }} />
    <Tab.Screen name={'Add'} component={Add} options={{
        tabBarIcon: (props) => <Icon name={'add-circle'}
            color={props.color}
        />
    }} />
</Tab.Navigator>

export default class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLog: false,

        }

        this.changeLog = this.changeLog.bind(this)
    }

    changeLog() {
        this.setState({ isLog: false })
    }

    render() {
        return (<Drawer.Navigator
            drawerContent={(props)=><Content {...props} />}
        >
            <Drawer.Screen name="home" component={TabNav} />
        </Drawer.Navigator>)
    }
}

