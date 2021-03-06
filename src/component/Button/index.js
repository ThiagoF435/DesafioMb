import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function Button() {
    const navigation = useNavigation();
 return (
   <View style={styles.container}>
       <TouchableOpacity >  
           <Text style={styles.title} >COMPRAR</Text>
       </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer:{
        width: '90%',
        height: 50,
        backgroundColor: '#17181a',
        borderRadius: 4,
        marginVertical: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 17,
        color: '#FFF'
    }
});