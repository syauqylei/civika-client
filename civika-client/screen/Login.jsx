import React from "react";
import { View, Button } from "react-native";
import { Container, Card, CardItem, Body, Text } from "native-base";
export default function Login({ navigation }) {
  function submitLogin() {
    navigation.navigate("BottomTabHome");
  }
  return (
    <Container>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Card>
          <CardItem>
            <Text>Halaman login</Text>
            <Button title="Login dulu yak" onPress={submitLogin} />
          </CardItem>
        </Card>
      </View>
    </Container>
  );
}
