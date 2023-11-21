import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native';

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
      <SafeAreaView style={{ flex: 1, padding: 24, rowGap: 12 }}>
        <Text>Nombre: {this.state.artistName}</Text>
        <Text>Listeners: {this.state.artistListeners}</Text>
        <Text>MBID: {this.state.artistId}</Text>
        <Text>Streamable: {this.state.artistStreamable}</Text>
        {
          this.state.image !== '' ?
            <View>
              <Image style={styles.image} source={{ uri: this.state.artistImage }} />
            </View> :
            <Text>No hay imagen :'(</Text>
        }
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  artistBox: {
    margin: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: .1,
    shadowOffset: {
      height: 1,
      width: -2
    },
    elevation: 2,
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    marginTop: 10,
    color: '#333',
  }
});