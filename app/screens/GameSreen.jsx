import {View, StyleSheet, Text } from "react-native"
import Title from "../components/Title"
import Colors from "../constants/colors"
import { useState } from "react"



export default function Gamescreen({userSelectedNumber}){

    const generateRandomBetween = (min, max, exclude)=>{
        const randomNum = Math.floor(Math.random() * (max - min) + min)
        
        if(randomNum === exclude){
            return generateRandomBetween(min, max, exclude)
        }else{
            return randomNum
        }
    }
    
    const initialGuess = generateRandomBetween(1,100, userSelectedNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);    

    return(
        <View >
        <Title>Opponent's Guess</Title>
        <Text></Text>
        <View>
          <Text>Higher or Lower?</Text>
        </View>
      
        <View>
            <Text>Log Rounds</Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding: 12,
    },
    title:{
        margin: 20,
        padding: 15,
        borderWidth:2,
        textAlign:"center",
        fontSize: 18,
        fontWeight: "bold",
        color: Colors.accent500,
        textAlign: "center"
        
    }
    
})