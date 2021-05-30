import React from "react";
import { StyleSheet, Platform, StatusBar } from "react-native";
import { Container, H1, Content } from "native-base";
import { useSelector } from "react-redux";
import ClassList from "../components/ClassList";

export default function ClassScreen({ navigation }) {
  const lectures = useSelector((state) => state.allLecture);
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
        {lectures.map((lecture) => {
          return <ClassList {...{ navigation, lecture }} key={lecture.id} />;
        })}
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
