import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BookList from '../components/BookList'

const BooksScreen = () => {
    return (
        <View>
            <BookList />
        </View>
    )
}

export default BooksScreen

const styles = StyleSheet.create({})