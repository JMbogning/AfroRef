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
            <p>Formulaire de rénitialisation</p>
        );
    }
}