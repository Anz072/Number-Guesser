import { TextInput, View, Text, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.main}>
      <TextInput style={styles.input} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false}/>
      <View style={styles.buttonLayout}>
        <View style={styles.buttonLayoutContainer}>
      <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonLayoutContainer}>
      <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    backgroundColor:'#3b021f',
    marginTop:100,
    alignItems: "center",
    borderRadius:8,
    marginHorizontal: 24,
    elevation:6,
    shadowColor: 'black',
    shadowOffset: {width:0, height:2},
    shadowRadius: 6,
    shadowOpacity: 0.25
  },
  input:{
    width: 70,
    height: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign:'center'
  },
  buttonLayout:{
    flexDirection:'row',
    marginBottom:5,
    marginHorizontal:5
  },
  buttonLayoutContainer: {
    flex:1
  }
});
export default StartGameScreen;
