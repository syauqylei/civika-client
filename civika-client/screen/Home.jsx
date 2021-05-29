import React, {useState} from "react";
import { StyleSheet, Image, LogBox } from "react-native";
import { Container, Button, Icon, Text, Right, Left, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Body } from "native-base";
import PersonalDataHome from "../components/PersonalDataHome";
import Ionicon from "react-native-vector-icons/Ionicons";
import Carousel from 'react-native-snap-carousel';





export default function HomeScreen() {


  {/* New parts*/}

  const temporaryData = [
    
    {
      sks: 5,
      time: "10.00",
      role: "Mahasiswa",
      dosen: "Joko Winarno"
    },
    {
      sks: 5,
      time: "10.00",
      role: "Mahasiswa",
      dosen: "Joko Winarno"
    },
    {
       sks: 5,
      time: "10.00",
      role: "Mahasiswa",
      dosen: "Joko Winarno"
    },
    {
      sks: 5,
      time: "10.00",
      role: "Mahasiswa",
      dosen: "Joko Winarno"
    },
  ];
  {/* New parts*/}

    {/* New parts*/}

  const cards = [
    {
      text: 'Card One',
      name: 'One',
      image: require('../assets/banner-civika.png'),
    },
    {
      text: 'Card One',
      name: 'Two',
      image: require('../assets/banner-civika2.png'),
    },
    {
      text: 'Card One',
      name: 'Three',
      image: require('../assets/banner-civika3.png'),
    },
    {
      text: 'Card One',
      name: 'Four',
      image: require('../assets/banner-civika4.png'),
    }
    
  ];

  {/* New parts*/}

  return (
    <Container style={{ backgroundColor: "#f9f7f7" }}>
      <PersonalDataHome data={temporaryData} />
      <View style={{flex: 1}}>

      <View style={{ flex: 1, flexDirection: "row"}}>
           <View style={{ flex: 1}}>
          <Button large Icon style={{backgroundColor:"#112d4e", alignSelf: "center", marginVertical: 15, width: 60, justifyContent: "center"}} >
            <Ionicon name='card' size={30} color="#dbe2ef" />
          </Button>
            <Text style={{alignSelf:"center"}}>KRS</Text>
          </View>
      <View style={{ flex: 1}}>
          <Button large Icon style={{backgroundColor:"#112d4e", alignSelf: "center", marginVertical: 15, width: 60, justifyContent: "center"}} >
            <Ionicon name='wallet' size={30} color="#dbe2ef"/>
          </Button>
          <Text style={{alignSelf:"center"}}>UKT</Text>
      </View>
      <View style={{ flex: 1}}>
          <Button large Icon style={{backgroundColor:"#112d4e", alignSelf: "center", marginVertical: 15, width: 60, justifyContent: "center"}} >
            <Ionicon name='school' size={30} color="#dbe2ef"/>
          </Button>
          <Text style={{alignSelf:"center"}}>SKS</Text>
      </View> 
      </View>
      {/* New parts*/}

      <View style={{flex:1.5}}>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
                  <Image style={{ height: 185, width: 380, flex:1, alignSelf:"center"}} source={item.image} />
            }
          />
        </View>
              {/* New parts*/}

          
      </View>
    </Container>
  );
}
