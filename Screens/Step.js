import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import data from '../api/stepperData'
export default class Step extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: data[0].title,
            text: data[0].text,
            image: data[0].image
        }
    }
    render(){
        return <View style={styles.main}>
            <View style={styles.imageBox}>
                <Image
                source={this.state.image}
                style={styles.image}
                />
            </View>
            <View style={styles.bottomBox}>
                <Text style={styles.title}>
                    {this.state.title}
                </Text>
                <Text style={styles.text}>
                    {this.state.text}
                </Text>
                <View style={styles.indicator}>
                    <View style={styles.indicatorBtnGroup}>
                        <Text style={styles.current}></Text>
                        <Text style={styles.indicatorBtn}></Text>
                        <Text style={styles.indicatorBtn}></Text>
                    </View>
                    <View style={styles.indicatorBtnNext}>
                        <TouchableOpacity style={styles.btn}>
                            <Text>
                                Suivants
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    }
} 

const styles = StyleSheet.create({
    main:{
        flex:1
    },
    imageBox:{
        backgroundColor: 'yellow',
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
        width:40,
        height:20,
        borderRadius: 10,
        backgroundColor:'#ffff00'
    }
})