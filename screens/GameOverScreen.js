import { TextInput, View, Text, StyleSheet } from "react-native";
import InstructionText from "../components/ui/IntructionText";
import Card from "../components/ui/Card";
function GameOverScreen() {
  return (
    <View style={styles.main}>
      <Card>
        <InstructionText>Game Over</InstructionText>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: 100,
  },
});

export default GameOverScreen;
