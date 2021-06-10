import React from 'react'
import { ScrollView, Text } from 'react-native'
import { Header, Icon, Image } from 'react-native-elements'
import CardResto from '../Components/CardResto'
import color from '../Components/color'

export default class ChercheResult extends React.Component {
    render(){
        return<>
        <Header
                statusBarProps={{ backgroundColor: color.primary }}
                barStyle="light-content" // or directly
                containerStyle={{
                    backgroundColor: color.primary,
                    justifyContent: 'space-around',
                }}
                leftComponent={<Icon name='menu' color='#fff' onPress={() => { this.props.navigation.toggleDrawer() }} />}
                centerComponent={{ text: "resultat de recheche ", style: { color: '#fff' } }}
                rightComponent={<Image source={require('../assets/logo.png')}
                    style={{
                        width: 100,
                        height: 20,
                        resizeMode: 'contain',
                    }}
                />}
            />
         <ScrollView
        style={{
            flex:1,
            margin:5
        }}
        >
            
            <Text
            style={{
                textAlign:'center',
                fontWeight:'bold',
                fontSize:20
            }}
            >
                Resltats corespondant a '{JSON.stringify(this.props.route.params.text)}'
            </Text>
            {
                    [1, 2].map((k, v) => <CardResto key={k} />)
                }
        </ScrollView>
        </>
    }
}