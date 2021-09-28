import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from './styles';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'

export default function Home() {

    const navigation = useNavigation();

    function handleNavigationInstagram() {
        navigation.navigate("Instagram");
    }
    function handleNavigationCountDown() {
        navigation.navigate("CountDown");
    }
    function handleNavigationFortuneCookie() {
        navigation.navigate("FortuneCookie");
    }
    function handleNavigationPracticing() {
        navigation.navigate("Practicing");
    }
    function handleNavigationRegistration() {
        navigation.navigate("Registration");
    }
    return (
        <View style={styles.container}>
            <ImageBackground
            source={require('../../assets/background.png')}
            style={styles.backgroundImage}
            resizeMode='cover'>
            <Text style={styles.buttonTitle}> 
             Aplicativos desenvolvidos!
                </Text>

            <TouchableOpacity style={styles.buttonContent}
                onPress={handleNavigationInstagram}
            >
                <Text style={styles.buttonText}> Instagram
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContent}
                onPress={handleNavigationCountDown}
            >
                <Text style={styles.buttonText}> CountDown
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContent}
                onPress={handleNavigationFortuneCookie}
            >
                <Text style={styles.buttonText}> FortuneCookie
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContent}
                onPress={handleNavigationPracticing}
            >
                <Text style={styles.buttonText}> Practicing
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContent}
                onPress={handleNavigationRegistration}
            >
                <Text style={styles.buttonText}> Registration
                </Text>
            </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}