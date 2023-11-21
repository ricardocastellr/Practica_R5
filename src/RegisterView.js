import { StyleSheet, Text, View, Pressable, TextInput, Alert, ImageBackground } from 'react-native';
import { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { validateEmail, validatePassword, validateBlankField } from './scripts/validations';

export default class LoginView extends Component {
    constructor(props){
        super(props);
        this.state  = {
            email: "",
            name: "",
            password: "",
            passwordConfirmation: ""
          }
        
    }
  onPressValidate = (email, password, passwordConfirmation, name) => {
    const validatedEmail = validateEmail(email);
    const validatedPassword = validatePassword(password);
    const validatedBlankEmail = validateBlankField(email);
    const validatedBlankPassword = validateBlankField(password);
    const validatedBlankPasswordConfirmation = validateBlankField(passwordConfirmation);
    const validatedBlankName = validateBlankField(name);

    if (validatedBlankEmail || validatedBlankPassword || validatedBlankPasswordConfirmation || validatedBlankName) {
      Alert.alert('Campos vacíos', 'Favor de rellenar todos los campos', [
        { text: 'OK', onPress: () => console.log('OK Pressed Email') },
      ]);
      return
    } else {
      if (!validatedEmail) {
        Alert.alert(`${email}`, 'No es un correo válido', [
          { text: 'OK', onPress: () => console.log('OK Pressed Email') },
        ]);
        return
      }
      if (!validatedPassword) {
        Alert.alert('Contraseña inválida', 'La contraseña debe incluir al menos 8 caracteres, un número, una mayúscula y un caracter especial', [
          { text: 'OK', onPress: () => console.log('OK Pressed Password') },
        ]);
        return
      }
      if (this.state.password !== this.state.passwordConfirmation) {
        Alert.alert('Las contraseñas no coinciden', 'Las contraseñas ingresadas no son las mismas', [
          { text: 'OK', onPress: () => console.log('OK Pressed Password') },
        ]);
        return
      }
      if (validatedEmail && validatedPassword && password === passwordConfirmation && !validatedBlankName) {
        Alert.alert('Cuenta valida', 'Haz ingresado de manera correcta', [
          { text: 'OK', onPress: () => Actions.login() },
        ]);
        return
      }
    }
  }

  onEmailChange = (value) => {
    this.setState({ email: value })
  }

  onNameChange = (value) => {
    this.setState({ name: value })
  }

  onPasswordChange = (value) => {
    this.setState({ password: value })
  }

  onPasswordConfirmationChange = (value) => {
    this.setState({ passwordConfirmation: value })
  }

  render() {

    return (

      <ImageBackground
        source={require('./assets/music.jpg')}
        style={styles.backgroundImage}
      >
          <View style={styles.container}>


          <TextInput
            value={this.state.email}
            onChangeText={(text) => this.onEmailChange(text)}
            inputMode='email'
            placeholder="Escribe tu correo"
            placeholderTextColor="#000"
            style={styles.TextInput}
          />

          <TextInput
            value={this.state.name}
            onChangeText={(text) => this.onNameChange(text)}
            placeholder="Escribe tu nombre"
            placeholderTextColor="#000"
            style={styles.TextInput}
          />

          <TextInput
            value={this.state.password}
            onChangeText={(text) => this.onPasswordChange(text)}
            secureTextEntry={true}
            placeholder="Escribe tu contraseña"
            placeholderTextColor="#000"
            style={styles.TextInput}
          />

          <TextInput
            value={this.state.passwordConfirmation}
            onChangeText={(text) => this.onPasswordConfirmationChange(text)}
            secureTextEntry={true}
            placeholder="Repite tu contraseña"
            placeholderTextColor="#000"
            style={styles.TextInput}
          />

          <Pressable
            onPress={() => this.onPressValidate(this.state.email, this.state.password, this.state.passwordConfirmation, this.state.name)}
            accessibilityLabel="Registrarse"
            style={styles.button}
          >
            <Text style={styles.textButton}>Registrarse</Text>
          </Pressable>
        </View>
      </ImageBackground>
      
      
    );
  }
}



const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 17,
    color: "white",
  },
  button: {
    backgroundColor: '#9B59B6',
    borderColor: 'red',
    padding: 15,
    borderRadius: 100,
  },
  TextInput: {
    textAlign: "center",
    width: 200,
    height: 40,
    margin: 10,
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 30,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: 'white'
  },
  Img: {
    width: 200,
    height: 200,
    margin: 30,
  },
});