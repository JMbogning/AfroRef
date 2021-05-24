import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements';
import Pricipal from './Principal';
import Mape from './Map';
import Likes from './Likes';
import Add from './Add';
import color from '../Components/color'
import Login from './Login';

const Tab = createBottomTabNavigator();

export default class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isLog: false,
            
        }

        this.changeLog = this.changeLog.bind(this)
    }

    changeLog(){
        this.setState({ isLog: false})
    }

    render(){
     return   <>
        {
        !this.state.isLog?( <NavigationContainer>
            <Tab.Navigator
            tabBarOptions={{
                activeTintColor: color.primary
            }}
            >
                <Tab.Screen name={'pricipal'} component={Pricipal} options={{
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
        </NavigationContainer>):<Login />
        }
        </>
    }
}

const Main1 = (props) => {
    return
}

