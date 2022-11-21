import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import 'react-toastify/dist/ReactToastify.css';
  
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  CadastroPlanta
} from './src/screens'
import { ToastContainer } from 'react-toastify'
import HomeScreen from './src/screens/HomeScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <>
    <ToastContainer />
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="CadastroPlanta" component={CadastroPlanta} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <ToastContainer /> */}
    </Provider>
    </>
    
    
  )
}
