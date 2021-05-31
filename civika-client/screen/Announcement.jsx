import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Dimensions,
  Platform,
  StatusBar,
  Text,
} from "react-native";
import { Container, H1, Content, Button, Icon } from "native-base";
import AnnouncementList from "../components/AnnouncementList";
import { useDispatch, useSelector } from "react-redux";
import db from "../configdb/index.js";
import { fetchAnnouncement } from "../store/action";

const { width } = Dimensions.get("window");

export default function AnnouncementScreen({ navigation }) {
  const dispatch = useDispatch();
  // const [message, setMessage] = useState([]);
  const [update, setUpdate] = useState(0);
  const token = useSelector((state) => state.access_token);
  const dataUser = useSelector((state) => state.dataUser);
  const message = useSelector((state) => state.notification);
  

  useEffect(() => {
    if (update === 1) {
      console.log('efe')
      realtimeUpdate()
    } else {
      console.log('masuk else')
      dispatch(fetchAnnouncement(token))
      realtimeUpdate()
    }
  }, [update]);

  function realtimeUpdate() {
    db.collection("notification").onSnapshot((querySnapshot) => {
      setUpdate(querySnapshot.docChanges().length)
      querySnapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          console.log("added new data", change.doc.data());
          dispatch(fetchAnnouncement(token));
        }
        if (change.type === "modified") {
          console.log("Modified city: ", change.doc.data());
        }
        if (change.type === "removed") {
          console.log("Removed city: ", change.doc.data());
        }
      });
    });
  }
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
        {message.map((data, i) => {
          return <AnnouncementList key={i} message={data} />;
        })}
        {/* <AnnouncementList /> */}
      </Content>
      {dataUser.role === "teacher" ? (
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
