import { Pressable, View, Text, StyleSheet} from "react-native";

export default function PrimaryButton(props) {
  return (
    <Pressable style={styles.button}>
        <View>
            <Text>sample</Text>
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    button:{

        borderWidth: 1
      }
})