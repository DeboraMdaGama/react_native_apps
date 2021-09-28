import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import FonteAwsome from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';


export default function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
        />
      </TouchableOpacity>

      <View style={styles.headerContent}>

        <TouchableOpacity>
          <FonteAwsome
            name='plus-square-o'
            size={25}
            color='#fff'
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <FonteAwsome
            name='heart-o'
            size={25}
            color='#fff'
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../assets/messenger.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

    </View>
  );
}
