import React, { useRef, useEffect} from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

export default function Animation() {
  const larAnimada = useRef(new Animated.Value(150)).current;
  const altAnimada = useRef(new Animated.Value(50)).current;

  
  const lar2Animada = useRef(new Animated.Value(150)).current;
  const alt2Animada = useRef(new Animated.Value(50)).current;

  useEffect(()=> {

    Animated.loop(
      Animated.sequence([
        Animated.timing(larAnimada, {
          toValue: 300,
          duration: 2000,
          useNativeDriver: false
        }),
        Animated.timing(larAnimada, {
          toValue: 150,
          duration: 2000,
          useNativeDriver: false
        })
      ])
    ).start();

    Animated.parallel([
        Animated.timing(lar2Animada, {
          toValue: 300,
          duration: 2000,
          useNativeDriver: false
        }),
        Animated.timing(lar2Animada, {
          toValue: 150,
          duration: 2000,
          useNativeDriver: false
        })
    ]).start();

  }, []);

 return (
   <View style={styles.container}>

      <Animated.View 
      style={{ 
        width: larAnimada,
        height: altAnimada,
        backgroundColor: '#4169e1',
        justifyContent: 'center',
        borderRadius: 50
      }}
      >
        <Text style={{ textAlign: 'center', fontSize: 22, color: '#FFF'}}>Carregando...</Text>
      </Animated.View>

      <Animated.View 
      style={{ 
        width: lar2Animada,
        height: alt2Animada,
        backgroundColor: '#4169e1',
        justifyContent: 'center',
        borderRadius: 50
      }}
      >
        <Text style={{ textAlign: 'center', fontSize: 22, color: '#FFF'}}>Carregando...</Text>
      </Animated.View>

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})