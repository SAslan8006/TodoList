// İmport Libraries
import React from "react";
import { View, Text, StyleSheet } from "react-native";

//Create Component
const Header = ({ title }) => {

    return (
        <View style={styles.container}>
            <Text style={{ color: "red", fontSize: 35 }}>{title}</Text>
        </View>
    )
}
// Make Component Available to Other Components

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center", // alignContent yerine alignItems kullanıldı
        backgroundColor: 'gray',
        height: 80,

    },
});

export default Header;
