import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "native-base";
import { useSelector } from "react-redux";
import CardKRS from "../components/CardKRS";

export default function ScreenKRS() {
  const [inputKRS, setInputKRS] = useState([]);
  const allLecture = useSelector((state) => state.allLecture);
  function submitKRS() {
    console.log(inputKRS);
  }
  return (
    <View style={{ flex: 1, marginHorizontal: 9 }}>
      {allLecture.map((lecture) => (
        <CardKRS lecture={lecture} key={lecture.id} setInputKRS={setInputKRS} />
      ))}
      <Button
        primary
        style={{ alignSelf: "center", marginVertical: 13 }}
        onPress={submitKRS}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "200",
            color: "#dbe2ef",
            marginHorizontal: 10,
          }}
        >
          Ambil KRS
        </Text>
      </Button>
    </View>
  );
}
