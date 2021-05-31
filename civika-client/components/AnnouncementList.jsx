import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Card, CardItem, Body, Icon } from "native-base";

export default function AnnouncementList(message) {
  return (
    <Card style={styles.card}>
      <CardItem header style={{ borderTopEndRadius: 10, borderTopStartRadius: 10, backgroundColor: "#dbe2ef", flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Text style={{ fontWeight: "bold" }}>{message.message.title}</Text>
          <Text>{message.message.teacher}</Text>
        </View>
        <Icon name="close" type="AntDesign"/>
      </CardItem>
      <CardItem style={{ borderBottomEndRadius: 10, borderBottomStartRadius: 10, backgroundColor: "#3f72af" }}>
        <Body>
          <Text style={{ color: 'white' }}>{message.message.message}</Text>
        </Body>
      </CardItem>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    width: 300
  },
});