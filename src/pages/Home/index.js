import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function Home() {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Image 
        source={require('../../assets/banner.png')}
        style={styles.image}
      />

      <View style={styles.textContainer}>
        <Text style={styles.text}>TÊNIS</Text>
        <Text style={styles.text}> </Text>
        <Text style={styles.text}>MASCULINO</Text>
      </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  },

  header: {
    marginBottom: 8
  },

  image: {
    width: '100%'
  }
})