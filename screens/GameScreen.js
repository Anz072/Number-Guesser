import { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Alert,
  FlatList,
  useWindowDimensions,
} from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import FlastlistItem from "../components/ui/FlatlistItem";

function generateRandomBetween(min, max, exclude) {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  if (randomNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }
  return randomNum;
}
let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [rounds, setRounds] = useState([initialGuess]);
  const { width, height } = useWindowDimensions();
  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(rounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  //direction - "lower"/"greater"
  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Bro dont lie", "Lying is bad", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
    setRounds((prevRounds) => [newRandomNumber, ...prevRounds]);
  }
  const roundCounter = rounds.length;

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <View style={styles.buttonLayout}>
          <View style={styles.buttonLayoutContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={32} color={"black"} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonLayoutContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={32} color={"black"} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={styles.buttonLayoutWide}>
          <View style={styles.buttonLayoutContainerWide}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={32} color={"black"} />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonLayoutContainerWide}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={32} color={"black"} />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }
  return (
    <View style={styles.main}>
      <View style={styles.titleLayout}>
        <Title>Opponent's Guess</Title>
      </View>
      {content}
      <View style={styles.flatListContainer}>
        <FlatList
          data={rounds}
          renderItem={(itemData) => (
            <FlastlistItem
              position={roundCounter - itemData.index}
              text={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 12,
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
  buttonLayoutWide: {
    flexDirection: "row",
    marginBottom: 5,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLayoutContainerWide: {
    width: "30%",
    maxWidth: 240,
    minWidth: 80,
  },
  titleLayout: {
    marginHorizontal: 25,
    alignItems: "center",
  },
  flatListContainer: {
    marginTop: 20,
    height: 290,
    marginHorizontal: 25,
  },
});
export default GameScreen;
