import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    main:{
        flex:1
    },
    imageBox:{
        backgroundColor: '#c8e6c9',
        flex:1/2
    },
    image:{
        width: '100%',
        height: '100%'
    },
    bottomBox:{
        flex: 1/2,
        paddingTop: 15
    },
    title:{
        textAlign: 'center',
        flex: 1/4,
        fontSize: 30,
        fontWeight: 'bold',
        
    },
    text:{
        flex: 2/4,
        textAlign:'center',
        fontWeight: 'bold',
        fontSize: 18
    },
    indicator:{
        flex: 1/4,
        flexDirection: 'row',
    },
    indicatorBtnGroup:{
        flex: 1/2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft:10
    },
    indicatorBtn:{
        width:20,
        height:20,
        borderRadius: 10,
        backgroundColor:'#ffff00'
    },
    indicatorBtnNext:{
        flex: 1/2,
    },
    btn:{
        width: '70%',
        height: 50,
        backgroundColor:'#ffff00',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems:'center',
        marginLeft: '26%'
    },
    current:{
        width:50,
        height:20,
        borderRadius: 10,
        backgroundColor:'#ffff00'
    }
})
export default styles