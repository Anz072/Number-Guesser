import { View, StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

function FlastlistItem({ text, position }) {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>
        {position}. Phone guessed: {text}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: "open-sans-bold",
  },
  main: {
    alignItems: "center",
    backgroundColor: Colors.primary500,
    borderColor: Colors.primary600,
    borderWidth: 3,
    marginVertical: 4,
    height: 50,
    justifyContent: "center",
    borderRadius: 8,
  },
});
export default FlastlistItem;
