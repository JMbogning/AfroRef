import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements';
import Pricipal from './Principal';
import Mape from './Map';
import Favoris from './Favoris';
import Add from './Add';
import color from '../Components/color'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Content from '../Components/DrawerNavigation';
import Login from './Login';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator()
const Stak = createStackNavigator()

class TabNav extends React.Component{
    constructor(props){
        super(props)
        
    }
   
    render(){
        return <Tab.Navigator
        tabBarOptions={{
            activeTintColor: color.primary
        }}
        {...this.props}
        >
        <Tab.Screen name={'Home'} component={Pricipal} options={{
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
    }
}

export default class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            islog: false
        }

        this.setIsLog = this.setIsLog.bind(this)
    }
  
    setIsLog(){
        this.setState({isLog: true})
        console.log(this.state.isLog)

    }

    render() {

        return (  this.state.islog ? <Drawer.Navigator
            drawerContent={(p)=><Content {...p} />}
        >
            <Drawer.Screen name="Main" component={TabNav} />
        </Drawer.Navigator>:<Login setLog={this.setIsLog}/>)
    }
}

