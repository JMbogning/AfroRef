import React from 'react'
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

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator()

const TabNav = (props) => <Tab.Navigator
    tabBarOptions={{
        activeTintColor: color.primary
    }}
    {...props}
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

export default class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLog: false,

        }

        this.changeLog = this.changeLog.bind(this)
    }

    changeLog(val) {
        this.setState({ isLog: true })
       // this.render()
    }

    render() {
        console.log(this.state.isLog)
        return (this.state.isLog?<Drawer.Navigator
            drawerContent={(props)=><Content {...props} />}
        >
            <Drawer.Screen name="Main" component={TabNav} />
        </Drawer.Navigator>:<Login setLog={(val)=>this.changeLog(val)}/>)
    }
}

