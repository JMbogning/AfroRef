import React from 'react'
import {  ScrollView, View } from 'react-native'
import { Header, SearchBar, Image } from 'react-native-elements'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import color from '../Components/color'
import SavePI from '../Components/SavePi'


export default class Home extends React.Component {
    constructor(props){
        super(props)
        this.inputRef = React.createRef()
        this.state = {
            search: ''
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
                centerComponent={{ text: 'Accueil', style: { color: '#fff' } }}
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
                ref={this.inputRef}
                onSubmitEditing={ev=>{}}
                onChange={(e)=>{console.log(this.inputRef.current)}}
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
