import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { io } from "socket.io-client";
export default function Chat({ navigation, route }) {
  const info = route.params;
  var list = new Array();

  const [message, setMessage] = useState();
  const [listMessage, setListMessage] = useState();

  const socket = io("http://192.168.0.197:3000/");

  useEffect(() => {
    socket.on("message", (data) => {
      // message(data)
      list.push(data);
      setListMessage(list);
      // console.log("Mang: ", list);
    });
  }, []);

  const sendMessage = () => {
    if (message == "") {
      console.log(message);
    } else {
      const newObj = {
        idObject: info.item.id,
        name: info.item.name,
        img: info.item.image,
        message,
      };
      socket.emit("message", newObj);
      setMessage("")
    }
  };

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
        <FlatList
          data={listMessage}
          renderItem={({ item }) => (
            <View style={{ marginTop: 15 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 100,
                    marginRight: 10,
                  }}
                  source={{ uri: item.img }}
                />

                <Text>{item.message}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => {}}
        />
      </View>
      <View style={styles.messageInputContainer}>
        <TextInput
          style={styles.messageInput}
          onChangeText={(text) => {
            setMessage(text);
          }}
          value = {message}
        ></TextInput>
        <TouchableOpacity
          style={styles.sendButton}
          onPress={() => sendMessage()}
        >
          <Text style={styles.sendButtonText}>
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
  messagesContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 5,
  },
  messageContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    alignSelf: 'flex-start',
    maxWidth: '70%',
  },
  messageText: {
    fontSize: 16,
  },
  messageInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#dcdcdc',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  messageInput: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    borderRadius: 20,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#008cff',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  sendButtonText: {
    color: '#ffffff',
    fontSize: 16,
  }
});
