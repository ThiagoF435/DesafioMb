import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet,} from 'react-native';
import Button from '../../component/Button';
import Footer from '../../component/Footer';


export default function Detail({navigation}) {

  navigation.setOptions({
    headerTitle: 'Evento Puc'
  })

 return (
   <ScrollView style={styles.container}>
   <Image
    source={require('../../assets/bannerSmall.png')}
    style={styles.image}
    resizeMode="cover"
   />

   <View>
      <View>
        <Text style={[styles.title, {fontSize: 24}]}>R$110,00</Text>
      </View>
      <View opacity={0.6}>
        <Text style={[styles.title, {fontSize: 30} ]}>Evento PUCC</Text>
      </View>

      <View style={styles.textContent}>
        <Text style={styles.textTitle}>
            Evento PUCC
        </Text>
        <Text style={styles.textContent} >
          Descricao do Evento
        </Text >
        <Text style={styles.textList}>
          -Apresentador:
        </Text>
        <Text style={styles.textList}>
          -Data e horário:
        </Text>
      </View>

      <Button/>

      <View style={styles.line}/>

      <Footer/>

   </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  image:{
    width: '100%'
  },
  title:{
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: '2%'
  },
  textContent:{
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%'
  },
  textTitle: {
    fontSize: 22,
    marginVertical: '2%'
  },
  textList:{
    fontSize: 16,
    lineHeight: 25,
  },
  line:{
    borderWidth: 1,
    borderBottomColor: '#DDD',
    marginVertical: '2%',
  }
});