import React from "react";
import { StyleSheet, View } from "react-native";


//Reusable(Tekrar Kullanabilir) Komponentler

const ItemSection = props => {
    return <View style={styles.container}>
        {props.children}
    </View>
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: 'gainsbro',
        flexDirection: 'row',
        justifyContent: "flex-start",
        padding: 5
    },
});

export default ItemSection;