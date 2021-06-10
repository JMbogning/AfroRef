import React from 'react'
import { TouchableOpacity } from 'react-native';
import { ScrollView, View, Text } from 'react-native'
import { Image, Header, Input, Button } from 'react-native-elements'
import color from '../Components/color';

export default class ForgottenPassword extends React.Component {
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
                    centerComponent={<Text style={{color:"#FFF",fontWeight:'bold'}}>Mot de passe oublié</Text>}
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
                            resizeMode: 'contain',
                            marginBottom: 150
                        }}
                    />
                    <Input
                        placeholder="veuillez entrer votre mail"
                        leftIcon={{ type: 'material', name: 'email' }}
                        rightIcon={{ type: 'material', name: 'done', color: color.primary }}
                    />
                    <TouchableOpacity>
                    <Button
                    title='Valider'
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
                </ScrollView>
            </View>
        );
    }
}