import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';

export default function App() {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
      }}
    >
      <Image
        source={require('./assets/camera.png')}
        style={styles.image}
      />
      <TextInput
        placeholder='Nome de usuário, Telefone ou Email'
        style={styles.input}
        placeholderTextColor='#C9C9CE'
      />
      <TextInput
        placeholder='Senha'
        style={styles.input}
        placeholderTextColor='#C9C9CE'
      />
      <TouchableOpacity
        style={styles.button}
      >
        <Text style={{ fontSize: 15, color: 'white', textAlign: 'center' }}>Log In</Text>
      </TouchableOpacity>
      <Text style={styles.esqueceuSenha}>Esqueceu a senha?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Georgia',
    fontSize: 30,
    color: 'black',
    textAlign: 'center'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 50,
  },
  input: {
    width: '90%',
    height: 50,
    backgroundColor: '#F2F2F7',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    width: '90%',
    height: 50,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
    marginBottom: '15',
  },
  esqueceuSenha: {
    width: '89%',
    textAlign: 'right',
    color: 'blue'
  }
})
