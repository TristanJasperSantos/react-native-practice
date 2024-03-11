import { Link } from "expo-router";
import { StyleSheet, View , ImageBackground, SafeAreaView} from "react-native";
import MainGameScreen from "./screens/MainGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import Gamescreen from "./screens/GameSreen";
import { useState } from "react";
import Colors from "./constants/colors";
 

export default function Page() {
	

	const[pickednumber, setPickedNumber] = useState()


	const pickedNumberHandler = (pickedNumber)=>{
		setPickedNumber(pickedNumber)
	}

	let screen = <MainGameScreen onPick={pickedNumberHandler}/>
	if (pickednumber) {
		screen = <Gamescreen userSelectedNumber={pickednumber}/>
	}

	

	return (
		<LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.gameScreenContainer}>
		 <ImageBackground 
		 style={styles.gameScreenContainer} 
		 source={require('../assets/images/background.png')}
		 imageStyle={styles.imagestyle}
		 >
			<SafeAreaView>
				{screen}
			</SafeAreaView>
		 </ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	gameScreenContainer:{
		flex:1,
	},
	imagestyle:{
		opacity: 0.15
	}
});
