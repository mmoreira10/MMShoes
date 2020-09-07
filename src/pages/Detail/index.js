import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import Dot from '../../component/Dot';
import SizeButton from '../../component/SizeButton';
import Button from '../../component/Button';
import Footer from '../../component/Footer';

export default function Detail({ navigation }) {

  navigation.setOptions({
    headerTitle: 'Nike Air Plus'
  })

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../../assets/detail.png')}
        style={styles.image}
        resizeMode="cover"
      />

      <View>
        <View>
          <Text style={[styles.title, { fontSize: 24 }]}>R$ 108,84</Text>
        </View>
        <View opacity={0.4}>
          <Text style={[styles.title, { fontSize: 30 }]}>Nike Air Plus</Text>
        </View>

        <View style={styles.dotContainer}>
          <Dot color="#2379F4" />
          <Dot color="#FB6E53" />
          <Dot color="#DDD" />
          <Dot color="#000" />
        </View>

        <View style={{ flexDirection: 'row', width: '100%' }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SizeButton bgColor="#17181A" color="#FFF">40</SizeButton>
            <SizeButton>37</SizeButton>
            <SizeButton>39</SizeButton>
            <SizeButton>42</SizeButton>
          </ScrollView>
        </View>

        <View style={styles.textContent}>
          <Text style={styles.textTile}>Nike Air Plus</Text>
          <Text style={styles.textContent}>
            A atraente unidade Nike Air Plus e a entressola de espuma Nike React em toda a extensão proporcionam conforto inigualável durante todo o dia. A gola macia e discreta circunda o calcanhar para um caimento incrível.
          </Text>
          <Text style={styles.textList}>
            • Categoria: Amortecimento
          </Text>
          <Text style={styles.textList}>
            • Material: Mesh
          </Text>
        </View>

        <Button />

        <View style={styles.line} />

        <Footer />

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  },

  image: {
    width: '100%'
  },

  title: {
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: '2%'
  },

  dotContainer: {
    flexDirection: 'row',
    marginVertical: '7%'
  },

  textContent: {
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%'
  },

  textTile: {
    fontSize: 22,
    marginVertical: '2%'
  },

  textList: {
    fontSize: 16,
    lineHeight: 25
  },

  line: {
    borderWidth: 1,
    borderBottomColor: '#DDD',
    marginVertical: '2%'
  }
});