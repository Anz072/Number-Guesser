import { Text, View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.main}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  main: {
    borderWidth: 4,
    borderColor: Colors.gamescreen500,
    padding: deviceWidth < 420 ? 16 : 24,
    margin: deviceWidth < 420 ? 16 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.gamescreen500,
    fontSize: 36,
    fontWeight: "600",
  },
});

export default NumberContainer;
