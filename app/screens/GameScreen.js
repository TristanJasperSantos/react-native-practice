import { Link } from "expo-router";
import { StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";


export default function GameScreen() {
  return (
    <View style={styles.inputContainer}>
       <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad"/>
      <PrimaryButton/>
    </View>
  );
}

const styles = StyleSheet.create({
    inputContainer:{
      marginTop: 80,
      marginHorizontal: 24,
      padding: 15,
      borderRadius: 12,
      backgroundColor: "#72063c",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 10,
    },
    numberInput:{
      height: 50,
      fontSize: 32,
      borderBottomColor:"#ddb52f",
      borderBottomWidth: 2,
      color:"#ddb52f",
      marginVertical: 8,
      fontWeight: "bold",
      width: 50,
      justifyContent: "center",
      textAlign: "center",
    }
});