import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, ImageBackground, Image, Dimensions, TouchableOpacity } from 'react-native';
import { StatusBar } from 'react-native';

// Informing the way to images
import bgImage from './images/background.png'
import Logo from './images/logo.png'

// Importing the React Native Icon Library
import Icon from 'react-native-vector-icons/MaterialIcons'

// Resizing the Width by Window Dimension
const { width: WIDTH } = Dimensions.get('window')

export default class App extends Component {

  // Creating method "show password"
  constructor() {
    super()
    this.state = {
      showPass: true,
      press: false
    }
  }

  showPass = () => {
    if (this.state.press == false) {
      this.setState({ showPass: false, press: true })
    } else {
      this.setState({ showPass: true, press: false })
    }
  }

  render() {
    return (
      // Applying the background through the variable "bgImage" created above
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Image source={Logo} style={styles.logo} />
          <Text style={styles.logoText}>REACT NATIVE</Text>
        </View>

        {/* Creating the "Username" and "Password" Fields */}
        <View style={styles.inputContainer}>
        <Icon name={'person'} size={28} color={'rgba(255, 255, 255, 1)'} style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder={'Username'}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underLineColorAndroid='transparent'
          />
        </View>

        <View style={styles.inputContainer}>
        <Icon name={'lock'} size={26} color={'rgba(255, 255, 255, 1)'} style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder={'Password'}
            secureTextEntry={this.state.showPass}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underLineColorAndroid='transparent'
          />

          {/* Designate the "show password" function through icons "visibility" and "visibility disabled" */}
          <TouchableOpacity style={styles.btnEye} onPress={this.showPass.bind(this)}>
            {/* Modifying the icon according to status */}
            <Icon name={this.state.press == false ? 'visibility' : 'visibility-off'} size={26} color={'rgba(255, 255, 255, 0.4)'} />
          </TouchableOpacity>
        </View>

        {/* Creating login button */}
        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.text} >Login</Text>
        </TouchableOpacity>

        {/* Creating the "sign up" option by modifying style paddingTop as a parameter */}
        <TouchableOpacity>
            <Text style={[styles.text, {paddingTop: 10}]}>Create an account</Text>
        </TouchableOpacity>

        {/* Changing the color of the status bar */}
        <StatusBar barStyle='light-content' backgroundColor='#4b0082' />
      </ImageBackground>
    );
  }
}

// Style sheet
const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50
  },
  logo: {
    width: 120,
    height: 120,
  },
  logoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.8
  },
  inputContainer: {
    marginTop: 10
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 37
  },
  btnEye: {
    position: 'absolute',
    top: 8,
    right: 37
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#432577',
    justifyContent: 'center',
    marginTop: 20
  },
  text: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    textAlign: 'center'
  }
});
