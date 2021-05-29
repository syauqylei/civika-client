import React from "react";
import {
  StyleSheet,
  Dimensions,
  Platform,
  StatusBar,
  Text,
} from "react-native";
import { Container, H1, Content, Button, Icon } from "native-base";
import AnnouncementList from "../components/AnnouncementList";

const { width } = Dimensions.get("window");

export default function AnnouncementScreen({ navigation }) {
  const role = "Dosen";

  return (
    <Container
      style={{
        alignItems: "center",
        justifyContent: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : null,
      }}
    >
      <H1 style={{ margin: 5 }}> Pengumuman </H1>
      <Content style={{ margin: 10 }}>
        <AnnouncementList />
        <AnnouncementList />
      </Content>
      {role === "Dosen" ? (
        <Button
          onPress={() => navigation.navigate("Pengumuman")}
          rounded
          style={{ marginLeft: width - 250, marginBottom: 10, width: 240 }}
        >
          <Icon type="Entypo" name="plus" />
          <Text style={{ color: "#dbe2ef" }}>Tambahkan Pengumuman</Text>
        </Button>
      ) : null}
    </Container>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    width: 300,
  },
});
