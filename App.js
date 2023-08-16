import { StyleSheet,SafeAreaView, Text, View } from 'react-native'
import React from 'react'

function App () {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <Text style={styles.text}>My Tasks</Text>
        <Text style={styles.text}>Enter your tasks in the text box bellow and press the "Add" button to add.</Text>

      </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    marginLeft:16,
    marginRight:16,
    marginTop:46,
    backgroundColor:"#dedede",
    justifyContent:'center',
    alignItems:'center',
  }, 
  text: {
    fontSize:50
  }
})

