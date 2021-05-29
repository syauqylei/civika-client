import React, { useState } from "react";
import { Text, StyleSheet, Platform, StatusBar, TextInput } from "react-native";
import {
  Container,
  Card,
  CardItem,
  Body,
  H1,
  Content,
  Button,
} from "native-base";

export default function AddAnnouncement() {
  const [input, setInput] = useState({
    title: "",
    contentNews: "",
  });

  return (
    <Container
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : null,
      }}
    >
      <H1 style={{ margin: 5, textAlign: "center" }}>Kirim Pengumuman</H1>
      <Content style={{ margin: 10 }}>
        <Card style={styles.card}>
          <CardItem
            style={{
              backgroundColor: "#dbe2ef",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Body style={{ marginVertical: 5, marginHorizontal: 15 }}>
              <Text style={styles.title}>Judul: </Text>
              <TextInput
                placeholder="Judul pengumuman"
                keyboardType="default"
                onChangeText={(newItem) =>
                  setInput({ ...input, title: newItem })
                }
                style={styles.input}
                value={input.title}
              />
            </Body>
            <Body style={{ marginVertical: 5, marginHorizontal: 15 }}>
              <Text style={styles.title}>Isi Pengumuman:</Text>
              <TextInput
                placeholder="Konten pengumuman"
                multiline={true}
                numberOfLines={5}
                onChangeText={(newItem) =>
                  setInput({ ...input, contentNews: newItem })
                }
                style={styles.input}
                value={input.contentNews}
              />
            </Body>
          </CardItem>
          <CardItem
            style={{
              borderBottomEndRadius: 10,
              borderBottomStartRadius: 10,
              backgroundColor: "#dbe2ef",
              justifyContent: "center",
            }}
          >
            <Button
              style={{
                backgroundColor: "#3f72af",
                width: 100,
                justifyContent: "center",
                borderRadius: 10,
              }}
            >
              <Text style={{ color: "white" }}>Tambahkan</Text>
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
    width: 300,
  },
  input: {
    fontSize: 15,
    borderBottomWidth: 1,
    padding: 5,
    minHeight: 40,
    width: "100%",
    borderColor: "#3f72af",
    backgroundColor: "white",
    borderRadius: 10,
  },
  title: { fontSize: 15, marginBottom: 8 },
});
