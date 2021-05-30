import React from "react";
import { Container } from "native-base";
import PersonalDataHome from "../components/PersonalDataHome";
import StudentMenu from "../components/StudentMenu";
import { useSelector } from "react-redux";
import BannerDeckSwiper from "../components/DeckSwiper";
import { Container, View } from "native-base";

export default function HomeScreen({ navigation }) {
  const todayClasses = useSelector((state) => state.todayClasses);
  return (
    <Container style={{ backgroundColor: "#f9f7f7" }}>
      <PersonalDataHome data={todayClasses} />
      <View style={{ flex: 1 }}>
        <StudentMenu navigation={navigation} />
        <TeacherMenu navigation={navigation} />
        <BannerDeckSwiper />
      </View>
    </Container>
  );
}
