import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Platform, StatusBar } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import LectureListContainer from "./LectureListContainer";
export default function PersonalDataHome({ data }) {
  const [time, setTime] = useState("");
  useEffect(() => {
    let hours = new Date().getHours();
    hours > 6 && hours <= 11
      ? setTime("Pagi")
      : hours > 11 && hours <= 15
      ? setTime("Siang")
      : hours > 15 && hours <= 18
      ? setTime("Sore")
      : hours > 18 || hours <= 6
      ? setTime("Malam")
      : "";
  }, []);
  return (
    <View style={styles.cardContainer}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Text style={styles.text}>Selamat {time}</Text>
          <Text style={{ ...styles.text, fontWeight: "bold", fontSize: 17 }}>
            Nama siswa
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              borderRadius: 15,
              backgroundColor: "#f9f7f7",
              paddingHorizontal: 5,
            }}
          >
            <Text
              style={{
                marginHorizontal: 5,
                paddingTop: 4,
                fontWeight: "bold",
              }}
            >
              Mahasiswa
            </Text>
            <View
              style={{
                backgroundColor: "#f9f7f7",
                borderRadius: 50,
              }}
            >
              <Ionicon name="person" size={25} color="#3f72af" />
            </View>
          </View>
        </View>
      </View>
      <Text style={{ ...styles.text, marginTop: 20 }}>
        Jadwal kuliah hari ini
      </Text>
      {/* Flat list untuk jadwal kuliah */}
      <LectureListContainer data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: "#112d4e",
    paddingHorizontal: 20,
    paddingTop: 10,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  text: {
    color: "#f9f7f7",
    fontSize: 15,
  },
});
