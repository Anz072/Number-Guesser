import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Alert,
  useWindowDimensions,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/IntructionText";

function StartGameScreen({ onPickNumber }) {
  const { width, height } = useWindowDimensions();
  const marginTopDis = height < 380 ? 40 : 100;

  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }
  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      //alert
      Alert.alert(
        "Invalid Input",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(chosenNumber);
  }
  return (
    <View style={[styles.main, { marginTop: marginTopDis }]}>
      <View style={styles.titlelayout}>
        <Title>Guess My Number</Title>
      </View>
      <Card>
        <InstructionText>Enter Your Number</InstructionText>
        <TextInput
          style={styles.input}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonLayout}>
          <View style={styles.buttonLayoutContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonLayoutContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
  },
  mainCard: {
    backgroundColor: "#3b021f",
    marginTop: 25,
    alignItems: "center",
    borderRadius: 8,
    marginHorizontal: 24,
    elevation: 6,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  input: {
    width: 70,
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.gamescreen500,
    borderBottomWidth: 2,
    color: Colors.gamescreen500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonLayout: {
    flexDirection: "row",
    marginBottom: 5,
    marginHorizontal: 5,
  },
  buttonLayoutContainer: {
    flex: 1,
  },
  titlelayout: {
    marginBottom: 15,
    alignItems: "center",
  },
});
export default StartGameScreen;
