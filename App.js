import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text,Button, View } from "react-native";
import React,{useState} from "react";

const Profile=({navigation})=>{
  const [user,setUser]=useState("Süleyman");
  return (
  <View> 
    <Text>You Have to Sing In</Text>
    <Button title="SignIn" onPress={()=>{navigation.navigate("SignIn",{user})}}/>
    <Button title="SingUp" onPress={()=>{navigation.navigate("SignUp",{user})}}/>

  </View>
  )
}
const SignIn=({navigation,route})=>{
  return <Text>SignIn {route.params.user}</Text>
}
const SingUp=({navigation,route})=>{
  return <Text>SingUp</Text>
}

const Stack = createNativeStackNavigator();

const App=() =>{
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile}/>
      <Stack.Screen name='SignIn' component= {SignIn} options={{title:"Sing In"}}/>
      <Stack.Screen name ='SignUp' component={SingUp} options={({route})=>({title:`Sign Up ${route.params.user}`})}/>
    </Stack.Navigator>
  </NavigationContainer>);  
}
export default App;

