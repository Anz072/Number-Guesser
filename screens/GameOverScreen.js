import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import InstructionText from "../components/ui/IntructionText";
import Card from "../components/ui/Card";
import { Colors } from "react-native/Libraries/NewAppScreen";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ rounds, userNumber, newGameHandler }) {
  const { width, height } = useWindowDimensions();
  let imgSize = width < 380 ? 120 : 160;
  if (height < 400) {
    imgSize = 80;
  }
  const imgStyling = {
    width: imgSize,
    height: imgSize,
    borderRadius: imgSize / 2,
  };
  return (
    <ScrollView style={styles.root}>
      <View style={styles.main}>
        <Card>
          <View style={styles.imgContainer}>
            <Image
              style={imgStyling}
              source={require("../images/success.png")}
            />
          </View>
          <InstructionText style={styles.mainInstructionText}>
            Game Over
          </InstructionText>
          <Text style={styles.simpleText}>
            Phone made <Text style={styles.highlightText}>{rounds}</Text>{" "}
            guesses
          </Text>
        </Card>
        <View style={styles.primaryButtonContainer}>
          <PrimaryButton style={styles.PrimaryButton} onPress={newGameHandler}>
            Start New Game
          </PrimaryButton>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  main: {
    marginTop: 70,
  },
  imgContainer: {
    marginTop: 40,
    borderStyle: "solid",
    borderRadius: 50,
  },
  mainInstructionText: {
    marginTop: 35,
    marginBottom: 0,
  },
  simpleText: {
    marginTop: 10,
    fontSize: 18,
    fontFamily: "open-sans",
    color: "white",
    marginBottom: 30,
  },
  highlightText: {
    fontFamily: "open-sans-bold",
    color: "white",
  },
  primaryButtonContainer: {
    marginTop: 50,
    width: "100%",
    alignItems: "center",
  },
  PrimaryButton: {
    height: 60,
    width: "60%",
  },
});

export default GameOverScreen;
