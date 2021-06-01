import React from "react";
import { FlatList, Text } from "react-native";
import LectureCard from "./LectureCard";
export default function LectureListContainer({ data }) {
  return (
    <>{
      !data.length? 
      <Text 
        style={{ color: "white",
        alignSelf: "center",
        fontSize: 20,
        marginVertical: 100
      }}
      >Anda belum mengambil kelas</Text> :
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={data}
        keyExtractor={(data, i) => "key" + i}
        renderItem={({ item }) => {
          return <LectureCard item={item} />;
        }}
      />
    }
    </>
  );
}
