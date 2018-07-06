import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import biblia from './src/assets/biblia.json';

import styles from './src/Style'

const gerarVersiculo = () => {
  var indiceLivro = gerarNumeroAleatorio(biblia.length);
  var indiceCapitulo = gerarNumeroAleatorio(biblia[indiceLivro].chapters.length);
  var indiceVersiculo = gerarNumeroAleatorio(biblia[indiceLivro].chapters[indiceCapitulo].length);
  
  var nomeLivro = biblia[indiceLivro].name;
  var titulo = nomeLivro + ' ' + (indiceCapitulo + 1) + ':' + (indiceVersiculo + 1); 
  Alert.alert(titulo, biblia[indiceLivro].chapters[indiceCapitulo][indiceVersiculo])
}

function gerarNumeroAleatorio(range) {
  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * range);
  return numeroAleatorio;
}

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./src/assets/logo.jpg')} />
        <Text style={styles.logo}>Versículo do Dia</Text>
        <TouchableOpacity style={styles.botao} onPress={gerarVersiculo}>
          <Text style={styles.textoBotao}>Novo Versículo</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

