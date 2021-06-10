import React from 'react'
import { View } from 'react-native'
import { Icon, Image, Text } from 'react-native-elements'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import color from './color'
import { TouchableOpacity } from 'react-native'

class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeHome: true,
            activeMap: false,
            activeFavorit: false,
            activeAdd: false
        }

        this.activeHome = this.activeHome.bind(this)
        this.activeAdd = this.activeAdd.bind(this)
        this.activeMap = this.activeMap.bind(this)
        this.activeFavorit = this.activeFavorit.bind(this)

    }

    activeHome() {
        this.setState({
            activeHome: true,
            activeMap: false,
            activeFavorit: false,
            activeAdd: false
        })

    }
    activeMap() {
        this.setState({
            activeHome: false,
            activeMap: true,
            activeFavorit: false,
            activeAdd: false
        })
    }
    activeFavorit() {
        this.setState({
            activeHome: false,
            activeMap: false,
            activeFavorit: true,
            activeAdd: false
        })
    }
    activeAdd() {
        this.setState({
            activeHome: false,
            activeMap: false,
            activeFavorit: false,
            activeAdd: true
        })
    }

    render() {
        return (
            <DrawerContentScrollView
                {...this.props}
            >
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Image
                        source={require('../assets/logoTop.png')}
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 50
                        }}
                    />
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}
                    >JANET JACKSON</Text>
                    <Text
                        style={{
                            fontSize: 10,
                            color: 'grey'
                        }}
                    >janet@jackson.com</Text>
                </View>
                <DrawerItem
                    label='home'
                    icon={({ color, size }) => <Icon name='home' color={color} size={size} />}
                    onPress={() => { this.props.navigation.navigate('Home'); this.activeHome() }}
                    activeBackgroundColor={color.primary}
                    activeTintColor='#fff'
                    focused={this.state.activeHome}
                />

                <DrawerItem
                    label='Map'
                    icon={({ color, size }) => <Icon name='room' color={color} size={size} />}
                    onPress={() => { this.props.navigation.navigate('Map'); this.activeMap() }}
                    activeBackgroundColor={color.primary}
                    activeTintColor='#fff'
                    focused={this.state.activeMap}
                />
                <DrawerItem
                    label='Favorite'
                    icon={({ color, size }) => <Icon name='favorite' color={color} size={size} />}
                    onPress={() => { this.props.navigation.navigate('Favorite'); this.activeFavorit() }}
                    activeBackgroundColor={color.primary}
                    activeTintColor='#fff'
                    focused={this.state.activeFavorit}

                />
                <DrawerItem
                    label='Add'
                    icon={({ color, size }) => <Icon name='add-circle' color={color} size={size} />}
                    onPress={() => { this.props.navigation.navigate('Add'); this.activeAdd() }}
                    activeBackgroundColor={color.primary}
                    activeTintColor='#fff'
                    focused={this.state.activeAdd}
                />
            </DrawerContentScrollView>
        )
    }
}


export default Content