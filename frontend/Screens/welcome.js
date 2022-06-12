import { Image, StyleSheet, Button, Text, SafeAreaView, Pressable, TextInput,View } from 'react-native';
import logo from '../assets/kyc-logo.png';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';

//styles import`

import { FONTSTYLES, BUTTONS, LOGO, INPUT, Colors } from '../Components/styles';

export const Welcome =()=>{
//usable variables
const ButtonTitle = 'Get Satrted';
const createAccountButtonTitle = 'Create Account';
const greetingsText = 'A simplified way of keeping your transaction records';
const versionNumber = '1.0.0';

//functions
const [password, setPassword] = useState("");
const handleInput= (e) => setPassword(e.target.value);
console.log(password)


//render views
return (
    <View style={styles.container}>
        <SafeAreaView style={styles.sect}>
            <Image source={logo} style={LOGO.main}/>
            <Text style={FONTSTYLES.heading1}>Smart Know Your Customer Solutions in one Place</Text>
            <Text></Text>
        </SafeAreaView>
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
        left:20,
        borderRadius: 10,
       
    },
    footer: {
        flex: 0.4,
        backgroundColor: '#000000',
        alignItems:'center',
        borderRadius: 10, 

    },
});

