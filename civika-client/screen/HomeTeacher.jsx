import React from "react";
import { View, Text } from "react-native";
import { Container, Header, Content, Button, Icon, Text } from 'native-base';

export default function HomeTeacherScreen() {
  return (
    // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    //   <Text>Halaman Home teacher</Text>
    // </View>

    <Container>

        <View style={{ flex: 1, backgroundColor: "red"}}></View>
        <View style={{ flex: 1, backgroundColor: "white"}}>
        <Button Icon danger>
            <Icon name='heart' />
            {/* <Text>Back</Text> */}
          </Button>
        </View>
        {/* <Header />
        <Content>
          <Button iconLeft light>
            <Icon name='arrow-back' />
            <Text>Back</Text>
          </Button>
          <Button iconRight light>
            <Text>Next</Text>
            <Icon name='arrow-forward' />
          </Button>
          <Button iconLeft>
            <Icon name='home' />
            <Text>Home</Text>
          </Button>
          <Button iconLeft transparent primary>
            <Icon name='beer' />
            <Text>Pub</Text>
          </Button>
          <Button iconLeft dark>
            <Icon name='cog' />
            <Text>Settings</Text>
          </Button>
        </Content> */}
      </Container>
  );
}
