import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import CardCustum from './CardCustum'
const SavePI = (props)=> <View
style={{
    flex: 2 /3 
}}
>
<Text
    style={{
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 10,
    }}
>Vos derniers PI enregistrer</Text>
<ScrollView
    style={{
        paddingLeft: 10,
        width: '100%',
        height: 190,
        flex: 1
    }}
    horizontal={true}
>
    {
        [1, 2, 3].map((v, k) => <CardCustum key={k}  {...props}/>)
    }

</ScrollView>
</View>

export default SavePI