import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screen/Home";
import Class from "../screen/Class";
import StudentsClass from "../screen/StudentsClass";

const Stack = createStackNavigator();

export default function HomeTeacherStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        name="Kelas"
        component={Class}
      />
      <Stack.Screen
        name="Mahasiswa"
        component={StudentsClass}
      />
    </Stack.Navigator>
  );
}
