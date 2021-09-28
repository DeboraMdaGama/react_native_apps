import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  image:{
    width: 230,
    height: 230,
  },
  cookiePhrase:{
    fontSize:20,
    color:'#dd7b22',
    margin:30,
    fontStyle:'italic',
    textAlign:'center'
  },
  buttonBreakCookie:{
    width:230,
    height:50,
    borderColor:'#dd7b22',
    borderWidth:2,
    borderRadius:25,
    alignItems:'center'
  },
  buttonBreakCookieView:{
    flex:1,
    justifyContent:'center'
  },
  buttonBreakCookieText:{
    fontSize:18,
    fontWeight:'bold',
    color:'#dd7b22',
  },
  buttonRestartCookie:{
    marginTop:15,
    borderColor:'#121212',
  }
});