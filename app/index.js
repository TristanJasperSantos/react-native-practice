import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";
import GameScreen from "./screens/GameScreen";
import {Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;

export default function Page() {
  return (
    <View style={styles.gameScreenContainer}>
     <GameScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  gameScreenContainer:{
    height: windowHeight,

  }
});
