import { View, StyleSheet } from "react-native";

function Card({ children }) {
  return <View style={styles.mainCard}>{children}</View>;
}
const styles = StyleSheet.create({
  mainCard: {
    backgroundColor: "#3b021f",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginHorizontal: 24,
    elevation: 6,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    minHeight: 120,
  },
});
export default Card;
