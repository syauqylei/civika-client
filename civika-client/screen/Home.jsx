import React from "react";
import { Image } from "react-native";
import {
  Container,
  Button,
  Text,
  View,
  DeckSwiper
} from "native-base";
import PersonalDataHome from "../components/PersonalDataHome";
import Ionicon from "react-native-vector-icons/Ionicons";

export default function HomeScreen({ navigation }) {
  const temporaryData = [
    {
      sks: 5,
      time: "10.00",
      role: "Mahasiswa",
      dosen: "Joko Winarno",
    },
    {
      sks: 5,
      time: "10.00",
      role: "Mahasiswa",
      dosen: "Joko Winarno",
    },
    {
      sks: 5,
      time: "10.00",
      role: "Mahasiswa",
      dosen: "Joko Winarno",
    },
    {
      sks: 5,
      time: "10.00",
      role: "Mahasiswa",
      dosen: "Joko Winarno",
    },
  ];

  const cards = [
    {
      text: "Card One",
      name: "One",
      image: require("../assets/banner-civika.png"),
    },
    {
      text: "Card One",
      name: "Two",
      image: require("../assets/banner-civika2.png"),
    },
    {
      text: "Card One",
      name: "Three",
      image: require("../assets/banner-civika3.png"),
    },
    {
      text: "Card One",
      name: "Four",
      image: require("../assets/banner-civika4-min.png"),
    },
  ];

  return (
    <Container style={{ backgroundColor: "#f9f7f7" }}>
      <PersonalDataHome data={temporaryData} />
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Button
              large
              Icon
              style={{
                backgroundColor: "#112d4e",
                alignSelf: "center",
                marginTop: 50,
                width: 250,
                justifyContent: "center",
              }}
              onPress={() => navigation.navigate("Kelas")}
            >
              <Ionicon name="list" size={30} color="#dbe2ef" />
              <Text style={{ alignSelf: "center" }}>Kelas</Text>
            </Button>
          </View>
        </View>

        <View style={{ flex: 1.5 }}>
          <DeckSwiper
            dataSource={cards}
            renderItem={(item) => (
              <Image
                style={{
                  height: 185,
                  width: 380,
                  flex: 1,
                  alignSelf: "center",
                }}
                source={item.image}
              />
            )}
          />
        </View>
      </View>
    </Container>
  );
}
