import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Shoes from '../Shoes';

export default function Footer() {
  return (
    <View>
      <Text style={styles.title}>VOCÊ TAMBÉM PODE GOSTAR</Text>
      <View style={{ flexDirection: 'row' }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ marginHorizontal: 10 }}>
            <Shoes img={require('../../assets/4.png')} cost="R$ 97,99">
              Nike Air by Amazônia
            </Shoes>
          </View>

          <View style={{ marginHorizontal: 10 }}>
            <Shoes img={require('../../assets/3.png')} cost="R$ 325,00">
              Nike Shot Red
            </Shoes>
          </View>

          <View style={{ marginHorizontal: 10 }}>
            <Shoes img={require('../../assets/6.png')} cost="R$ 125,96">
              Nike Max Azul/Branco
            </Shoes>
          </View>

          <View style={{ marginHorizontal: 10 }}>
            <Shoes img={require('../../assets/1.png')} cost="R$ 139,98">
              Nike Air Max III
            </Shoes>
          </View>

          <View style={{ marginHorizontal: 10 }}>
            <Shoes img={require('../../assets/5.png')} cost="R$ 249,77">
              Nike Air Cinza
            </Shoes>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: 'Anton_400Regular',
    marginVertical: '2%',
    paddingHorizontal: '2%'
  }
});