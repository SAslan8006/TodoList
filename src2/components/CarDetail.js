import React from "react";
import { View, Text, StyleSheet, Image, Linking } from "react-native";
import Item from "./Item";
import ItemSection from './ItemSection';
import Button from "./Button";


const CarDetail = ({ brand }) => {
    return (
        <Item>
            <ItemSection>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>{brand.idCategory}</Text>
                    <Text style={styles.headerText}>{brand.strCategory}</Text>
                </View>
            </ItemSection>
            <ItemSection>
                <Image style={styles.imageStyle} source={{ uri: brand.strCategoryThumb }} />
            </ItemSection>
            <ItemSection>
                <Button bottonPress={() => {
                    Linking.openURL
                    (brand.strCategoryThumb)
                }} />
            </ItemSection>

        </Item>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'cloumn',
        justifyContent: "space-between",
    },
    headerText: {
        fontSize: 18,
        fontWeight: '500',
        textTransform: "uppercase"
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: 0,
    }
});
export default CarDetail;
