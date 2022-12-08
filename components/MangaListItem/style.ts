import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        width: "100%",  
        backgroundColor: Colors.dark.itemBackgroundColor,
        borderColor: Colors.dark.itemBorderColor,
        borderWidth: 2,
        padding: 5,
    },
    botContainer: {
        flexDirection: 'row',
    },
    textStyleTitle: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    textStyleInfo: {
        fontSize: 17,
        color: Colors.dark.text,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    textStyleBrackets: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    rating: {
        marginLeft: 'auto',
        flexDirection: 'row',
    },
    ratingText: {
        marginRight: 5,
        marginBottom: 5,
        fontSize: 27,
        fontWeight: 'bold',
        backgroundColor: Colors.dark.text,
        width: 40,
        height: 40,
        borderRadius: 5,
        borderColor: Colors.dark.tint,
    },
});

export default styles;