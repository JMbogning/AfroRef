import React from 'react'
import { TouchableOpacity } from 'react-native';
import { ScrollView, View, Text } from 'react-native'
import { Image, Header, Input, Button } from 'react-native-elements'
import color from '../Components/color'



export default class Register extends React.Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <View
                style={{
                    flex: 1
                }}
            >
                <Header
                    centerComponent={<Text style={{color:"#FFF",fontWeight:'bold'}}>Inscription</Text>}
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
                        placeholder="Veuillez entrer votre nom"
                        leftIcon={{ type: 'material', name: 'person' }}
                        rightIcon={{ type: 'material', name: 'done', color: color.primary }}
                    />
                    <Input
                        placeholder="Veuillez entrer votre prenom"
                        leftIcon={{ type: 'material', name: 'person' }}
                        rightIcon={{ type: 'material', name: 'done', color: color.primary }}
                    />
                    <Input
                        placeholder="Veuillez entrer votre email"
                        leftIcon={{ type: 'material', name: 'email' }}
                        rightIcon={{ type: 'material', name: 'done', color: color.primary }}
                    />
                    <Input
                        placeholder="Veuillez entrer votre mot de passe"
                        leftIcon={{ type: 'material', name: 'lock' }}
                        rightIcon={{ type: 'material', name: 'done', color: color.primary }}
                        secureTextEntry={true}
                    />
                    <Input
                        placeholder="entrer à nouveau votre mot de passe"
                        leftIcon={{ type: 'material', name: 'lock' }}
                        rightIcon={{ type: 'material', name: 'done', color: color.primary }}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity>
                    <Button
                    title='Valider'
                    buttonStyle={{
                        backgroundColor:color.primary,
                        borderRadius:10
                    }}
                    //onPress={()=>{
                        //this.props.setLog(false)
                        //this.props.navigation.navigate('Home',{'log':true})
                    //}}
                    />
                    </TouchableOpacity>
                    
                </ScrollView>
            </View>
        );
    }
}