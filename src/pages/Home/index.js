import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Shoes from '../../../src/component/Shoes';

export default function Home() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/banner.png')}
          style={styles.image}
        />

        <View style={styles.textContainer}>
          <Text style={styles.text}>TÊNIS</Text>
          <Text style={[styles.text, { color: '#CECECE' }]}>•</Text>
          <Text style={[styles.text, { color: '#CECECE' }]}>MASCULINO</Text>
          <TouchableOpacity style={{ position: 'absolute', right: 0, alignSelf: 'center' }}>
            <MaterialIcons
              name="filter-list"
              size={24}
              color="#000"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.line} />

      <ScrollView>
        <Text style={styles.text}>LANÇAMENTOS</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../assets/1.png')} cost="R$ 139,98" onClick={() => navigation.navigate('Detail')}>
            Nike Air Max III
          </Shoes>
          <Shoes img={require('../../assets/2.png')} cost="R$ 108,84" onClick={() => navigation.navigate('Detail')}>
            Nike Air Plus
          </Shoes>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../assets/3.png')} cost="R$ 325,00" onClick={() => alert('CLICOU')}>
            Nike Shot Red
          </Shoes>
          <Shoes img={require('../../assets/4.png')} cost="R$ 97,99" onClick={() => alert('CLICOU')}>
            Nike Air by Amazônia
          </Shoes>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../assets/5.png')} cost="R$ 249,77" onClick={() => alert('CLICOU')}>
            Nike Air Cinza
          </Shoes>
          <Shoes img={require('../../assets/6.png')} cost="R$ 125,96" onClick={() => alert('CLICOU')}>
            Nike Max Azul/Branco
          </Shoes>
        </View>

      </ScrollView>

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
  },

  textContainer: {
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },

  text: {
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%'
  },

  line: {
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: 2
  }
})