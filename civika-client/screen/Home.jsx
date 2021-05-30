import React, { useEffect } from "react";
import { Container } from "native-base";
import { View } from "react-native";
import PersonalDataHome from "../components/PersonalDataHome";
import StudentMenu from "../components/StudentMenu";
import TeacherMenu from "../components/TeacherMenu";
import { useSelector, useDispatch } from "react-redux";
import BannerDeckSwiper from "../components/DeckSwiper";
import { fetchLecture, fetchUser } from "../store/action"

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch()
  const allLecture = useSelector((state) => state.allLecture);
  const dataUser = useSelector((state) => state.dataUser);
  const token = useSelector((state) => state.access_token);

  useEffect(() => {
    dispatch(fetchLecture(token))
  }, [])

  return (
    <Container style={{ backgroundColor: "#f9f7f7" }}>
      <PersonalDataHome data={allLecture} />
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
