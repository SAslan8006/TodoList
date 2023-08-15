import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import books from '../data/car.json';
const BookList = () => {
    return (
        <View>
            <FlatList
                data={books}
                // horizontal
                // showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return <View style={{ borderWidth: 3, borderColor: 'gray', fontSize: 24, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.textStyle}>
                            <Text>Araba: {item.Car}</Text>
                            <Text>Model: {item.Model}</Text>
                            <Text>Yıl  : {item.Model_Year}</Text>
                            <Text>Seri : {item.Car_Vin}</Text>
                        </View>
                        <Image style={{ height: 100, width: 100, justifyContent: 'flex-end' }} source={{ uri: item.Car_Image }} />

                    </View>
                }}
            />
        </View>
    )
}

export default BookList

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 2,
        marginLeft: 10,
    }
})