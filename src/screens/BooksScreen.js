import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BookList from '../components/BookList'

const BooksScreen = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity onPress={() => { navigation.navigate('BookDetail') }}>
                <Text style={{ fontSize: 20 }}>Add New</Text>
            </TouchableOpacity>
            <BookList />
        </View>
    )
}

export default BooksScreen

const styles = StyleSheet.create({})