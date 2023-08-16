import { SafeAreaView, Text,TextInput, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import { styles as styles} from './styles'

function App () {
  const [text,setText]=useState("");
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <Text style={styles.title}>My Tasks</Text>
        <Text style={styles.subtitle}>Enter your tasks in the text box bellow and press the "Add" button to add.</Text>
        <TextInput style={styles.input} placeholder="Enter your task here!" />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText} >Add Task</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default App



