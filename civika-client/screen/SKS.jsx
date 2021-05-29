import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { Card, CardItem } from "native-base";
import { useSelector } from "react-redux";

const { width } = Dimensions.get("window");

export default function ScreenSKS() {
  const todayClasses = useSelector((state) => state.todayClasses);
  const studentData = useSelector((state) => state.dataUser);
  let totalSKS = 0;
  todayClasses.forEach((lecture) => (totalSKS += +lecture.sks));

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#f9f7f7",
      }}
    >
      <Card
        style={{
          backgroundColor: "#112d4e",
          borderRadius: 15,
        }}
      >
        <Card style={styles.cardInside}>
          <CardItem header style={styles.cardItem}>
            <Text style={styles.textTitle}>Nama</Text>
          </CardItem>
          <CardItem style={styles.cardItem}>
            <Text style={{ fontSize: 30, textAlign: "center" }}>
              {studentData.name}
            </Text>
          </CardItem>
          <View style={styles.border} />
          <CardItem
            header
            style={{
              justifyContent: "space-around",
              backgroundColor: "#dbe2ef",
            }}
          >
            <Text
              style={{
                flex: 1,
                ...styles.textTitle,
                textAlign: "center",
              }}
            >
              Total SKS
            </Text>
            <Text
              style={{
                flex: 1,
                ...styles.textTitle,
                textAlign: "center",
              }}
            >
              SKS Kelulusan
            </Text>
          </CardItem>
          <CardItem
            style={{
              justifyContent: "space-around",
              backgroundColor: "#dbe2ef",
            }}
          >
            <Text style={{ fontSize: 30, textAlign: "center" }}>
              {totalSKS}
            </Text>
            <Text style={{ fontSize: 30, textAlign: "center" }}>144</Text>
          </CardItem>
          <View style={styles.border} />
          <CardItem header style={styles.cardItem}>
            <Text style={styles.textTitle}>Index Prestasi Kumulatif</Text>
          </CardItem>
          <CardItem style={styles.cardItem}>
            <Text style={{ fontSize: 50, textAlign: "center" }}>
              {studentData.ipk}
            </Text>
          </CardItem>
        </Card>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  cardItem: {
    justifyContent: "center",
    backgroundColor: "#dbe2ef",
  },
  border: {
    borderBottomColor: "#3f72af",
    borderWidth: 1,
    marginHorizontal: 15,
  },
  textTitle: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 24,
    color: "#3f72af",
  },
  cardInside: {
    flex: 1,
    width: width - 17,
    backgroundColor: "#dbe2ef",
    paddingVertical: 15,
    borderRadius: 15,
  },
});
