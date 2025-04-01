import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import DurationExercise from "./screens/DurationExercise";
import RepetitionExercise from "./screens/RepetitionExercise";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DurationExercise" component={DurationExercise} />
        <Stack.Screen
          name="RepetitionExercise"
          component={RepetitionExercise}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
