import React, { useEffect, useState } from "react";
import { View, Text, Dimensions } from "react-native";

const { width } = Dimensions.get("screen");
export default function LectureCard({ item, user }) {
  const [card, setCard] = useState("Dosen");
  const [name, setName] = useState("");
  useEffect(() => {
    if (item.role === "Dosen") {
      setCard("");
      setName("");
    } else {
      setCard("Dosen");
      setName(item.dosen);
    }
  }, []);

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
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                alignSelf: "center",
                color: "#3f72af",
              }}
            >
              SKS
            </Text>
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
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                alignSelf: "center",
                color: "#3f72af",
              }}
            >
              Waktu
            </Text>
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
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                alignSelf: "center",
                color: "#3f72af",
              }}
            >
              {/* New parts*/}
              {card}
              {/* New parts*/}
            </Text>
            <Text
              style={{
                alignSelf: "center",
                marginTop: 8,
                textAlign: "center",
              }}
            >
              {item.dosen}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
