import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class ArtistBox extends Component {
    render() {
        const {image, name} = this.props.artist
        return (
            <View style={styles.artistBox}>
                <Image style={styles.image} source={{ uri: image }} />
                <View style={styles.info}>
                    <Text style={styles. name}>{name}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    artistBox: {
        margin: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOpacity: 10,
        shadowoffset: {
            height: 1,
            width: -2
        },
        elevation: 2,
        borderRadius: 25,
    },
    image: {
        width: 150,
        height: 150,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25
    },
    info: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    name: {
        fontSize: 22,
        marginTop: 10,
        color: '#333',
        fontWeight: 'bold'
    },
});