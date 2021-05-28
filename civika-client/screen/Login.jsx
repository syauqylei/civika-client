import React from "react";
import { View, Text, Button } from "react-native";

export default function Login({ navigation }) {
  function submitLogin() {
    navigation.navigate("BottomTabHome");
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Halaman login</Text>
      <Button title="Login dulu yak" onPress={submitLogin} />
    </View>
  );
}
