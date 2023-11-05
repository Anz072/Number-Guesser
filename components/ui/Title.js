import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Title({children}){
    return <Text  style={styles.title}>{children}</Text>
}


const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontWeight: '600',
        color: Colors.contrastWhite,
        textAlign: 'center',
        borderWidth: 2,
        paddingHorizontal:15,
        paddingVertical:10,
    fontFamily: 'open-sans-bold',
    borderColor: Colors.contrastWhite
    }

})

export default Title;