import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        backgroundColor:'#dcdcdc',
        padding:20
    },
    input:{
        marginTop:5,
        backgroundColor:'#b0c4de',
        borderRadius:15,
        paddingLeft:15,
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10,
        borderColor:'#191960',
        borderWidth:3
    },
    picker:{
        marginTop:5,
        backgroundColor:'#b0c4de',
        borderRadius:15,
        paddingLeft:15,
        fontSize:40,
        fontWeight:'bold',
        marginBottom:10,
        borderColor:'#191960',
        borderWidth:3
    },
    text:{
        fontSize:25,
        color:'#4682B4',
        marginBottom:10,
        fontWeight:'bold',
    },
    title:{
        alignSelf:'center',
        fontSize:25,
        marginBottom:20
    },
    button:{
        width:'70%',
        height:70,
        backgroundColor:'#191960',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        marginTop:20
    },
    buttonText:{
        color:'white',
        fontSize:20,
    },
    resultsView:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        backgroundColor:'#dcdcdc',
        padding:20,
        borderColor:'#191960',
        borderWidth:3,
        marginTop:25
    },
    resultText:{
        fontSize:20,
        fontWeight:'bold',
        color:'black'
    },
});