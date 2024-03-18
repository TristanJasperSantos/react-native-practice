import { Link } from "expo-router";
import { StyleSheet,Text, View , ImageBackground, SafeAreaView} from "react-native";
import MainGameScreen from "./screens/MainGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import Gamescreen from "./screens/GameSreen";
import { useState, useCallback } from "react";
import Colors from "./constants/colors";
import GameOver from "./screens/GameOver";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
 
SplashScreen.preventAutoHideAsync();

export default function Page() {


	const[gameisOver, setGameIsOver] = useState(true)
	const[pickednumber, setPickedNumber] = useState()
	const[roundsNum, setRoundsNum] = useState(0)

	const [isFontLoaded] = useFonts({
		'open-sans': require('../assets/fonts/OpenSans_Condensed-Regular.ttf'),
		'open-sans-bold': require('../assets/fonts/OpenSans_Condensed-Bold.ttf')
	})
	const onLayoutRootView = useCallback(async () => {
		if (isFontLoaded) {
		  await SplashScreen.hideAsync();
		}
	  }, [isFontLoaded]);
	
	  if(!isFontLoaded){
		console.log("start")
		return (
		<View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
			<Text>Loading...</Text>
		</View>
		)
    ;
	}

	
	const startNewGameHandler = ()=>{
		setPickedNumber(null)
		setRoundsNum(0)
	}
	const pickedNumberHandler = (pickedNumber)=>{
		setPickedNumber(pickedNumber)
		setGameIsOver(false)
	}
	const GameOverHandler = (numberOfRounds)=>{
		setGameIsOver(true)
		setRoundsNum(numberOfRounds)
	}

	let screen = <MainGameScreen onPick={pickedNumberHandler}/>
	if (pickednumber) {
		screen = <Gamescreen onGameOver={GameOverHandler} userSelectedNumber={pickednumber}/>
	}
	if (gameisOver && pickednumber) {
		screen =  <GameOver userNumber={pickednumber} rounds={roundsNum} onStartNewGame={startNewGameHandler}/>
	}

	// if (gameisOver) {
	// 	screen =  <GameOver userNumber={pickednumber} rounds={} onStartNewGame={startNewGameHandler}/>
	// }

	

	return (
		<LinearGradient style={styles.gameScreenContainer} colors={[Colors.primary700, Colors.accent500]} onLayout={onLayoutRootView}>
		 <ImageBackground 
		 style={styles.gameScreenContainer} 
		 source={require('../assets/images/background.png')}
		 imageStyle={styles.imagestyle}
		 >
			<SafeAreaView style={styles.gameScreenContainer}>
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
