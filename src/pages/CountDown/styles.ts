import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#00aeef'
  },
  controlCountDown:{
    marginTop:-160,
    fontSize:45,
    fontWeight:'bold',
    color:'#fff'
  },
  buttonContainer:{
    flexDirection:'row',
    marginTop:130,
    height: 95,
  },
  buttonContent:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
    margin:17,
    borderRadius:9,
    paddingHorizontal:50
  },
  buttonText:{
    fontSize:20,
    fontWeight:'bold',
    color:'#00aeef'
  },
  lastTimeText:{
    fontSize:25,
    fontWeight:'bold',
    fontStyle:'italic',
    color:'#fff',
    marginTop:20
  }
});