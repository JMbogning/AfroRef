import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Input, Header, Image, Icon, Button, CheckBox } from 'react-native-elements'
import color from '../Components/color' 

const Add = (props) => {
    return (<View style={{
        flex: 1
    }}>
        <Header
                statusBarProps={{ backgroundColor: color.primary }}
                barStyle="light-content" // or directly
                containerStyle={{
                    backgroundColor: color.primary,
                    justifyContent: 'space-around',
                }}
                leftComponent={<Icon name='menu' color='#fff'  onPress={()=>{props.navigation.toggleDrawer()}}  />}
                centerComponent={{ text: 'Ajouter un centre d\'interet', style: { color: '#fff' } }}
                rightComponent={<Image source={require('../assets/logo.png')}
                    style={{
                        width: 100,
                        height: 20,
                        resizeMode: 'contain',
                    }}
                />}
            />
        <ScrollView
            contentContainerStyle={{
                padding: 20
            }}
            >
            
            <Text
            style={{
                fontWeight:'bold',
                fontSize: 25,
                paddingBottom:10,
                paddingTop:10,
            }}
            >AJOUTER UN POINT D'INTERET</Text>
            <Text
            style={{
                fontSize:15,
                color: 'grey'
            }}
            >Créer des points d'intéret pour que les autres utilisateurs de la plate forme puissent les retrouver facilement en quelque cliques</Text>
            <Input
                placeholder="Nom"
                leftIcon={{ type: 'material', name: 'person' }}
                rightIcon={{ type: 'material', name: 'done', color:color.primary }}
            />
            <Input
                placeholder="Catégorie"
                leftIcon={{ type: 'material', name: 'list' }}
                rightIcon={{ type: 'material', name: 'expand-more' }}
            />
            <Input
                placeholder="Description"
                leftIcon={{ type: 'material', name: 'description' }}
                inputContainerStyle={{
                    height:80
                }}
            />
            <Input
                placeholder="Adresse"
                leftIcon={{ type: 'material', name: 'alternate-email' }}
                inputContainerStyle={{
                    height:80
                }}
            />
            <Input
                placeholder="Code postal"
                leftIcon={{ type: 'material', name: 'local-post-office' }}
                
                inputContainerStyle={{
                    height:80
                }}
            />
            <Input
                placeholder="Téléphone"
                leftIcon={{ type: 'material', name: 'phone' }}
                inputContainerStyle={{
                    height:80
                }}
            />
            <Input
                placeholder="Pays"
                leftIcon={{ type: 'material', name: 'flag' }}
                rightIcon={{ type: 'material', name: 'expand-more' }}
                inputContainerStyle={{
                    height:80
                }}
            />
            <Input
                placeholder="Ville"
                leftIcon={{ type: 'material', name: 'apartment' }}
                rightIcon={{ type: 'material', name: 'expand-more' }}
                inputContainerStyle={{
                    height:80
                }}
            />
           <View
                style={{
                    flex: 1,
                    flexDirection: 'row'
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
                        marginBottom: 10
                    }}
                >
                    <Text style={{ color: '#fff', fontWeight: 'bold' }} >Moyen de paiement</Text>
                </View>
            </View>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                marginBottom: 10,
                flexWrap:'wrap'
            }}>
                <CheckBox title='Visa' checked={false} checkedColor={color.primary}/>
                <CheckBox title='Mastercard' checked={true} checkedColor={color.primary}/>
                <CheckBox title ='Ticket restaurant' checked={false} checkedColor={color.primary} />

            </View>

            <View
                style={{
                    flex: 1,
                    flexDirection: 'row'
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
                        marginBottom: 10
                    }}
                >
                    <Text style={{ color: '#fff', fontWeight: 'bold' }} >Type de plat</Text>
                </View>
            </View>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                flexWrap:'wrap',
                marginBottom: 10
            }}>
                <CheckBox title='Camerounais' checked={true} checkedColor={color.primary}/>
                <CheckBox title='Sénégalais' checked={false} checkedColor={color.primary}/>
                <CheckBox title ='Togolais' checked={false} checkedColor={color.primary} />

            </View>

            <View
                style={{
                    flex: 1,
                    flexDirection: 'row'
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
                        marginBottom: 10
                    }}
                >
                    <Text style={{ color: '#fff', fontWeight: 'bold' }} >Heure d'ouverture</Text>
                </View>
            </View>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 10
            }}>
                <CheckBox title='8h00 - 12h00' checked={false} checkedColor={color.primary}/>
                <CheckBox title='16h00 - 20h00' checked={true} checkedColor={color.primary}/>

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
                        borderRadius: 10,
                        marginBottom: 10
                    }}
                >
                    <Text style={{ color: '#fff', fontWeight: 'bold' }} >Jour d'ouverture</Text>
                </View>
            </View>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                marginBottom: 10
            }}>
                <CheckBox title='Mardi à Samedi' checked={true} checkedColor={color.primary}/>
            </View>

            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }} >
                <Button buttonStyle= {{ 
                    backgroundColor: color.primary,
                    width: 100
                    }} title="Valider" />

                <Button buttonStyle= {{ 
                    backgroundColor: color.red,
                    width: 100
                    }} title="Annuler" />
            </View>
            
            
        </ScrollView>
    </View>)

}

export default Add