import React, { Component } from "react";
import LoginView from "./src/LoginView";
import RegisterView from "./src/RegisterView";
import HomeView from "./src/HomeView";
import ArtistDetailView from "./src/ArtistDetailView";
import { Actions, Scene, Router } from "react-native-router-flux";
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  navigationBarTitleStyle: {
    padding: 95,
  }
});

const scenes = Actions.create(
  <Scene key="root">
     <Scene key="login" component={LoginView} titleStyle={styles.navigationBarTitleStyle} hideNavBar />
     <Scene key="register" title={"Registro"} titleStyle={styles.navigationBarTitleStyle} component={RegisterView} back />
     <Scene key="home"title={"Inicio"} component={HomeView} titleStyle={styles.navigationBarTitleStyle} back />
     <Scene key="artistDetail" title={"Artista"} component={ArtistDetailView} titleStyle={styles.navigationBarTitleStyle} back/> 
  </Scene>
)

export default class App extends Component {
  render() {
    return <Router scenes={scenes} />
  }

}