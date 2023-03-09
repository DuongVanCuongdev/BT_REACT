import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { io } from "socket.io-client";
export default function Chat({ navigation, route }) {
  const info = route.params;

  const [heightC, setHeightC] = useState(15);
  const [heightP, setHeightP] = useState(15);
  const [message, setMessage] = useState();

  const socket = io("http://192.168.1.35:3000/");

  useEffect(() => {
    socket.on('a', (data) => {
        setHeightC(data)
    })

    socket.on('b', (data) => {
        setHeightP(data)
    })
  },[])

  const sendA = () => {
      socket.emit('a', heightC + 20)
  }

  const sendB = () => {
    socket.emit('b', heightP + 20)
}

  return (
    <View style={styles.container}>
      <View
        style={{
          //   flex: 2,
          backgroundColor: "#00ABFD",
          flexDirection: "row",
          alignItems: "center",
          paddingTop: 13,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 11,
          },
          shadowOpacity: 0.55,
          shadowRadius: 14.78,

          elevation: 22,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("List Friend");
          }}
          style={{ padding: 20 }}
        >
          <Image
            source={require("../src/asset/back.png")}
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 30, color: "#fff" }}>{info.item.name}</Text>
      </View>

      <View style={{ flex: 9, flexDirection: "row" }}>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <View
            style={{ backgroundColor: "red", height: heightC }}
          ></View>
          <TouchableOpacity onPress={() => sendA()} style={{backgroundColor: '#00ABFD', padding: 10, alignItems: 'center'}}>
              <Text style={{fontSize: 20}}>A</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1 , justifyContent: 'flex-end'}}>
          <View
            style={{backgroundColor: "blue", height: heightP }}
          ></View>
          <TouchableOpacity onPress={() => sendB()} style={{backgroundColor: '#000', padding: 10, alignItems: 'center'}}>
              <Text style={{fontSize: 20, color: '#fff'}}>B</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <TextInput
          style={{
            width: "85%",
            height: "90%",
            borderRadius: 20,
            borderWidth: 1,
            borderColor: "#000",
            padding: 20,
          }}


        ></TextInput>
        <TouchableOpacity
          style={{
            backgroundColor: "blue",
            justifyContent: "center",
            borderRadius: 40,
            alignItems: "center",
            padding: 10,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "700", fontSize: 20 }}>
            Send
          </Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    flex: 1,
  },
});
