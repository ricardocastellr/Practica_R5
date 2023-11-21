import { validateBlankField, validateEmail, validatePassword } from './scripts/validations';
import { StyleSheet, Text, View, Pressable, TextInput, Alert, ImageBackground } from 'react-native';
import { Component } from 'react';
import { Actions } from 'react-native-router-flux';

export default class LoginView extends Component {
  state = {
    email: "",
    password: "",
  }

  onPressValidate = (email, password) => {
    const validatedEmail = validateEmail(email);
    const validatedPassword = validatePassword(password);
    const validatedBlankEmail = validateBlankField(email);
    const validatedBlankPassword = validateBlankField(password);

    if (validatedBlankEmail || validatedBlankPassword) {
      Alert.alert('Correo o contraseña vacíos', 'Introduzca una contraseña o correo.', [
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
      if (validatedEmail && validatedPassword) {
        Alert.alert('Cuenta valida', 'Haz ingresado de manera correcta', [
          { text: 'OK', onPress: () => console.log('OK Pressed Password') },
        ]);
        Actions.home()
      }
    }
    return true;
  }

  onEmailChange = (value) => {
    this.setState({ email: value })
  }

  onPasswordChange = (value) => {
    this.setState({ password: value })
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
            value={this.state.password}
            onChangeText={(text) => this.onPasswordChange(text)}
            secureTextEntry={true}
            placeholder="Escribe tu contraseña"
            placeholderTextColor="#000"
            style={styles.TextInput}
          />

          <Pressable
            onPress={() => this.onPressValidate(this.state.email, this.state.password)}
            accessibilityLabel="Iniciar Sesión"
            style={styles.buttonLogin}
          >
            <Text style={styles.textButton}>Iniciar sesión</Text>
          </Pressable>

          <Pressable
            onPress={() => Actions.register()}
            accessibilityLabel="Registrarse"
            style={styles.buttonRegister}
          >
            <Text style={styles.textButton}>Registarse</Text>
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
  buttonLogin: {
    backgroundColor: '#1DB954',
    borderColor: 'red',
    padding: 15,
    borderRadius: 100,
    margin: 30,
  },
  buttonRegister: {
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
});