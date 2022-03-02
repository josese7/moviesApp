import React from 'react'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { Movie } from '../interfaces/movieInterface';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: Movie;
  
}
const Stack = createStackNavigator<RootStackParams>();

export const Navigation = ()=> {
  return (
    <Stack.Navigator
    /*  initialRouteName="Pagina3Screen" */
    screenOptions={{
      /* headerStyle:{
          elevation:0,
          shadowColor: 'transparent'
      }, */
      headerShown:false, 
      cardStyle:{
        
      }
  }}

    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
}