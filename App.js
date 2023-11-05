import { StyleSheet, Text, View,ImageBackground, SafeAreaView} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar  } from "expo-status-bar";
import { useState } from "react";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";


export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

  if(userNumber){
    screen = <GameScreen/>
  }

  return (
    <LinearGradient
      colors={[Colors.accent, Colors.gamescreen500]}
      style={styles.rootContainer} 
    >
      <ImageBackground
        source={require("./images/background.png")}
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={styles.backgroundImg}
      >
        <SafeAreaView style={styles.rootContainer}>
        {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundImg: {
    opacity: 0.15
  }
});
