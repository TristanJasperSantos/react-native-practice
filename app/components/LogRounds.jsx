import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";


export default function LogRounds({roundNumber,guess}) {
  return (
    <View style={styles.container}>
        <Text style={[{textAlign:"left"}, styles.text]}>#{roundNumber}</Text>
        <Text style={[{textAlign:"right"}, styles.text]}>Oppenent's Guess: {guess}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        borderWidth:1,
        borderColor: Colors.primary700,
        padding:10,
        backgroundColor: Colors.accent500,
        borderRadius:18,
        marginBottom:5
    },
    text:{
        flex:2,
    }
})
