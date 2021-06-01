import React, { useState } from "react";
import { Image, ScrollView, Platform, StatusBar } from "react-native";
import {
  Container,
  Text,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
} from "native-base";
import { useDispatch, useSelector } from "react-redux";
import {
  login,
  SET_TOKEN_LOADING,
  fetchUser,
  SET_TOKEN_ERR,
  setToken,
} from "../store/action";

export default function Login({ navigation }) {
  const dispatch = useDispatch();
  const expoPushToken = useSelector((state) => state.expoPushToken);
  const [dataLogin, setDataLogin] = useState({
    email: "andi.utomo@hacktivmail.com",
    password: "password678",
    pushToken: expoPushToken,
  });

  function checkEmail(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!reg.test(email)) return false;
    return true;
  }

  function submitLogin() {
    const isEmail = checkEmail(dataLogin.email);
    if (isEmail) {
      dispatch(login(dataLogin))
        .then((res) => res.json())
        .then((res) => {
          dispatch(setToken(res.access_token));
          dispatch(fetchUser(res.userId, res.access_token));
          navigation.navigate("BottomTabHome");
        })
        .catch((err) => dispatch({ type: SET_TOKEN_ERR, payload: err }))
        .finally(() => {
          dispatch({ type: SET_TOKEN_LOADING, payload: false });
        });
    } else {
      console.log(isEmail, "dari else");
    }
  }

  return (
    <ScrollView
      style={{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : null,
      }}
    >
      <Container style={{ backgroundColor: "#f9f7f7" }}>
        <Content contentContainerStyle={{ justifyContent: "center", flex: 1 }}>
          <Image
            source={require("../assets/CIVIKA.png")}
            style={{
              height: 400,
              width: 400,
              alignSelf: "center",
              marginTop: -50,
            }}
          />
          <Form style={{ marginTop: -60 }}>
            <Item
              floatingLabel
              style={{ marginLeft: 60, marginRight: 60, alignItems: "center" }}
            >
              <Label style={{ alignSelf: "center", fontSize: 14 }}>Email</Label>
              <Input
                value={dataLogin.email}
                onChangeText={(inputEmail) =>
                  setDataLogin((state) => ({
                    ...state,
                    email: inputEmail,
                  }))
                }
                style={{ textAlign: "center" }}
              />
            </Item>
            <Item
              floatingLabel
              last
              style={{ marginLeft: 60, marginRight: 60 }}
            >
              <Label style={{ alignSelf: "center", fontSize: 14 }}>
                Kata sandi
              </Label>
              <Input
                value={dataLogin.password}
                onChangeText={(inputPassword) =>
                  setDataLogin((state) => ({
                    ...state,
                    password: inputPassword,
                  }))
                }
                secureTextEntry={true}
                style={{ textAlign: "center" }}
              />
            </Item>
            <Button
              rounded
              style={{
                alignSelf: "center",
                marginTop: 50,
                backgroundColor: "#112d4e",
              }}
              onPress={submitLogin}
            >
              <Text>Masuk</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    </ScrollView>
  );
}
