import React from "react";
import { FlatList } from "react-native";
import LectureCard from "./LectureCard";
export default function LectureListContainer({ data }) {
  return (
    <>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={data}
        keyExtractor={(data, i) => "key" + i}
        renderItem={({ item }) => {
          return <LectureCard item={item} />;
        }}
      />
    </>
  );
}
