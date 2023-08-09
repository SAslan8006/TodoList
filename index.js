import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "./src/components/Header";

const App = () => {
    return (
        <View style={styles.container}>
            <Header title={"Carsssssssssssssssssssv "} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default App;
