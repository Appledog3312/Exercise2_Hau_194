import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/HomeScreen';
import DetailsScreen from './src/DetailsScreen';
import CustomNavigationBar from './src/CustomNavigationBar';
import Exercise6 from './src/Exercise6';
import { Image } from 'react-native';

const Stack = createNativeStackNavigator();
const NewI=()=>{
  return(
    <Image
      source={require("./assets/br2.png")}
      style={{
        flex:1,
        width:400,
        height:200,
        justifyContent:"center",
        alignSelf:"center"
      }}
    />
  )
}
const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{
            header: (props) => <CustomNavigationBar {...props} />,
          }} >
            <Stack.Screen name="Home" component={HomeScreen}
            options={{
              headerTintColor:"blue",
              headerStyle:{backgroundColor:"aqua"},
              headerTitleStyle:{backgroundColor:"aqua"},
            }} />
            <Stack.Screen 
              name="Details" component={DetailsScreen}
              options={{
                title:"Detail Screen",
                headerTintColor:"red",
                headerStyle:{backgroundColor:"aqua"},
                headerBackground:()=><NewI/>
              }}
              />
            <Stack.Screen name="Example2" component={Exercise6}/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}

export default App