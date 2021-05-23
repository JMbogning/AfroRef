import React from 'react'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { Header, SearchBar, Image, Icon } from 'react-native-elements'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import color from '../Components/color'


const Card = (props) => {
    return (
        <TouchableWithoutFeedback
            style={{
                backgroundColor: '#FFF',
                paddingLeft: 10,
                paddingRight: 10,
                margin: 1,
                marginRight: 10,
                flex: 1,
                width: 330
            }}

            onPress={()=>{
                props.navigation.navigate('Details')
            }}
        >
            <View
                style={{
                    flex: 2,
                    paddingTop: 5,
                    paddingLeft: 10,
                    paddingRight: 10,
                    marginBottom: 2
                }}
            >
                <Image
                    source={{
                        uri: 'https://via.placeholder.com/400',
                        cache: 'only-if-cached'
                    }}
                    style={{ width: 340, height: '100%' }}
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
                        <Text>1 rue de la gare</Text><Text style={{ color: 'red' }} >(1.2KM)</Text>
                    </View>
                    <Text style={{ fontSize: 10, paddingLeft: 40 }}>Paris(75000)</Text>
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

export default Card;