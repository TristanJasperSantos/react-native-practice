import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

export default function Cards({children}) {
  return (
    <View style={styles.inputContainer}>
        {children}
    </View>
  );
}

const styles = StyleSheet.create({
    inputContainer:{
        alignItems:"center",
        marginTop: 20,
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
})