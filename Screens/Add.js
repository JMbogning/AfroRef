import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Input, Header, Image, Icon, Button } from 'react-native-elements'
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
                leftComponent={<Icon name='menu' color='#fff'  onPress={()=>{props.navigation.toggleDrawer()}}  />}
                centerComponent={{ text: 'Ajouter un centre interet d\'interet', style: { color: '#fff' } }}
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
                placeholder="Nom"
                leftIcon={{ type: 'material', name: 'person' }}
                rightIcon={{ type: 'material', name: 'done', color:color.primary }}
            />
            <Input
                placeholder="Catégorie"
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
                placeholder="Adresse"
                leftIcon={{ type: 'material', name: 'alternate-email' }}
                inputContainerStyle={{
                    height:80
                }}
            />
            <Input
                placeholder="Code postal"
                leftIcon={{ type: 'material', name: 'local-post-office' }}
                
                inputContainerStyle={{
                    height:80
                }}
            />
            <Input
                placeholder="Téléphone"
                leftIcon={{ type: 'material', name: 'phone' }}
                inputContainerStyle={{
                    height:80
                }}
            />
            <Input
                placeholder="Pays"
                leftIcon={{ type: 'material', name: 'flag' }}
                rightIcon={{ type: 'material', name: 'expand-more' }}
                inputContainerStyle={{
                    height:80
                }}
            />
            <Input
                placeholder="Ville"
                leftIcon={{ type: 'material', name: 'apartment' }}
                rightIcon={{ type: 'material', name: 'expand-more' }}
                inputContainerStyle={{
                    height:80
                }}
            />
            <Input
                placeholder="Localisation"
                leftIcon={{ type: 'material', name: 'where-to-vote' }}
                rightIcon={{ type: 'material', name: 'done', color:color.primary }}
            />
            <Button buttonStyle= {{ backgroundColor: color.primary }}
                title="Valider"
            />
        </ScrollView>
    </View>)

}

export default Add