import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:16,
    }, 
    title: {
        fontSize:30,
    },
    subtitle:{
        fontSize:20,
        marginTop:4,
        color:"#666",
        marginStart:16,
    },
    input:{
        paddingVertical:12,
        paddingHorizontal:16,
        borderWidth:1,
        borderColor:'#ddd',
        borderRadius:6,
        fontSize:18,
    },
    buttonContainer:{
        backgroundColor:"lightgreen",
        paddingVertical:12,
        paddingHorizontal:16,
        borderRadius:6,
        alignItems:'center',
        marginTop:8,
        alignSelf:'flex-end'
    },
    buttonText:{
        fontSize:18,        
    },
    divider:{
        height:1,
        backgroundColor:"#ddd",
        marginVertical:32,
    },
    taskContainer:{
        flexDirection:"row",
        justifyContent:'space-between',
        borderColor:"#ddd",
        borderBottomWidth:1,
        paddingVertical:12,
    },
    taskDeleteText:{
        fontSize:18,
        color:"white",
        fontWeight:"bold",
    },
    taskDelete:{
        width:23,
        height:23,
        borderRadius:13,
        backgroundColor:"red",
        justifyContent:"center" ,
        alignItems:"center",
    },
    taskText:{
        fontSize:18,
    },

  })