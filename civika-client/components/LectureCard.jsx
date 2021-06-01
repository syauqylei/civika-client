import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const { width } = Dimensions.get("screen");
export default function LectureCard({ item }) {
  const dataUser = useSelector((state) => state.dataUser);

  return (
    <View
      style={{
        borderRadius: 15,
        backgroundColor: "#dbe2ef",
        height: 200,
        width: width - 55,
        marginVertical: 10,
        marginHorizontal: 10,
        justifyContent: "space-between",
      }}
    >
      <View>
        <Text
          style={{
            color: "#3f72af",
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 15,
            marginTop: 12,
          }}
        >
          {item.name}
        </Text>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 13,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={styles.info}>SKS</Text>
            <Text
              style={{
                alignSelf: "center",
                marginTop: 8,
              }}
            >
              {item.credits}
              {/* Data SKS */}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.info}>Waktu</Text>
            <Text
              style={{
                alignSelf: "center",
                marginTop: 8,
              }}
            >
              {item.schedule}
              {/* Data jam kuliah */}
            </Text>
          </View>
          {dataUser.role === "student" ? (
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  alignSelf: "center",
                  color: "#3f72af",
                }}
              >
                Dosen
              </Text>
              <Text
                style={{
                  alignSelf: "center",
                  marginTop: 8,
                  textAlign: "center",
                }}
              >
                Andi Javier
              </Text>
            </View>
          ) : null}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  info: {
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
    color: "#3f72af",
  },
});
