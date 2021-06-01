import React, { useState } from "react";
import { Body, Card, CardItem, CheckBox, Text } from "native-base";

export default function CardKRS({ lecture, setInputKRS }) {
  const [isChecked, setIsChecked] = useState(false);

  function addClass() {
    setIsChecked(!isChecked);
    if (!isChecked) {
      setInputKRS((krs) => krs.concat(lecture.id));
    }
    if (isChecked) {
      setInputKRS((allKRS) => allKRS.filter((krs) => krs.id !== lecture.id));
    }
  }

  return (
    <Card style={{ backgroundColor: "#3f72af", paddingHorizontal: 1 }}>
      <Card>
        <CardItem
          header
          bordered
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#112d4e" }}>
            {lecture.name}
          </Text>
          <CheckBox
            style={{ borderRadius: 50 }}
            checked={isChecked}
            onPress={addClass}
          />
        </CardItem>
        <CardItem bordered>
          <Body
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Text>SKS: {lecture.credits}</Text>
            <Text>Waktu: {lecture.schedule}</Text>
          </Body>
        </CardItem>
      </Card>
    </Card>
  );
}
