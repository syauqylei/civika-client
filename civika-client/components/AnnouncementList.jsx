import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Card, CardItem, Body, Icon, Button } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { deleteAnnouncementById } from "../store/action";

export default function AnnouncementList(props) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.access_token);
  return (
    <Card style={styles.card}>
      <CardItem
        header
        style={{
          borderTopEndRadius: 10,
          borderTopStartRadius: 10,
          backgroundColor: "#dbe2ef",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontWeight: "bold" }}>{props.announcement.title}</Text>
          <Text>{props.announcement.teacher}</Text>
        </View>
        {props.dataUser.role === "teacher" ? (
          <Button
            transparent={true}
            onPress={() => {
              dispatch(deleteAnnouncementById(props.announcement.id, token));
            }}
          >
            <Icon name="close" type="AntDesign" style={{ color: "black" }} />
          </Button>
        ) : null}
      </CardItem>
      <CardItem
        style={{
          borderBottomEndRadius: 10,
          borderBottomStartRadius: 10,
          backgroundColor: "#3f72af",
        }}
      >
        <Body>
          <Text style={{ color: "white" }}>{props.announcement.message}</Text>
        </Body>
      </CardItem>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    width: 300,
  },
});
