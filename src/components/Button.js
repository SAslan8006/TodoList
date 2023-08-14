import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";


const Button = ({ bottonPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={bottonPress}>
            <Text style={styles.textStyle}>Click me</Text>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: 'grey',
        borderWidth: 1,
        borderColor: 'gainsboro',
        marginLeft: 7,
        marginRight: 7,
        borderRadius: 15,
    },
    textStyle: {
        fontSize: 14,
        fontWeight: "500",
        paddingTop: 6,
        marginLeft: 7,
        paddingBottom: 6,
        color: 'white'
    }
});
export default Button;
