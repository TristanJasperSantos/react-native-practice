import {Text, StyleSheet} from "react-native"


export default function Title({children}){     
    return(
        <Text style={styles.title}>
        {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    title:{
        fontFamily:"open-sans-bold",
        marginVertical: 30,
        marginHorizontal: 50,
        padding: 10,
        borderWidth:2,
        borderColor:"white",
        textAlign:"center",
        fontSize: 27,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        maxWidth:"80%",
        width:300
        
    }
    
})