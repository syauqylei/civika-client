import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Card, CardItem, Body, } from "native-base";

export default function ClassList({ navigation }) {
  const listStudents = ["Muhammad Riski Putra Awali", "Fauzan Hilmy", "Mulki Marwan Adam", "Syauqi Lenterano EL Ilhami", "Andi Javier Lafiedrido"]
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Mahasiswa", { students: listStudents })}>
      <Card style={styles.card}>
        <CardItem header style={{ borderTopEndRadius: 10, borderTopStartRadius: 10, backgroundColor: "#dbe2ef" }}>
          <Text>Nama Kelas</Text>
        </CardItem>
        <CardItem style={{ borderBottomEndRadius: 10, borderBottomStartRadius: 10, backgroundColor: "#3f72af" }}>
          <Body>
            <Text style={{ color: 'white' }}>Jam Kelas</Text>
          </Body>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    width: 300
  },
});