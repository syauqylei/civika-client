import React, { useEffect } from "react";
import {
  StyleSheet,
  Dimensions,
  Platform,
  StatusBar,
  View,
  Text,
  ActivityIndicator,
} from "react-native";
import { Container, H1, Content, Button, Icon } from "native-base";
import AnnouncementList from "../components/AnnouncementList";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAnnouncement,
  SET_ANNOUNCEMENT,
  SET_ANNOUNCEMENT_LOADING,
} from "../store/action.js";
import FAB from "react-native-fab";

const { width } = Dimensions.get("window");

export default function AnnouncementScreen({ navigation }) {
  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state.dataUser);
  const token = useSelector((state) => state.access_token);
  const announcements = useSelector((state) => state.announcements);
  const announcementsLoading = useSelector(
    (state) => state.announcementsLoading
  );
  useEffect(() => {
    dispatch(fetchAnnouncement(token))
      .then((r) => r.json())
      .then((r) => {
        dispatch({ type: SET_ANNOUNCEMENT, payload: r });
      })
      .catch((err) => console.log(err))
      .finally(() =>
        dispatch({ type: SET_ANNOUNCEMENT_LOADING, payload: true })
      );
  }, []);
  if (!announcementsLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  } else {
    return (
      <Container
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingTop:
            Platform.OS === "android" ? StatusBar.currentHeight : null,
        }}
      >
        <H1 style={{ margin: 5 }}> Pengumuman </H1>
        <Content style={{ margin: 10 }}>
          {announcements.map((el, id) => {
            return <AnnouncementList announcement={el} key={id} />;
          })}
        </Content>
        {dataUser.role === "teacher" ? (
          <FAB
            buttonColor="#112d4e"
            iconTextColor="#FFFFFF"
            onClickAction={() => {
              navigation.navigate("Pengumuman");
            }}
            visible={true}
            iconTextComponent={<Icon type="Entypo" name="plus" />}
          />
        ) : null}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    width: 300,
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
