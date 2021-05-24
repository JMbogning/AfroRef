import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Header, Image, SearchBar } from 'react-native-elements'
import color from '../Components/color'

export default class Mape extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            search:''
        }
    }

    render(){
        return (<View style={{ 
            flex:1,
         }}>
           <Header
                    statusBarProps={{ backgroundColor: color.primary }}
                    barStyle="light-content" // or directly
                    containerStyle={{
                        backgroundColor: color.primary,
                        justifyContent: 'space-around',
                    }}
                    centerComponent={{ text: 'Accuille', style: { color: '#fff' } }}
                    rightComponent={<Image source={require('../assets/logo.png')}
                        style={{
                            width: 100,
                            height: 20,
                            resizeMode: 'contain',
                        }}
                    />}
                />
                <SearchBar
                    lightTheme
                    containerStyle={{
                        backgroundColor: color.bacground
                    }}
                    inputContainerStyle={{
                        backgroundColor: '#fff',
                    }}
                    placeholder={'Rechercher'}
                    value={this.state.search}
                    onChange={(value)=>{this.setState({search:value})}}
                />

                <ScrollView>
                    <Image 
                    source={{ uri: }}
                    />
                </ScrollView>
        </View>)
    }
}
