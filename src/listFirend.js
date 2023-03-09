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

  const goToDetail = (item) => {
    navigation.navigate("Chat", { item: item });
  };

  useEffect(() => {
    getListFriend();

    console.log("hshshsh", listFriend);
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          //   flex: 2,
          backgroundColor: "#00ABFD",
          flexDirection: "row",
          alignItems: "center",
          padding: 13,
          paddingTop: 30,
          justifyContent: 'center',
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
        
        <View
          style={{
            backgroundColor: "#ffffff",
            width: "95%",
            height: 40,
            alignSelf: "center",
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 20, height: 20, marginLeft: 16 }}
            source={require("../src/asset/search.png")}
          />

          <TextInput
            style={{ width: "100%", height: "100%", marginLeft: 11 }}
            placeholder="Tìm kiếm sản phẩm"
            placeholderTextColor="#808080"
            onChangeText={(text) => {
              searchResult(text);
              setTextSearch(text);
            }}
          />
        </View>
      </View>

      <FlatList
        data={listFriend}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                padding: 20,
                backgroundColor: "#fff",
                alignItems: "center",
                borderWidth: 1,
                borderTopColor: "#CCCCCC",
              }}
              onPress={() => goToDetail(item)}
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
