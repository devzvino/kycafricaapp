import { Image, StyleSheet, Button, Text, SafeAreaView, Pressable, TextInput,View, ImageBackground } from 'react-native';
import logo from '../assets/kyc-logo.png';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import bg1 from '..//assets/splash_bg.jpg';

//styles import`

import { FONTSTYLES, BUTTONS, LOGO, INPUT, Colors } from '../Components/styles';

export const Welcome =()=>{
//usable variables
const ButtonTitle = 'Get Started';
const createAccountButtonTitle = 'Create Account';
const greetingsText = 'Smart Know Your Customer Solutions in one Place';
const appTag ='This app enables you to verify your Address & National Identity in just a few taps.'
const versionNumber = '1.0.0';

//functions
const [password, setPassword] = useState("");
const handleInput= (e) => setPassword(e.target.value);
console.log(password)


//render views
return (
    <View style={styles.container}>

        <ImageBackground source={bg1} style={styles.sect}>
            <View style={styles.innerSect}>
            <Image source={logo} style={LOGO.main}/>
            <Text style={FONTSTYLES.heading1}>{greetingsText}</Text>
            <Text style={FONTSTYLES.paratxt}>{appTag}</Text>
            </View>
        </ImageBackground>

        <View style={styles.footer}>
         <Pressable style={BUTTONS.mainBtn}>
            <Text style={FONTSTYLES.mainbtntext}>{ButtonTitle}</Text>
         </Pressable>
        </View>
        
    </View>
);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    sect: {
        flex: 1,
        borderRadius: 20,
       
        paddingBottom:10, 
       
    },
    footer: {
        flex: 0.5,
        alignItems:'center',
        justifyContent:'center'
    },
    innerSect:{
        marginTop:300,
        width: '90%',
        left:30,
    }
});

