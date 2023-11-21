import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, Pressable } from 'react-native';

export default class ArtistDetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artistId: this.props.artist.id,
      artistName: this.props.artist.name,
      artistListeners: this.props.artist.listeners,
      artistStreamable: this.props.artist.streamable,
      artistImage: this.props.artist.image
    };
  }

  render() {
    return (
      <View style={ styles.container }>
        <Image style={styles.image} source={{ uri: this.state.artistImage }} />
        <Text style={styles.textlbl}>NOMBRE</Text>
        <Text style={styles.text}>{this.state.artistName}</Text>
        <Text style={styles.textlbl}>OYENTES</Text>
        <Text style={styles.text}>{this.state.artistListeners}</Text>
        <Text style={styles.textlbl}>MBID</Text>
        <Text style={styles.text}>{this.state.artistId}</Text>
        {
          this.state.artistStreamable === '0' ? 
            <Text style={[styles.stream, {backgroundColor: '#B91D1D'}]}>STREAMBALE</Text> :
            <Text style={[styles.stream, {backgroundColor: '#1DB954'}]}>STREAMBALE</Text>
        }
        <Text style={styles.stream}>STREAMBALE</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f8ff', // Color de fondo similar al de Spotify
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100, // Hace que la imagen sea circular, si es una imagen de perfil
    marginBottom: 20,
  },
  textlbl: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black', // Color del texto
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    color: 'black', // Color del texto
    marginBottom: 10,
  },
  stream: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white', // Color del texto
    marginBottom: 10,
    padding: 12,
    borderRadius:100
  },
});