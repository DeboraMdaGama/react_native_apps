import React, { useState } from "react";
import { Text, View, Switch, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function Registration() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [limit, setLimit] = useState(0);
    const [selectedGender, setSelectedGender] = useState();
    const [isEnabled, setIsEnabled] = useState(false);
    function toggleSwitch() {
        setIsEnabled(previousState => !previousState);
    }

    function handleSaveData() {
        Alert.alert(
            'Conta aberta com sucesso!!',
            'Nome: ' + name + '\n' +
            'Idade: ' + age + '\n' +
            'Sexo: ' + selectedGender + ' \n' +
            'Limite Conta: ' + limit.toFixed(2) + '\n' +
            'Conta Estudante: ' + (isEnabled ? 'Ativo' : 'Inativo')
        );
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Preencha o cadastro</Text>
            <Text style={styles.text}>Nome: {name}</Text>
            <TextInput
                placeholder="Digite o seu nome"
                style={styles.input}
                onChangeText={(value) => setName(value)}
            />
            <Text style={styles.text}>Idade: {age}</Text>
            <TextInput
                placeholder="Digite sua Idade"
                style={styles.input}
                keyboardType={'numeric'}
                onChangeText={(value) => setAge(value)}
            />

            <Text style={styles.text}>Sexo: {selectedGender}</Text>
            <Picker
                selectedValue={selectedGender}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedGender(itemValue)
                }>
                <Picker.Item label="Masculino" value="Masculino" />
                <Picker.Item label="Feminino" value="Feminino" />
                <Picker.Item label="Não Binarie" value="NB" />
                <Picker.Item label="Outro" value="Outro" />
            </Picker>

            <Text style={styles.text}>Limite: {limit.toFixed(2)}</Text>
            <Slider
                minimumValue={250}
                maximumValue={2000}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                value={limit}
                onValueChange={(value) => setLimit(value)}
                style={{marginTop:10, marginBottom:10}}
            />
            <View>
                <Text style={styles.text}>Estudante:{isEnabled ? "SIM" : "NÃO"}</Text>

                <Switch
                    style={{ position: 'absolute', alignSelf: 'flex-end',paddingTop: 15 }}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                /></View>
            <TouchableOpacity style={styles.button} onPress={handleSaveData}>
                <Text style={styles.buttonText}>Salvar dados</Text>
            </TouchableOpacity>

        </View>

    )

}