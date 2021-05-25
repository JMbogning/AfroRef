import React from 'react'
import { View } from 'react-native'
import { Icon, Image, Text } from 'react-native-elements'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import color from './color'

class Content extends React.Component {
    constructor(props){
        super(props)
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
                        source={require('../assets/af.jpg')}
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 50,
                            borderColor: color.primary,
                            borderWidth: 1,
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
                    activeTintColor={color.primary}
                    onPress={()=>{ this.props.navigation.navigate('Home')}}
                />
                <DrawerItem
                    label='Map'
                    icon={({ color, size }) => <Icon name='room' color={color} size={size} />}
                    activeTintColor={color.primary}
                    onPress={()=>{ this.props.navigation.navigate('Map')}}
                />
                <DrawerItem
                    label='Favorite'
                    icon={({ color, size }) => <Icon name='favorite' color={color} size={size} />}

                    activeTintColor={color.primary}
                    onPress={()=>{ this.props.navigation.navigate('Favorite')}}
                />
                <DrawerItem
                    label='Add'
                    icon={({ color, size }) => <Icon name='add-circle' color={color} size={size} />}

                    activeTintColor={color.primary}
                    onPress={()=>{ this.props.navigation.navigate('Add')}}
                />
            </DrawerContentScrollView>
        )
    }
}


export default Content