import React from 'react'
import {  ScrollView, View } from 'react-native'
import { Header, SearchBar, Image } from 'react-native-elements'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import color from '../Components/color'
import SavePI from '../Components/SavePi'


export default class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            search: '',
            islog: false
        }
    }

    componentDidMount(){
        //console.log(this.props)
        if (!this.state.islog) {
          this.props.navigation.navigate("login")
        }
    }

    render(){
        return (<View style={{ backgroundColor: color.bacground, flex: 1 }}>
            <Header
                statusBarProps={{ backgroundColor: color.primary }}
                barStyle="light-content" // or directly
                containerStyle={{
                    backgroundColor: color.primary,
                    justifyContent: 'space-around',
                }}
                leftComponent={<Icon name='menu' color='#fff'  onPress={()=>{this.props.navigation.toggleDrawer()}}  />}
                centerComponent={{ text: 'Accuille', style: { color: '#fff' } }}
                rightComponent={<Image source={require('../assets/logo.png')}
                    style={{
                        width: 100,
                        height: 20,
                        resizeMode: 'contain',
                    }}
                />}
            />
            <SearchBar
                lightTheme
                containerStyle={{
                    backgroundColor: color.bacground
                }}
                inputContainerStyle={{
                    backgroundColor: '#fff',
                }}
                placeholder={'Rechercher'}
                value={this.state.search}
                onChange={(value)=>{this.setState({search:value})}}
            />

           <ScrollView
           style={{
               flex:1,
           }}
           >
               <SavePI {...this.props} />
               <SavePI {...this.props}/>
           </ScrollView>
        </View>)

    }
}
