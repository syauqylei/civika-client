import React, { useState } from "react";
import { FlatList, Text } from "react-native";
import LectureCard from "./LectureCard";
export default function LectureListContainer({ data, user }) {
  // const [dataLecture, setDataLecture] = useState([]);
  let dataLecture = [];
  if (user.role === "student") {
    data.forEach((lecture) => dataLecture.push(lecture.Lecture));
  } else {
    data.forEach((lecture) => dataLecture.push(lecture));
  }
  return (
    <>
      {!data.length ? (
        <Text
          style={{
            color: "white",
            alignSelf: "center",
            fontSize: 20,
            marginVertical: 100,
          }}
        >
          Anda belum mengambil kelas
        </Text>
      ) : (
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={dataLecture || data}
          keyExtractor={(data, i) => "key" + i}
          renderItem={({ item }) => {
            return <LectureCard item={item} />;
          }}
        />
      )}
    </>
  );
}
