import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text,Button, View } from "react-native";
import React,{useState} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons"
import { createDrawerNavigator } from "@react-navigation/drawer";
import 'react-native-gesture-handler';

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
const ProfileStack=()=>{
  return( 
  <Stack.Navigator>
    <Stack.Screen name="Profile" component={Profile}/>
    <Stack.Screen name='SignIn' component= {SignIn} options={{title:"Sing In"}}/>
    <Stack.Screen name ='SignUp' component={SingUp} options={({route})=>({title:`Sign Up ${route.params.user}`})}/>
  </Stack.Navigator>
  )}

  const Home = ()=>{
    return <Text>Home</Text>
  }
const Tabs=createBottomTabNavigator();

const Main=()=>{
  return (    
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home} options={{tabBarIcon:(props) =><Ionicons name="ios-home" {...props}/>}} />
      <Tabs.Screen name="ProfileStack" component={ProfileStack} options={{title:"Profile", headerShown:false,tabBarIcon:(props) =><Ionicons name="ios-person" {...props}/>}} />  
    </Tabs.Navigator>
  )
}

const About=()=>{
  return <Text>About</Text>
}
const Drawer=createDrawerNavigator();

const App=() =>{
  return (
  <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Main" component={Main}/>
      <Drawer.Screen name="About" component={About}/> 
    </Drawer.Navigator>
  </NavigationContainer>);  
}
export default App;

