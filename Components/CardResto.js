import React from 'react'
import { Text, View } from 'react-native'
import { Card, Icon } from 'react-native-elements'
import color from '../Components/color'


const CardResto = (props) => {
    return <Card>
        <Card.Image source={{ uri: 'https://media-cdn.tripadvisor.com/media/photo-s/07/da/28/b1/jdw-design-hotel.jpg' }} 
            defaultSource={require('../assets/map.jpg')}
        />
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
                >1er Rue de la gare<Text style={{ color: 'red' }}> (1.5Km) </Text></Text>
            </View>
        </Card.FeaturedTitle>

    </Card>
}

export default CardResto