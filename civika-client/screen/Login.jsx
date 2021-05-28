import React from "react";
import { View, Image, Dimensions } from "react-native";
import { Container, Card, CardItem, Body, Text, Header, Content, Form, Item, Input, Label, Button } from "native-base";

const width = Dimensions.get("window").width-5
export default function Login({ navigation }) {
  function submitLogin() {
    navigation.navigate("BottomTabHome");
  }
  return (
    // <View>
    <Container style={{backgroundColor: "#f9f7f7",}}>
        <Content contentContainerStyle={{justifyContent: "center", flex: 1}}>
        <Image source= {require('../assets/CIVIKA.png')} style={{ height: 400, width: 400, alignSelf: "center", marginTop: -50}}/>
          <Form style={{marginTop: -60}}>
            <Item floatingLabel style={{marginLeft: 60, marginRight:60, alignItems: "center"}} >
              <Label style={{alignSelf: "center", fontSize: 14}}>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel last style={{marginLeft: 60, marginRight:60}}>
              <Label style={{alignSelf: "center", fontSize: 14}}>Kata sandi</Label>
              <Input />
            </Item>
            <Button rounded style={{alignSelf: "center", marginTop: 50, backgroundColor: "#112d4e"}}
            onPress={submitLogin}
            >
            <Text>Masuk</Text>
          </Button>
          </Form>
        </Content>

    </Container>
  );
}
