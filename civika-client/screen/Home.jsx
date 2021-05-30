import React from "react";
import { Container } from "native-base";
import { View } from "react-native";
import PersonalDataHome from "../components/PersonalDataHome";
import StudentMenu from "../components/StudentMenu";
import TeacherMenu from "../components/TeacherMenu";
import { useSelector } from "react-redux";
import BannerDeckSwiper from "../components/DeckSwiper";

export default function HomeScreen({ navigation }) {
  const todayClasses = useSelector((state) => state.todayClasses);
  const dataUser = useSelector((state) => state.dataUser);
  return (
    <Container style={{ backgroundColor: "#f9f7f7" }}>
      <PersonalDataHome data={todayClasses} />
      <View style={{ flex: 1 }}>
        {dataUser.role === "student" ? (
          <StudentMenu navigation={navigation} />
        ) : (
          <TeacherMenu navigation={navigation} />
        )}
        <BannerDeckSwiper />
      </View>
    </Container>
  );
}
