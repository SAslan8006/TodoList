import { FlatList, SafeAreaView, Text,TextInput, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import { styles as styles} from './styles'

function App () {
  const [text,setText]=useState("");
  const [tasks,setTasks]=useState([]);

  const handleAddTaskPress=()=>{
    setTasks([...tasks,text]);
    setText("");
  }
  const hanleDeleteTaskPress=(index)=>{
    const newTasks=[...tasks];
    newTasks.splice(index,1);
    setTasks(newTasks);  
  }
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <Text style={styles.title}>My Tasks</Text>
        <Text style={styles.subtitle}>Enter your tasks in the text box bellow and press the "Add" button to add.</Text>
        <TextInput value={text} style={styles.input} onChangeText={setText} placeholder="Enter your task here!" />
        <TouchableOpacity onPress={handleAddTaskPress} style={styles.buttonContainer}>
          <Text style={styles.buttonText} >Add Task</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider}/>
      <FlatList 
        data={tasks} 
        renderItem={({item,index})=>
          <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{item}</Text>
            <TouchableOpacity style={styles.taskDelete} onPress={()=>hanleDeleteTaskPress(index)}>
              <Text style={styles.taskDeleteText}>X</Text>
            </TouchableOpacity>
          </View>}
        keyExtractor={(item)=>item + Date.now()+Math.random()}
        />
    </SafeAreaView>
  )
}

export default App;



