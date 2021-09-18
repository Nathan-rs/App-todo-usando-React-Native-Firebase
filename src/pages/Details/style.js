import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },

    btnSave: {
        width: 60,
        height: 60,
        backgroundColor: "#0786E8",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        position:"absolute",
        bottom: 20,
        right: 20
    },
    label: {
        width: "90%",
        marginTop: 20,
        marginLeft: 20,
        fontSize: 16,
        color: "#f92e6a"
    },
    inputText: {
        width: "90%",
        height: 50,
        padding: 10,
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderBottomWidth: 1,
        color: "#282b2db5",
    }
})

export default styles