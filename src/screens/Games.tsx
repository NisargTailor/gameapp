//import liraries

import { SafeAreaView, StyleSheet } from "react-native";
import { ThemeInterface } from "../constant";
import { scale } from "../utils";


// create a component
const Games = () => {
  
  return (
    <SafeAreaView>
      
    </SafeAreaView>
  );
};

const Styles = (theme: ThemeInterface) => {
  return StyleSheet.create({
    safeAreaView: {
      flex: 1,
      backgroundColor:theme.color.backgroud
    },
    container: {
      flex: 1,
      backgroundColor: theme.color.backgroud,
      paddingBottom:scale(30)
    },
    buttonContainer:{
      justifyContent:'center',
      alignItems:'center'
    },
    spinButtonText:{
      fontSize:18,
      fontWeight:'800',
      color:theme.color.white,
      
    },
    spinButton:{
      zIndex:10,
      padding:18,
      borderRadius:20,
      backgroundColor:theme.color.primary,
      borderWidth:scale(2),
      borderColor:theme.color.tertiary
    }
  });
};

//make this component available to the app
export default Games;
