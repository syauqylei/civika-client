import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoginStackNavigator from "./navigator/LoginStackNavigator";
import { Provider } from "react-redux";
import store from "./store";
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <LoginStackNavigator />
      </NavigationContainer>
    </Provider>
  );
}
