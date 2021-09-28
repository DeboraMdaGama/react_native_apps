import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';

export default function FortuneCookie() {
    const [image, setImage] = useState(require('../../assets/biscoito.png'));
    const [cookiePhrase, setCookiePhrase] = useState('');

    const phrases = [
        'Siga os bons e aprenda com eles.',
        'O bom-senso vale mais do que muito conhecimento.',
        'O riso é a menor distância entre duas pessoas.',
        'Deixe de lado as preocupações e seja feliz.',
        'Realize o óbvio, pense no improvável e conquiste o impossível.',
        'Acredite  em milagres, mas não dependa deles.',
        'A maior barreira para o sucesso é o medo do fracasso.'
    ];

    function handleBreakCookie() {
        const randomNumber = Math.floor(Math.random() * 6);
        setCookiePhrase(`"${phrases[randomNumber]}"`);
        setImage(require('../../assets/biscoitoAberto.png'))
    }
    function handleRestartCookie(){
        setCookiePhrase('');
        setImage(require('../../assets/biscoito.png'))
    }
    return (
        <View style={styles.container}>
            <Image
                source={image}
                style={styles.image}
            />
            <Text style={styles.cookiePhrase}> {cookiePhrase} </Text>

            <TouchableOpacity style={styles.buttonBreakCookie} onPress={handleBreakCookie}>
                <View style={styles.buttonBreakCookieView}>
                    <Text style={styles.buttonBreakCookieText}>
                        Quebrar biscoito
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[styles.buttonBreakCookie, styles.buttonRestartCookie]}
                onPress={handleRestartCookie}
            >
                <View style={styles.buttonBreakCookieView}>
                    <Text style={[styles.buttonBreakCookieText, { color: '#121212', }]}>
                        Reiniciar biscoito
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}