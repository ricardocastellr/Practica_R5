import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import Artistlist from './components/ArtistList'
import { getMusicData } from './api/api-client'

export default class HomeView extends Component {
    state = {
        artists: null
    }
    
    componentDidMount () {
        getMusicData().then(data => this.setState({ artists: data}))
    }
    render() {
        const artists = this.state.artists

        return (
            <View style={styles.container}>
                {artists && <Artistlist artists={artists}/>}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f8ff',
    }    
})
