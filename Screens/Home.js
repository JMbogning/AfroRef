import React from 'react'
import { ScrollView, View } from 'react-native'
import { Header, SearchBar, Image } from 'react-native-elements'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import color from '../Components/color'
import SavePI from '../Components/SavePi'


export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this._changeSearch = this._changeSearch.bind(this)
        this._searchSubmit = this._searchSubmit.bind(this)
        this.state = {
            search: ''
        }
    }
    _changeSearch(val) {
        this.setState({ search: val })
    }
    _searchSubmit(text){
        this.props.navigation.navigate("Result",{
            text
        })
    }
    render() {
        return (<View style={{ backgroundColor: color.bacground, flex: 1 }}>
            <Header
                statusBarProps={{ backgroundColor: color.primary }}
                barStyle="light-content" // or directly
                containerStyle={{
                    backgroundColor: color.primary,
                    justifyContent: 'space-around',
                }}
                leftComponent={<Icon name='menu' color='#fff' onPress={() => { this.props.navigation.toggleDrawer() }} />}
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
                onChange={(e) => this._changeSearch(e)}
                value={this.state.search}
                onSubmitEditing={event=>{
                this._searchSubmit( event.nativeEvent.text )   
                }}
            />

            <ScrollView
                style={{
                    flex: 1,
                }}
            >
                <SavePI {...this.props} />
                <SavePI {...this.props} />
            </ScrollView>
        </View>)

    }
}
