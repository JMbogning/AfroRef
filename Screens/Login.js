import React from 'react'
import { TouchableOpacity } from 'react-native';
import { ScrollView, View, Text } from 'react-native'
import { Image, Header, Input, Button } from 'react-native-elements'
import color from '../Components/color';

export default class Login extends React.Component {
    render() {
        return (
            <View
                style={{
                    flex: 1
                }}
            >
                <Header
                    centerComponent={<Text style={{color:"#FFF",fontWeight:'bold'}}>Login</Text>}
                    backgroundColor={color.primary}
                />
                <ScrollView
                style={{
                    flex:1,
                    padding:30
                }}
                >
                    <Image
                        source={require('../assets/logoTop.png')}
                        style={{
                            height: 100,
                            resizeMode: 'contain'
                        }}
                    />
                    <Input
                        placeholder="yamjunior@dev.co"
                        leftIcon={{ type: 'material', name: 'person' }}
                        rightIcon={{ type: 'material', name: 'done', color: color.primary }}
                    />
                    <Input
                        placeholder="123456"
                        leftIcon={{ type: 'material', name: 'lock' }}
                        rightIcon={{ type: 'material', name: 'done', color: color.primary }}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity>
                    <Button
                    title='Connexion'
                    buttonStyle={{
                        backgroundColor:color.primary,
                        borderRadius:10
                    }}
                    onPress={()=>{
                        this.props.setLog(true)
                        //this.props.navigation.navigate('Home',{'log':true})
                    }}
                    />
                    </TouchableOpacity>
                    <Text
                    style={{
                        textAlign: 'right',
                        margin:10,
                        color:'grey'
                    }}
                    >Mot de passe oublier ?</Text>
                    <Text
                    style={{
                        marginTop:30
                    }}
                    >Pas encore de compte ?<Text style={{color:color.primary}} > Inscrivez-vous</Text></Text>
                </ScrollView>
            </View>
        );
    }
}