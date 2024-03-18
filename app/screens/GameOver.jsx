import { StyleSheet, Image,Text, View } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";

export default function GameOver({rounds, userNumber, onStartNewGame}) {
	return (
		<View style={styles.rootContainer}>
			<Title>GAME OVER!</Title>
			<View style={styles.imageContainer}>
				<Image style={styles.image} source={require("../../assets/images/success.png")}></Image>
			</View>
			<Text style={styles.summaryText}>Your Phone needed <Text style={styles.highlightText}>{rounds}</Text> rounds to guess the number <Text style={styles.highlightText}>{userNumber}</Text></Text>
			<PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
		</View>
	);
}

 const styles = StyleSheet.create({
	rootContainer:{
		flex:1,
		justifyContent:"center",
		alignItems: "center",
		padding:24
	},
	imageContainer:{
		width:250,
		height:250,
		borderRadius:125,
		borderWidth:3,
		borderColor:Colors.primary800 ,
		overflow:"hidden",
		margin:24,
	},
	image:{
		height:"100%",
		width:"100%"
	},
	summaryText:{
		fontFamily:"open-sans",
		fontSize:18,
		marginVertical:24
	},
	highlightText:{
		fontFamily:'open-sans-bold',
		color: Colors.primary500
	}
 });