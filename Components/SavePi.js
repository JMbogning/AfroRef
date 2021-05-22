import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import Card from '../Components/Card'
const SavePI = (props)=> <View
style={{
    flex: 1 / 2
}}
>
<Text
    style={{
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 10
    }}
>Vos dernier PI enregistrer</Text>
<ScrollView
    style={{
        paddingLeft: 10,
        width: '100%',
        height: 170,
        flex: 1
    }}
    horizontal={true}
>
    {
        [1, 2, 3].map((v, k) => <Card key={k} />)
    }

</ScrollView>
</View>

export default SavePI