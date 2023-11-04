import { StyleSheet, Text, View,ImageBackground} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar  } from "expo-status-bar";

import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <LinearGradient
      colors={["#4e0329", "#ddb52f"]}
      style={styles.rootContainer}
    >
      <ImageBackground
        source={require("./images/background.png")}
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={styles.backgroundImg}
      >
        <StartGameScreen />
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
