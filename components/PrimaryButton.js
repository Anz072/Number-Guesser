import { StyleSheet, View, Text, Pressable } from "react-native";

function PrimaryButton({ children }) {
  function pressHandler() {
    console.log("ree");
  }

  return (
    <View style={styles.btnOutContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.btnInContainer, styles.pressed]
            : styles.btnInContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: "#d78c00" }}
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
    margin:5,
    backgroundColor: "red",
  },
  btnInContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffa500",
    paddingHorizontal: 24,
    height: "100%",
  },
  btnText: {
    color: "#000000",
    fontWeight: "600",
    fontSize: 16,
  },
  //iOS
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
