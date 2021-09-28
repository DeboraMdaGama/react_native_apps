import React, { useState } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../CountDown/styles';

let timer: ReturnType<typeof setInterval>;
let controlTimer = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

export default function CountDown() {
    const [countDown, setCountDown] = useState('00:00:00');
    const [controlCountDown, setcontrolCountDown] = useState('START');
    const [lastTime, setLastTime] = useState('');


    function startCountDown() {
        if (controlTimer == 1) {
            clearInterval(timer);
            setcontrolCountDown('START');
            setLastTime(countDown);
            controlTimer = 0;
        } else {
            controlTimer = 1;
            timer = setInterval(() => {
                seconds++;

                if (seconds == 60) {
                    seconds = 0;
                    minutes++;
                }

                if (minutes == 60) {
                    minutes = 0;
                    hours++;
                }


                let formatcountDown =
                    (hours < 10 ? '0' + hours : hours) + ':'
                    + (minutes < 10 ? '0' + minutes : minutes) + ':'
                    + (seconds < 10 ? '0' + seconds : seconds);

                setCountDown(formatcountDown);


            }, 1000);

            setcontrolCountDown('STOP');
        }
    }
    function resetCountDown() {
        if (controlTimer == 1) {
            clearInterval(timer);
            controlTimer = 0;
        }

        setLastTime(countDown);
        setCountDown('00:00:00');
        seconds = 0;
        minutes = 0;
        hours = 0;
        setcontrolCountDown('START');
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/crono.png')}
            />
            <Text style={styles.controlCountDown}>
                {countDown}
            </Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.buttonContent}
                    onPress={startCountDown}
                >
                    <Text style={styles.buttonText}>
                        {controlCountDown}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonContent}
                    onPress={resetCountDown}
                >
                    <Text style={styles.buttonText}>
                        Restart
                    </Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.lastTimeText}>
                {lastTime ? `Último tempo ${lastTime}` : ''}
            </Text>
        </View>
    );
};