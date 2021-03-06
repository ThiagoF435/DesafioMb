import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MenuArea(props){
    
    async function logout(){
        await AsyncStorage.clear();
        props.navigation.navigate('Login');
      }
    return (
        <View style={styles.areaMenu}>
           <TouchableOpacity style={styles.buttonHome} onPress={()=>props.navigation.navigate('Home')}>
             <Icon name="home" size={20} color="#000"/>
           </TouchableOpacity>
           <Text style={styles.areaTitle}>{props.title}</Text>
           <TouchableOpacity style={styles.buttonLogout} onPress={()=>logout()}>
             <Icon name="sign-out" size={20} color="#000"/>
           </TouchableOpacity>
            
        </View>
       );
}

const styles = StyleSheet.create({
    
    areaMenu:{
        flexDirection: 'row',
        paddingTop: 40,
        paddingBottom: 10,
        width: '100%',
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        borderColor: '#000',
        borderBottomWidth: 0.2

    },
    buttonHome:{
        textAlign:'left'
    },
    areaTitle:{
        width: '80%',
        fontWeight:'bold',
        fontSize:20,
        color:'#fff',
        textAlign:'center'
    },
    buttonLogout:{
        textAlign:'right'
    }
    });