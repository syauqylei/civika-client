import React, { useState, useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import LoginStackNavigator from "./navigator/LoginStackNavigator";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import { Provider } from "react-redux";
import store from "./store";
export default function App() {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    }).then((_) => {
      setIsReady(true);
    });
  }, []);

  if (!isReady) {
    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator color="black" size="large" />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <LoginStackNavigator />
      </NavigationContainer>
    </Provider>
  );
}
