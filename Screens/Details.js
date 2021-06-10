import React from 'react'
import { ScrollView, View, Text, TouchableOpacity, Linking } from 'react-native'
import { Header, Button, Image, CheckBox } from 'react-native-elements'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import color from '../Components/color'
var SendIntentAndroid = require("react-native-send-intent");

const Details = (props) => {
    return <View
        style={{
            flex: 1
        }}
    >
        <Header
            //leftComponent={{ icon: 'arrow-back', color: '#fff' }}
            leftComponent={<Icon name='arrow-back' color='#fff' onPress={() => { props.navigation.goBack() }} />}
            centerComponent={{ text: 'Restaurant le salut -Details', style: { color: '#fff' } }}
            containerStyle={{
                backgroundColor: color.primary,
                justifyContent: 'space-around',
            }}
        />
        <ScrollView
            style={{
                flex: 1,
                paddingTop: 15,
                paddingLeft: 15,
                paddingRight: 15,

            }}
        >
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: 'bold'
                }}
            >Restaurant le Salut</Text>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row'
                }}
            >

                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row'
                    }}
                >
                    <Icon name='room' color={color.primary} />
                    <View>
                        <Text>1 rue de la gare</Text>
                        <Text
                            style={{
                                color: color.primary
                            }}
                        >Paris(7500)</Text>
                    </View>
                </View>
                <Button
                    title='Restaurant'
                    buttonStyle={{
                        backgroundColor: color.primary,
                        borderRadius: 15
                    }}

                />
            </View>

            <Image
                source={{
                    uri: 'https://via.placeholder.com/400'
                }}

                style={{
                    width: '100%',
                    height: 200,
                    borderRadius: 15,
                    marginTop: 15,
                    marginBottom: 10
                }}
            />
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <TouchableOpacity
                    style={{
                        flex: 1 / 2,
                        flexDirection: 'row',
                        backgroundColor: color.primary,
                        height: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10
                    }}
                    onPress={function () { SendIntentAndroid.sendPhoneCall('+0000000000', true) }}
                >
                    <Icon name='call' style={{ marginRight: 5 }} color='#FFF' /><Text style={{ color: '#fff' }} >+237 693 08 72 82</Text>
                </TouchableOpacity>
                <Icon name='favorite-border' color={color.primary} />
            </View>
            <View
                style={{
                    padding: 10,
                    backgroundColor: '#fff',
                    borderRadius: 15,
                    marginTop: 10,
                    marginBottom: 10
                }}
            >
                <Text>
                    Un restaurant est un établissement de commerce où l'on sert des plats préparés et des ... Un restaurant dit « gastronomique » est un restaurant qui cherche à mettre la gastronomie à l'honneur : plats de qualité, cave honorable, accueil attentif.
                </Text>
            </View>

            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <View
                    style={{
                        flex: 1 / 2,
                        flexDirection: 'row',
                        backgroundColor: color.primary,
                        height: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10
                    }}
                >
                    <Text style={{ color: '#fff', fontWeight: 'bold' }} >Mode de payement</Text>
                </View>

            </View>
            <CheckBox title='Visa' checked={true} checkedColor={color.primary}/>
            <CheckBox title='Mastercard' checked={true} checkedColor={color.primary}/>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <View
                    style={{
                        flex: 1 / 2,
                        flexDirection: 'row',
                        backgroundColor: color.primary,
                        height: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                        marginBottom: 20
                    }}
                >
                    <Text style={{ color: '#fff', fontWeight: 'bold' }} >Plat Gastronomique</Text>
                </View>

            </View>
        </ScrollView>
    </View>
}

export default Details