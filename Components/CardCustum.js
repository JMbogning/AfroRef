import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import {  Image, Icon } from 'react-native-elements'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import color from './color'


const CardCustum = (props) => {
    return (
        <TouchableWithoutFeedback
            style={{
                backgroundColor: '#FFF',
                paddingLeft: 10,
                paddingBottom: 15,
                paddingRight: 10,
                margin: 1,
                marginRight: 10,
                flex: 1,
                width: 330
            }}

            onPress={()=>{
                //console.log(props)
                props.navigation.navigate('Details')
            }}
        >
            <View
                style={{
                    flex: 2,
                    paddingTop: 15,
                    paddingLeft: 10,
                    paddingRight: 10,
                    marginBottom: 2
                }}
            >
                <Image
                    source={{
                        uri: 'https://media-cdn.tripadvisor.com/media/photo-s/07/da/28/b1/jdw-design-hotel.jpg',
                        cache: 'only-if-cached'
                    }}
                    style={{ width: 340, height: '100%' }}
                    defaultSource={require('../assets/map.jpg')}
                />
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <View>
                    <Text style={{ fontWeight: 'bold', paddingBottom: -3 }} >Restaurant le salut</Text>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row'
                        }}
                    >
                        <Icon name="room" color={color.primary} />
                        <Text>1 rue de la gare</Text><Text style={{ color: 'red' }} > (1.2KM) </Text>
                    </View>
                    <Text style={{ fontSize: 10, paddingLeft: 40 }}>Paris (75000) </Text>
                </View>
                <View
                    style={{
                        padding: 5
                    }}
                >
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 15,
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: color.primary,
                                width: 90,
                                height: 30,
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 15,
                                paddingTop: -3
                            }}
                        >
                        <Text
                            style={{
                                color: '#FFF',
                                fontWeight: 'bold',
                            }}
                        >Restaurant</Text>
                        </View>
                        
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default CardCustum;