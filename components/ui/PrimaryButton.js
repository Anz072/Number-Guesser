import { StyleSheet, View, Text, Pressable } from "react-native";
import Colors from "../../constants/colors";

function PrimaryButton({ children, onPress, style }) {
  return (
    <View style={[styles.btnOutContainer, style]}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.btnInContainer, styles.pressed]
            : styles.btnInContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  btnOutContainer: {
    overflow: "hidden",
    borderRadius: 8,
    height: 45,
    margin: 5,
  },
  btnInContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary500,
    paddingHorizontal: 24,
    height: "100%",
  },
  btnText: {
    color: Colors.contrastBlack,
    fontFamily: "open-sans-bold",
    fontSize: 16,
  },
  //iOS
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
