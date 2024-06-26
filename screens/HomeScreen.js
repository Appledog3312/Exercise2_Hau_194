import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'


const HomeScreen = ( {navigation}) => {
  return (
    <View style={styles.container}>
      <Button style={styles.buttons} mode="contained-tonal" onPress={()=> navigation.navigate("DetailScreen")}>
        Go to detail 
      </Button>
      <Button style={styles.buttons} mode="contained-tonal" onPress={()=> navigation.navigate("Example2")}>
        Go to Exemple 2 
      </Button>
    </View>
  )
}

export default HomeScreen
const DetailScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>DetailScreen</Text>
    </View>
  )
}
const Example2 = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Example2</Text>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
        justifyContent:"center"
    },
    buttons:{
      width:200,
      height:50,
      alignItems:"center",
      justifyContent:'center',
      backgroundColor:"aqua",
      marginBottom: 20
    }
})