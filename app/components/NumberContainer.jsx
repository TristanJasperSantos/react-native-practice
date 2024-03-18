import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../constants/colors";

export default function NumberContainer({children}) {
  return (
    <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor: Colors.accent500,
        padding: 10, 
        marginHorizontal:36,
        borderRadius: 8,
    },
    numberText:{
        fontFamily:"open-sans-bold",
        textAlign:"center",
        fontSize: 48,
        color: Colors.accent500
    }
})