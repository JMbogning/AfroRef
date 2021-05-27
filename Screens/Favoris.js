import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Header, Icon, Image } from 'react-native-elements'
import CardResto from '../Components/CardResto'
import color from '../Components/color'


const Likes = (props) => {
    return (
        <>
            <Header
                statusBarProps={{ backgroundColor: color.primary }}
                barStyle="light-content" // or directly
                containerStyle={{
                    backgroundColor: color.primary,
                    justifyContent: 'space-around',
                }}
                leftComponent={<Icon name='menu' color='#fff'  onPress={()=>{props.navigation.toggleDrawer()}}  />}
                centerComponent={{ text: 'Favoris', style: { color: '#fff' } }}
                rightComponent={<Image source={require('../assets/logo.png')}
                    style={{
                        width: 100,
                        height: 20,
                        resizeMode: 'contain',
                    }}
                />}
            />
            <View
            style={{
                flexDirection:'row',
                justifyContent: 'center',
                alignContent: 'center',
            }}
            >
                <Text
                    style={{
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginTop: 10,
                        fontSize: 30
                    }}
                >
                    Vos PI favoris <Icon name='favorite-border' color='red' />
            </Text>
                
            </View>
            <ScrollView
                style={{
                    padding: 5,
                    flex: 1,
                    width: '100%',
                    height: '100%'
                }}
            >

                {
                    [1, 2, 3, 4].map((k, v) => <CardResto key={k} />)
                }
            </ScrollView>
        </>
    )
}

export default Likes