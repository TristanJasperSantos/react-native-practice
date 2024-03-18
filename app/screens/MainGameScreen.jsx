import { StyleSheet, Text, TextInput, View, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/Title";
import Cards from "../components/Card";
import InstructionText from "../components/InstructionText";



export default function GameScreen({onPick}) {
  const [enteredValue, setEnteredValue] = useState("")

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
    <View>
       <Title>Guess My Number</Title>
        <Cards>
          <InstructionText>Enter a number</InstructionText>
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
        </Cards>
    </View>
  );
}

const styles = StyleSheet.create({
   
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
      flex:2,
    },
    instructionText:{
      fontSize:24,
      color: Colors.accent500
    }
});