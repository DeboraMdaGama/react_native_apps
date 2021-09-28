import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'flex-start',
    backgroundColor:'#1C1C1C',
  },
  buttonContent:{
    width:'70%',
    height:50,
    backgroundColor:'#dd7b22',
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:40
  },
  buttonText:{
    fontSize:20,
    fontWeight:'bold',
    color:'#1C1C1C',
  },
  buttonTitle:{
    fontSize:28,
    fontWeight:'bold',
    color:'#1C1C1C',
    marginTop:-0,
    marginBottom:80,
    justifyContent:'center',
    alignSelf:'center',
    alignItems:'center',
    backgroundColor:'white',
    padding:15,
    opacity:0.8,
    borderRadius:10,
    width:'85%'
  },
  backgroundImage:{
    flex:1, 
    justifyContent:'center', 
    alignItems:'center',
    width:'100%',
  }
});