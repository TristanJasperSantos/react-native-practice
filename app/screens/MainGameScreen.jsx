import { Link } from "expo-router";

import { StyleSheet, Text, TextInput, View, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";


export default function GameScreen({onPick}) {
  const [enteredValue, setEnteredValue] = useState("12")

  const handleInput = (EnteredValue)=>{
    setEnteredValue(EnteredValue)
  }
  const confirmInput = ()=>{
    const chosenNumber = parseInt(enteredValue)
    
    console.log(enteredValue)

    if(isNaN(chosenNumber) || chosenNumber<0 || chosenNumber>99){
      Alert.alert("Invalid number","Number has to be a number between 1 and 99",[{text: "okay", style:"destructive"}])
      return
    }else{
		onPick(chosenNumber)
    }
  }
  const resetInput = ()=>{
    setEnteredValue("")
  }

  console.log(enteredValue)

  
  return (
    <View style={styles.inputContainer}>
      <TextInput 
       style={styles.numberInput} 
       maxLength={2} 
       keyboardType="number-pad"
       autoComplete="off"
       onChangeText={handleInput}
       value={enteredValue}
       />
       
      <View style={styles.buttonsContainer}>      
        <View style={styles.buttonContainer}><PrimaryButton onPress={resetInput} >Reset</PrimaryButton></View>
        <View style={styles.buttonContainer}><PrimaryButton onPress={confirmInput }>Confirm</PrimaryButton></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    inputContainer:{
      alignItems:"center",
      marginTop: 80,
      marginHorizontal: 24,
      padding: 15,
      borderRadius: 12,
      backgroundColor: Colors.primary700,
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
      borderBottomColor: Colors.accent500,
      borderBottomWidth: 2,
      color: Colors.accent500,
      marginVertical: 8,
      fontWeight: "bold",
      width: 50,
      justifyContent: "center",
      textAlign: "center",
    },
    buttonsContainer:{
      flexDirection:"row",
    },
     buttonContainer:{
      flex:1,
     }
});