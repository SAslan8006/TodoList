import React from "react";
import { StyleSheet, View } from "react-native";


//Reusable(Tekrar Kullanabilir) Komponentler

const Item = props => {
    return <View style={styles.container}>
        {props.children}
    </View>
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'gainsbro',
        borderBottomWidth: 0,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10

    },
});

export default Item;