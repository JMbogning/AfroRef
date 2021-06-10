import React from 'react'
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
import PointInteret from './PointInteret';
import { createStackNavigator } from '@react-navigation/stack';
import ForgottenPassword from './ForgottenPassword';


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator()

const TabNav = (props) => <Tab.Navigator
    tabBarOptions={{
        activeTintColor: color.primary
    }}
    {...props}
    sceneContainerStyle={{
        flex:1
    }}
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



 class DrawerComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLog: false,

        }

        this.changeLog = this.changeLog.bind(this)
        this.logout = this.logout.bind(this)
    }

    changeLog(val) {
        this.setState({ isLog: true })
       // this.render()
    }
    logout(){
        this.setState({ isLog: false })
    }

    render() {
        console.log(this.state.isLog)
        return (this.state.isLog?<Drawer.Navigator
            drawerContent={(props)=><Content {...props} logout={this.logout}/>}
        >
            <Drawer.Screen name="Main" component={TabNav} />
            <Drawer.Screen name="PointInteret" component={PointInteret} />
        </Drawer.Navigator>:<Login setLog={(val)=>this.changeLog(val)} {...this.props}/>)
    }
}

export default class Main extends React.Component {

    render(){
        return(
            <Stack.Navigator
            headerMode={'none'}
            >
                <Stack.Screen name='DrawerComponent' component={DrawerComponent}/>
                <Stack.Screen name='ForgottenPassword' component={ForgottenPassword} />
            </Stack.Navigator>
        )
    }

}
