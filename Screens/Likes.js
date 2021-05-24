import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Card, Header, Button, Icon, Image } from 'react-native-elements'
import CardCustum from '../Components/CardCustum'
import color from '../Components/color'

const LikesCard = (props) => {
    return <Card>
        <Card.Image source={{ uri: 'https://via.placeholder.com/300' }} />
        <Card.FeaturedTitle>
            <View>
                <Icon name="room" />
            </View>
            <View>
                <Text style={{
                    fontWeight: 'bold'
                }}>Restaurant la paix</Text>
                <Text
                    style={{
                        color: color.primary
                    }}
                >1er Rue de la gare<Text style={{ color: 'red' }}>(1.5Km)</Text></Text>
            </View>
        </Card.FeaturedTitle>

    </Card>
}

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
                centerComponent={{ text: 'Accuille', style: { color: '#fff' } }}
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
                    Vos PI favories <Icon name='favorite-border' color='red' />
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
                    [1, 2, 3, 4].map((k, v) => <LikesCard key={k} />)
                }
            </ScrollView>
        </>
    )
}

export default Likes