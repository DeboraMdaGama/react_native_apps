import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    viewPerfil:{
      flexDirection: 'row',
      flex:1,
      alignItems: 'center',
      padding:8,
      backgroundColor:'#121212',
      color:'#fff'
    },
    fotoPerfil:{
      width: 50,
      height:50,
      borderRadius: 25
    },
    nomeUsuario:{
      paddingLeft: 5,
      fontSize: 22,
      color: '#fff'
    },
    fotoPublicacao:{
      height: 400,
      alignItems: 'center'
    },
    areaBtn:{
      flexDirection: 'row',
      padding: 5,
    },
    iconeLike:{
      width: 25,
      height: 25
    },
    btnsend:{
      paddingLeft: 5
      
    },
    likes:{
      
      marginLeft: 5,
      
      color: '#fff'
    },
    nomeRodape:{
      fontSize: 18,
      paddingLeft: 5,
      
      color: '#fff'

    },
    descRodape:{
      paddingLeft: 5,
      paddingBottom: 10,
      fontSize: 15,
      
      color: '#fff'
    }
  
  });