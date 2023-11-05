import { View, StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

function InstructionText({ children, style }) {
  return <Text style={[styles.mainCardInstructions, style]}>{children}</Text>;
}
const styles = StyleSheet.create({
  mainCardInstructions: {
    marginVertical: 10,
    fontSize: 14,
    color: Colors.contrastWhite,
    fontFamily: 'open-sans-bold'
  },
});
export default InstructionText;
