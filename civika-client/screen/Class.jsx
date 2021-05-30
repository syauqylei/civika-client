import React from "react";
import { StyleSheet, Platform, StatusBar } from "react-native";
import { Container, H1, Content } from "native-base";
import ClassList from "../components/ClassList";

export default function ClassScreen({ navigation }) {
  return (
    <Container
      style={{
        alignItems: "center",
        justifyContent: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : null,
      }}
    >
      <H1 style={{ margin: 5 }}> Kelas </H1>
      <Content style={{ margin: 10 }}>
        <ClassList {...{ navigation }} />
        <ClassList {...{ navigation }} />
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    width: 300,
  },
});
