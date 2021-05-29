import React from "react";
import { Container } from "native-base";
import PersonalDataHome from "../components/PersonalDataHome";
import StudentMenu from "../components/StudentMenu";
import { useSelector } from "react-redux";

export default function HomeScreen({ navigation }) {
  const todayClasses = useSelector((state) => state.todayClasses);
  return (
    <Container style={{ backgroundColor: "#f9f7f7" }}>
      <PersonalDataHome data={todayClasses} />
      <StudentMenu navigation={navigation} />
    </Container>
  );
}
