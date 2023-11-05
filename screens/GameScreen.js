import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  if (randomNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }
  return randomNum;
}

function GameScreen({ userNumber }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.main}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower</Text>
        <View style={styles.buttonLayout}>
            <View style={styles.buttonLayoutContainer}>
            <PrimaryButton>-</PrimaryButton>
            </View>
            <View style={styles.buttonLayoutContainer}>
            <PrimaryButton>+</PrimaryButton>
            </View>
        </View>
      </View>
      <View>
        <Text>LOG ROUNDSs</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 50,
  },
  buttonLayout: {
    flexDirection: "row",
    marginBottom: 5,
    marginHorizontal: 5,
  },
  buttonLayoutContainer: {
    flex: 1,
  },
});
export default GameScreen;
