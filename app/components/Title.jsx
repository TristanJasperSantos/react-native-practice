import {Text, StyleSheet} from "react-native"
import Colors from "../constants/colors"

export default function Title({children}){     
    return(
        <Text style={styles.title}>
        {children}
        </Text>
    )
}

const styles = StyleSheet.create({
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