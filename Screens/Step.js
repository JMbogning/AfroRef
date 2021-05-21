import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import data from '../api/stepperData'
import styles from '../api/stepperStyle'
import storage from '../api/storage'
export default class Step extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: data[0].title,
            text: data[0].text,
            image: data[0].image,
            current: 0
        }
        this._next = this._next.bind(this)
    }
    _next() {
        let current = this.state.current + 1;
        console.log('press')
        if (current < data.length) {
            this.setState({ title: data[current].title })
            this.setState({ text: data[current].text })
            this.setState({ image: data[current].image })
            this.setState({ current: current })
        } else {

            this.props.setLog()
        }

    }
    render() {
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
                        <Text style={this.state.current == 0?styles.current:styles.indicatorBtn}></Text>
                        <Text style={this.state.current == 1?styles.current:styles.indicatorBtn}></Text>
                        <Text style={this.state.current == 2?styles.current:styles.indicatorBtn}></Text>
                    </View>
                    <View style={styles.indicatorBtnNext}>
                        <TouchableOpacity style={styles.btn} onPress={this._next} >
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

