import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Input, Header, Image, Icon } from 'react-native-elements'
import color from '../Components/color'

const Add = (props) => {
    return (<View style={{
        flex: 1
    }}>
        <Header
                statusBarProps={{ backgroundColor: color.primary }}
                barStyle="light-content" // or directly
                containerStyle={{
                    backgroundColor: color.primary,
                    justifyContent: 'space-around',
                }}
                leftComponent={<Icon name='menu' color='#fff'  onPress={()=>{this.props.navigation.toggleDrawer()}}  />}
                centerComponent={{ text: 'Accuille', style: { color: '#fff' } }}
                rightComponent={<Image source={require('../assets/logo.png')}
                    style={{
                        width: 100,
                        height: 20,
                        resizeMode: 'contain',
                    }}
                />}
            />
        <ScrollView
        contentContainerStyle={{
            padding: 20
        }}
        >
            <Text
            style={{
                fontWeight:'bold',
                fontSize:20
            }}
            >AROREF</Text>
            <Text
            style={{
                fontWeight:'bold',
                fontSize: 25,
                paddingBottom:10,
                paddingTop:10,
            }}
            >AJOUTER UN POINT D'INTERET</Text>
            <Text
            style={{
                fontSize:15,
                color: 'grey'
            }}
            >Créer des point d'intéret pour que les autres utilisateurs de la plate forme puissent les retrouver facilement en quelque cliques</Text>
            <Input
                placeholder="E-mail"
                leftIcon={{ type: 'material', name: 'person' }}
                rightIcon={{ type: 'material', name: 'done', color:color.primary }}
            />
            <Input
                placeholder="Restaurant"
                leftIcon={{ type: 'material', name: 'list' }}
                rightIcon={{ type: 'material', name: 'expand-more' }}
            />
            <Input
                placeholder="Description"
                leftIcon={{ type: 'material', name: 'description' }}
                inputContainerStyle={{
                    height:80
                }}
            />
            <Input
                placeholder="Localisation"
                leftIcon={{ type: 'material', name: 'location-city' }}
                rightIcon={{ type: 'material', name: 'done', color:color.primary }}
            />
        </ScrollView>
    </View>)
}

export default Add