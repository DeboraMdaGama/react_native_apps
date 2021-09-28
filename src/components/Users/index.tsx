import React from "react";
import { Text, View } from "react-native";
import {styles} from "./styles"

interface IProps{
    name: string,
    job: string
}

export default function Users(props: IProps){
    return(
        <View style={styles.container}>
            <Text style={styles.userData}>
                Nome: {props.name}
            </Text>
            <Text style={styles.userData}>
                Cargo: {props.job}
            </Text>
        </View>
    );
}