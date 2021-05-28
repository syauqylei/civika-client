import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";

export default function StudentMenu({ navigation }) {
  function changeScreen(screen) {
    navigation.navigate(screen);
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={() => changeScreen("KRS")}
          style={{
            flex: 1,
            flexDirection: "row",
            height: 70,
            backgroundColor: "#dbe2ef",
            borderColor: "#005792",
            borderWidth: 2,
            alignItems: "center",
            justifyContent: "space-evenly",
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            marginHorizontal: 6,
            marginVertical: 6,
          }}
        >
          <Ionicon name="newspaper-outline" size={40} color="#005792" />
          <Text
            style={{
              flex: 0.78,
              color: "#005792",
              alignSelf: "center",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            Kartu Rencana Studi
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => changeScreen("UKT")}
          style={{
            flex: 1,
            flexDirection: "row",
            height: 40,
            backgroundColor: "#dbe2ef",
            borderColor: "#c70039",
            borderWidth: 2,
            alignItems: "center",
            justifyContent: "space-evenly",
            marginHorizontal: 6,
            marginVertical: 6,
          }}
        >
          <Ionicon name="ios-wallet-outline" size={40} color="#c70039" />
          <Text
            style={{
              flex: 0.78,
              color: "#c70039",
              flexWrap: "wrap",
              alignSelf: "center",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            Uang Kuliah Tunggal
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => changeScreen("SKS")}
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "#dbe2ef",
            borderColor: "#00818a",
            borderWidth: 2,
            alignItems: "center",
            justifyContent: "space-evenly",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            marginHorizontal: 6,
            marginVertical: 6,
          }}
        >
          <Ionicon name="ios-school-outline" size={40} color="#00818a" />
          <Text
            style={{
              flex: 0.78,
              color: "#00818a",
              flexWrap: "wrap",
              alignSelf: "center",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            Satuan Kredit Semester
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
