import { Image, StyleSheet, Button, Text, SafeAreaView, Pressable, TextInput, } from 'react-native';
import logo from '../assets/kyc-logo.png';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';

//styles import

import { FONTSTYLES, BUTTONS, LOGO, INPUT, Colors } from '../Components/styles';

export const Welcome =()=>{
//usable variables
const loginButtonTitle = 'Login';
const createAccountButtonTitle = 'Create Account';
const greetingsText = 'A simplified way of keeping your transaction records';
const versionNumber = '1.0.0';

//functions
const [password, setPassword] = useState("");
const handleInput= (e) => setPassword(e.target.value);
console.log(password)


//render views
return (
    <SafeAreaView style={styles.container}>
        <Image source={logo} style={LOGO.main} />
        <Text style={FONTSTYLES.heading1}>{greetingsText}</Text>
        <TextInput style={INPUT.loginInput} value={''} placeholder='Email/Username'></TextInput>
        <TextInput style={INPUT.loginInput} value={''} placeholder='Password' secureTextEntry={true}
        onChange={handleInput}></TextInput>
        <Pressable style={BUTTONS.button1} >
            <Text style={BUTTONS.text}>{loginButtonTitle}</Text>
        </Pressable>
        <Button title='Fogot Password?' style={FONTSTYLES.nativeButtonLink} />
        <Pressable style={BUTTONS.button2} >
            <Text style={BUTTONS.text}>{createAccountButtonTitle}</Text>
        </Pressable>
        <Text style={FONTSTYLES.footerText}> Version {versionNumber} | Developed by Rilpix Africa</Text>
        <StatusBar style="auto" />

    </SafeAreaView>
);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

