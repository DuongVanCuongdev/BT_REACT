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
export default function Vote({ navigation, route }) {
  const info = route.params;
  var list = new Array()

  const [heightC, setHeightC] = useState(15);
  const [heightP, setHeightP] = useState(15);
 

  const socket = io("http://192.168.0.197:3000/");

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
