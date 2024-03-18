import {View, StyleSheet, Text, Alert, FlatList } from "react-native"
import Title from "../components/Title"
import { useEffect, useState } from "react"
import PrimaryButton from "../components/PrimaryButton"
import NumberContainer from "../components/NumberContainer";
import InstructionText from "../components/InstructionText"
import Cards from "../components/Card"
import { Entypo } from '@expo/vector-icons';
import Colors from "../constants/colors";
import LogRounds from "../components/LogRounds";


let min = 1
let max = 100
export default function Gamescreen({userSelectedNumber, onGameOver}){
    useEffect(()=>{
        min = 1
        max = 100
    },[])
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
    const [guessRounds, setGuessRounds] = useState([initialGuess])

    const guessNumber = guessRounds.length

    const nextGuessHandler= (direction) => {
        if (direction ==="lower"&& currentGuess < userSelectedNumber || 
        direction === "greater" && currentGuess > userSelectedNumber) {
           Alert.alert("Don't lie!", "You know this is wrong...",[
            {text:"sorry!", style:"cancel"},
           ])
           return
        }  
        if(direction === "lower"){
            max = currentGuess - 1
        }else{
            min = currentGuess + 1
        }
        const newRandomNumber = generateRandomBetween(min, max, currentGuess)

        setCurrentGuess(newRandomNumber)
        setGuessRounds((prevstate)=>{
            return([
                ...prevstate,
                newRandomNumber
            ])
        })
    }
    console.log(min,max, initialGuess,currentGuess)
    useEffect(()=>{
        if (currentGuess == userSelectedNumber) {
            onGameOver(guessRounds.length)
        }
    },[currentGuess, onGameOver, userSelectedNumber])

    return(
    <View >
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Cards>
            <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton  onPress={ nextGuessHandler.bind(this, "lower") }>
                    <Entypo name="minus" size={24} color="white" />
                    </PrimaryButton>
                    </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton  onPress={ nextGuessHandler.bind(this, "greater") }>
                    <Entypo name="plus" size={24} color="white" />
                    </PrimaryButton>
                    </View>
            </View>
        </Cards>
        <View style={styles.logcontainer}>
            <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.roundFlatlist}
            keyExtractor={item => item}
            data={guessRounds}
            renderItem={ guess =><LogRounds roundNumber={guessNumber - guess.index} guess={guess.item}/>}
            />
        </View>
    
        
    </View>
    )
}

const styles = StyleSheet.create({
    buttonsContainer:{
        flexDirection: "row",
    },
    buttonContainer:{
        flex:2,
    },
    instructionText:{
        marginBottom:12
    },
    logcontainer:{
        margin: 20,
        overflow:"hidden",
        height:250,
        overflow:"scroll",
        borderRadius:18,
        padding:10

    },
    // logRounds:{
    //     textAlign:"center",
    //     width:"100%",
    //     borderWidth:1,
    //     marginVertical:3,
    //     borderRadius:10,
    //     color:"white",
    //     overflow:"hidden",
    //     backgroundColor:Colors.primary600,
    //     padding:10,
    // },
    roundFlatlist:{
        overflow:"hidden",
    }
    
})
