import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Users from "../../components/Users";
import {styles} from "./styles"

export default function Practicing(){
    return(
        <View style={styles.container}>
            <Text style={styles.welcomeMessage}>
                Seja Bem Vindo!
            </Text>
            <Users name='Débora' job='React Native Dev'/>

        </View>
    );

}