import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header:{
    height: 65,
    backgroundColor: '#121212',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 0.2,
    shadowColor: '#FFF',
    elevation: 2
  },
  logo:{
    width:100,
    height: 25,
  },
  icon:{
    width:25,
    height: 25,
  },
  headerContent:{
    width: 100,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
  }
})