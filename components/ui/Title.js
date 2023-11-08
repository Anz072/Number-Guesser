import { Text, StyleSheet, Platform } from "react-native";
import Colors from "../../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.contrastWhite,
    textAlign: "center",
    borderWidth: Platform.OS === "android" ? 2 : 0,
    paddingHorizontal: Platform.select({ios: 12, android: 15}),
    paddingVertical: 10,
    fontFamily: "open-sans-bold",
    borderColor: Colors.contrastWhite,
    alignItems: "center",
    width: 300,
    maxWidth: "80%",
  },
});

export default Title;
