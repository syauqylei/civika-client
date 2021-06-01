import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screen/Login";
import BottomTabNavigator from "./BottomTabNavigator";
import { useDispatch } from "react-redux";
import { SET_EXPO_PUSH_TOKEN } from "../store/action";

const Stack = createStackNavigator();

export default function LoginStackNavigator(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: SET_EXPO_PUSH_TOKEN, payload: props.expoPushToken });
  });
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="BottomTabHome"
        component={BottomTabNavigator}
      />
    </Stack.Navigator>
  );
}
