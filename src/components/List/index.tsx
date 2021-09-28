import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { styles } from './styles';


export default function List(props:any){

  function carregaIcone(likeada:boolean){
    return likeada ? require('../../assets/likeada.png') :
    require('../../assets/like.png')
  }

  function mostraLikes(likers:number){
    if(likers === 0){
      return;
    }

    return( 
    <Text style={styles.likes}>{likers} {likers > 1 ? 'curtidas' : 'curtida'}</Text>
    );
  }

  return(
    <View style={{backgroundColor:'#121212'}}>
      <View style={styles.viewPerfil}>
        <Image
        source={{uri: props.data.imgperfil}}
        style={styles.fotoPerfil}
        />
        <Text style={styles.nomeUsuario}>{props.data.nome}</Text>
      </View>

      <Image
      resizeMode="cover"
      source={{uri: props.data.imgPublicacao}}
      style={styles.fotoPublicacao}
      />

      <View style={styles.areaBtn}>
        <TouchableOpacity>
          <Image
          source={carregaIcone(props.data.likeada)}
          style={styles.iconeLike}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnsend}>
          <Image
          source={require('../../assets/comment.png')}
          style={styles.iconeLike}
          />
        </TouchableOpacity>       

        <TouchableOpacity style={styles.btnsend}>
          <Image
          source={require('../../assets/send.png')}
          style={styles.iconeLike}
          />
        </TouchableOpacity>           
      </View>

      {mostraLikes(props.data.likers)}

      <Text style={styles.nomeRodape}>
        {props.data.nome}
      </Text>

      <Text style={styles.descRodape}>
        {props.data.descricao}
      </Text>


    </View>
  );
}
