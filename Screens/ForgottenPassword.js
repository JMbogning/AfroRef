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
                flex:1,
                alignContent:'center',
                alignItems:'center'
            }}
            >
                <Text>Formulaire de rénitialisation</Text>
                <Text>Formulaire de rénitialisation</Text>
                <Text>Formulaire de rénitialisation</Text>
                <Text>Formulaire de rénitialisation</Text>
                <Text>Formulaire de rénitialisation</Text>
            </View>
        );
    }
}