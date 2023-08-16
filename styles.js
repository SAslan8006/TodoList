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
        
    }
  })