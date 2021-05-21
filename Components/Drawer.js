import { View, Text, Image } from 'react-native'
const DrawerCustumContent = ()=>(
    <View 
        style={{
            flex:1,
            alignItems:'center',
        }}
    >
        <Image 
        source={ require('../assets/img1.jpg') }
        style={{
            width: 150,
            height: 150,
            borderRadius: 75,
        }}
        />
        <Text
        style={{
            fontWeight: 'bold',
            textTransform: 'capitalize',
            fontSize: 20
        }}
        >Yamking Junior</Text>
        <Text>yjunior@mail.com</Text>
    </View>
)

export default DrawerCustumContent