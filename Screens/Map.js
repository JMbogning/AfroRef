import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Header, Icon, Image, SearchBar } from 'react-native-elements'
import CardResto from '../Components/CardResto'
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
            backgroundColor: color.bacground
         }}>
           <Header
                    statusBarProps={{ backgroundColor: color.primary }}
                    barStyle="light-content" // or directly
                    containerStyle={{
                        backgroundColor: color.primary,
                        justifyContent: 'space-around',
                    }}
                    leftComponent={<Icon name='menu' color='#fff'  onPress={()=>{this.props.navigation.toggleDrawer()}}  />}
                    centerComponent={{ text: 'Map', style: { color: '#fff' } }}
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
                <View
                style={{
                   
                }}
                >
                    <Icon name='tune' 
                    style={{
                        marginLeft: 10,
                        backgroundColor:'#fff',
                        width:35,
                        borderRadius:15
                    }}
                    />
                    <Text style={{ marginLeft: 10 }}>Pertinance</Text>
                </View>
                <ScrollView>
                    <Image 
                    source={require('../assets/map.jpg')}
                    style={{
                        height:200,
                        margin: 10
                    }}
                    />
                     {
                    [1, 2, 3, 4].map((k, v) => <CardResto key={k} />)
                }
                </ScrollView>
        </View>)
    }
}
