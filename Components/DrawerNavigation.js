import React from 'react'
import { View } from 'react-native'
import { Icon, Image, Text, Divider } from 'react-native-elements'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import color from './color'

class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeHome: true,
            activeFavorite: false,
            activeSearch: false,
            activePointInteret: false,
            activeLogout: false
        }

        this.activeHome = this.activeHome.bind(this)
        this.activeFavorite = this.activeFavorite.bind(this)
        this.activeSearch = this.activeSearch.bind(this)
        this.activePointInteret = this.activePointInteret.bind(this)
        this.activeLogout = this.activeLogout.bind(this)

    }

    activeHome() {
        this.setState({
            activeHome: true,
            activeFavorite: false,
            activeSearch: false,
            activePointInteret: false,
            activeLogout: true
        })

    }
    activeFavorite() {
        this.setState({
            activeHome: false,
            activeFavorite: true,
            activeSearch: false,
            activePointInteret: false,
            activeLogout: true
        })
    }
    activeSearch() {
        this.setState({
            activeHome: false,
            activeFavorite: false,
            activeSearch: true,
            activePointInteret: false,
            activeLogout: false
        })
    }
    activePointInteret() {
        this.setState({
            activeHome: false,
            activeFavorite: false,
            activeSearch: false,
            activePointInteret: true,
            activeLogout: false
        })
    }
    activeLogout() {
        this.setState({
            activeHome: false,
            activeFavorite: false,
            activeSearch: false,
            activePointInteret: false,
            activeLogout: true

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
                    label='Accueil'
                    icon={({ color, size }) => <Icon name='home' color={color} size={size} />}
                    onPress={() => { this.props.navigation.navigate('Home'); this.activeHome() }}
                    activeBackgroundColor={color.primary}
                    activeTintColor='#fff'
                    focused={this.state.activeHome}
                />

                <DrawerItem
                    label='Mes favoris'
                    icon={({ color, size }) => <Icon name='favorite' color={color} size={size} />}
                    onPress={() => { this.props.navigation.navigate('Favorite'); this.activeFavorite() }}
                    activeBackgroundColor={color.primary}
                    activeTintColor='#fff'
                    focused={this.state.activeFavorite}
                />
                <DrawerItem
                    label="Rechercher un point d'interet"
                    icon={({ color, size }) => <Icon name='search' color={color} size={size} />}
                    onPress={() => { this.props.navigation.navigate('Home'); this.activeSearch() }}
                    activeBackgroundColor={color.primary}
                    activeTintColor='#fff'
                    focused={this.state.activeSearch}

                />
                <DrawerItem
                    label="Mes points d'interet"
                    icon={({ color, size }) => <Icon name='star-rate' color={color} size={size} />}
                    onPress={() => { this.props.navigation.navigate('PointInteret'); this.activePointInteret() }}
                    activeBackgroundColor={color.primary}
                    activeTintColor='#fff'
                    focused={this.state.activePointInteret}
                />
                <Divider  orientation = "horizontal" />

                <DrawerItem
                    label="Deconnexion"
                    icon={({ color, size }) => <Icon name='logout' color={color} size={size} />}
                    onPress={() => { this.props.logout(); this.activeLogout() }}
                    activeBackgroundColor={color.primary}
                    activeTintColor='#fff'
                    focused={this.state.activeLogout}
                />
            </DrawerContentScrollView>
        )
    }
}


export default Content