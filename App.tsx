import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {QueryClient, QueryClientProvider} from 'react-query'

import AboutArtScreen from './src/screens/aboutArt'
import HomeScreen from './src/screens/home'

const queryClient = new QueryClient()

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="About Art" component={AboutArtScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  )
}

export default App
