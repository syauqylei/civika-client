import React, { useState } from "react";
import { Text, StyleSheet, Platform, StatusBar, TextInput } from "react-native";
import { Container, Card, CardItem, Body, H1, Content, Thumbnail, Button, Input, Form } from "native-base";

export default function ProfileScreen() {
  const [input, setInput] = useState({
    name: "Civitas Enjoy Aman",
    email: "civitas@gmail.com",
    role: "Mahasiswa",
    phoneNumber: "088888888",
    address: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium maiores eius laudantium porro obcaecati consectetur libero error, ullam et sint! Maiores."
  })

  return (
    <Container style={{ flex: 1, alignItems: "center", justifyContent: "center", paddingTop: Platform.OS === "android"? StatusBar.currentHeight : null }}>
      <H1 style={{ margin: 5 }}> Profil </H1>
      <Content style={{ margin: 10 }}>
        <Card style={styles.card}>
          <CardItem header style={{ borderTopEndRadius: 10, borderTopStartRadius: 10, backgroundColor: "#dbe2ef", justifyContent: 'center' }}>
            <Thumbnail style={{ height: 100, width: 100 }} source={{ uri: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1789&q=80"}}/>
          </CardItem>
          <CardItem style={{ backgroundColor: "#dbe2ef", alignItems: 'center', flexDirection: "column" }}>
            <Body style={{ marginVertical: 5, marginHorizontal: 15 }}>
              <Text style={{ fontSize: 15 }}>Nama:</Text>
              <Text style={{ fontSize: 15 }}>{input.name}</Text>
            </Body>
            <Body style={{ marginVertical: 5, marginHorizontal: 15 }}>
              <Text style={{ fontSize: 15 }}>Email:</Text>
              <Text style={{ fontSize: 15 }}>{input.email}</Text>
            </Body>
            <Body style={{ marginVertical: 5, marginHorizontal: 15 }}>
              <Text style={{ fontSize: 15 }}>Role:</Text>
              <Text style={{ fontSize: 15 }}>{input.role}</Text>
            </Body>
            <Body style={{ marginVertical: 5, marginHorizontal: 15 }}>
              <Text style={{ fontSize: 15 }}>Alamat:</Text>
              <TextInput multiline={true} onChangeText={newItem => setInput({ ...input, address: newItem })} style={ styles.input } value={input.address}/>
            </Body>
            <Body style={{ marginVertical: 5, marginHorizontal: 15 }}>
              <Text style={{ fontSize: 15 }}>Nomor Telfon: </Text>
              <TextInput as="textarea" keyboardType="numeric" onChangeText={newItem => setInput({ ...input, phoneNumber: newItem })} style={ styles.input } value={input.phoneNumber}/>
            </Body>
          </CardItem>
          <CardItem style={{ borderBottomEndRadius: 10, borderBottomStartRadius: 10, backgroundColor: "#dbe2ef", justifyContent: "center" }}>
            <Button style={{ backgroundColor: "#3f72af", width: 100, justifyContent: "center", borderRadius: 10 }}>
              <Text style={{ color: 'white' }}>Edit</Text>
            </Button>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    width: 300
  },
  input: {
    fontSize: 15,
    borderBottomWidth: 1,
    padding: 5,
    minHeight: 40,
    width: "100%",
    borderColor: "#3f72af",
    backgroundColor: "white",
    borderRadius: 10
  }
});