import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Container } from "native-base";
import PersonalDataHome from "../components/PersonalDataHome";
export default function HomeScreen() {
  const temporaryData = [
    {
      lecture: "Filsafat",
      sks: 5,
      time: "10.00",
      dosen: "Jokowi Dowo",
    },
    {
      lecture: "Ngoding",
      sks: 5,
      time: "10.00",
      dosen: "Jokowi Dowo",
    },
    {
      lecture: "Perkembangan dan Pendidikan Anak",
      sks: 5,
      time: "10.00",
      dosen: "Jokowi Dowo",
    },
    {
      lecture: "Filsafat",
      sks: 5,
      time: "10.00",
      dosen: "Jokowi Dowo",
    },
  ];
  return (
    <Container style={{ backgroundColor: "#f9f7f7" }}>
      <PersonalDataHome data={temporaryData} />
      <View style={{ flex: 1 }}></View>
    </Container>
  );
}
