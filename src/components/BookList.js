import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import books from '../data/car.json';
const BookList = () => {
    return (
        <View>
            <FlatList
                data={books}
                renderItem={({ item }) => {
                    return <View>
                        <Text>{item.Car}</Text>
                        <Text>{item.Model}</Text>
                        <Text>{item.Model_Year}</Text>
                        <Text>{item.Car_Vin}</Text>
                        <Image style={{ height: 300, flex: 1, }} source={{ uri: item.Car_Image }} />

                    </View>
                }}
            />
        </View>
    )
}

export default BookList

const styles = StyleSheet.create({
})