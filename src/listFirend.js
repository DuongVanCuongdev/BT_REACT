import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function ListFriend({ navigation }) {
  const [listFriend, setListFriend] = useState();

  const getListFriend = async () => {
    await fetch("https://60f4d20e2208920017f39df5.mockapi.io/customer")
      .then((Response) => Response.json())
      .then((json) => {
        setListFriend(json);
        // console.log(json)
      });
  };

  useEffect(() => {
    getListFriend();

    console.log("hshshsh", listFriend);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={listFriend}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                padding: 20,
                backgroundColor: "#fff",
                //   margin: 15,
                //   borderRadius: 10,
                alignItems: "center",
                //   borderTopColor: 'red'
                borderWidth: 1,
                borderTopColor: "#CCCCCC",
              }}
            >
              <Image
                style={{ width: 60, height: 60, borderRadius: 100 }}
                source={{ uri: item.avatar }}
              />
              <View style={{ marginLeft: 20 }}>
                <Text style={{ fontSize: 15, fontWeight: "700" }}>
                  {item.name}
                </Text>
                <Text>{item.timePost}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
      ></FlatList>

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
