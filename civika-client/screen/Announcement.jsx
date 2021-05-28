import React from "react";
import { Text, StyleSheet, Platform, StatusBar } from "react-native";
import { Container, Card, CardItem, Body, H1, Content } from "native-base";

export default function AnnouncementScreen() {
  return (
    <Container style={{ flex: 1, alignItems: "center", justifyContent: "center", paddingTop: Platform.OS === "android"? StatusBar.currentHeight : null }}>
      <H1 style={{ margin: 5 }}> Pengumuman </H1>
      <Content style={{ margin: 10 }}>
        <Card style={styles.card}>
          <CardItem header style={{ borderTopEndRadius: 10, borderTopStartRadius: 10, backgroundColor: "#dbe2ef" }}>
            <Text>Judul Pengumuman</Text>
          </CardItem>
          <CardItem style={{ borderBottomEndRadius: 10, borderBottomStartRadius: 10, backgroundColor: "#3f72af" }}>
            <Body>
              <Text style={{ color: 'white' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium maiores eius laudantium porro obcaecati consectetur libero error nulla eos amet pariatur placeat veniam corrupti ut quia, ullam et sint! Maiores.</Text>
            </Body>
          </CardItem>
        </Card>
        <Card style={styles.card}>
          <CardItem header style={{ borderTopEndRadius: 10, borderTopStartRadius: 10, backgroundColor: "#dbe2ef" }}>
            <Text>Judul Pengumuman</Text>
          </CardItem>
          <CardItem style={{ borderBottomEndRadius: 10, borderBottomStartRadius: 10, backgroundColor: "#3f72af" }}>
            <Body>
              <Text style={{ color: 'white' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium maiores eius laudantium porro obcaecati consectetur libero error nulla eos amet pariatur placeat veniam corrupti ut quia, ullam et sint! Maiores.</Text>
            </Body>
          </CardItem>
        </Card>
        <Card style={styles.card}>
          <CardItem header style={{ borderTopEndRadius: 10, borderTopStartRadius: 10, backgroundColor: "#dbe2ef" }}>
            <Text>Judul Pengumuman</Text>
          </CardItem>
          <CardItem style={{ borderBottomEndRadius: 10, borderBottomStartRadius: 10, backgroundColor: "#3f72af" }}>
            <Body>
              <Text style={{ color: 'white' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium maiores eius laudantium porro obcaecati consectetur libero error nulla eos amet pariatur placeat veniam corrupti ut quia, ullam et sint! Maiores.</Text>
            </Body>
          </CardItem>
        </Card>
        <Card style={styles.card}>
          <CardItem header style={{ borderTopEndRadius: 10, borderTopStartRadius: 10, backgroundColor: "#dbe2ef" }}>
            <Text>Judul Pengumuman</Text>
          </CardItem>
          <CardItem style={{ borderBottomEndRadius: 10, borderBottomStartRadius: 10, backgroundColor: "#3f72af" }}>
            <Body>
              <Text style={{ color: 'white' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium maiores eius laudantium porro obcaecati consectetur libero error nulla eos amet pariatur placeat veniam corrupti ut quia, ullam et sint! Maiores.</Text>
            </Body>
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
});