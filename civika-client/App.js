import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoginStackNavigator from "./navigator/LoginStackNavigator";
export default function App() {
  return (
    <NavigationContainer>
      <LoginStackNavigator />
    </NavigationContainer>
  );
}
