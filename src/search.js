import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ActivityIndicator
} from "react-native";
import { useState, useEffect } from "react";


export default function Search({ navigation }) {
  const [listCustomer, setListCustomer] = useState();
  const [loading, setLoading] = useState(false)


  const config = { style: 'currency', currency: 'VND', maximumFractionDigits: 9}
  


  const getListCustomer = async (text) => {

    setLoading(true)

    await fetch(
      "https://api.themoviedb.org/3/search/keyword?api_key=e9e9d8da18ae29fc430845952232787c&page=1&query=" +
        text
    )
      .then((response) => response.json())
      .then((json) => {
          setLoading(false)
        setListCustomer(json.results);
        console.log("list", listCustomer);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getListCustomer();
  }, []);
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
            navigation.replace("Home");
          }}
          style={{ padding: 20 }}
        >
          <Image
            source={require("../src/asset/back.png")}
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: "#ffffff",
            width: "75%",
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
              getListCustomer(text);
            }}
          />
        </View>
      </View>

      <View style={{ flex: 1 }}>

      {loading?  <ActivityIndicator style={{marginTop: 20, justifyContent:'center'}} />: null}
        <FlatList

          data={listCustomer}
          renderItem={({ item }) => (
            <View style={{
                flexDirection: "colum",
                padding: 10,
                marginBottom: 20,
                backgroundColor: "rgba(255,255,255,0.9)",
                borderRadius: 20,
                shadowColor: "#000",
                shadowOpacity: 0.3,
                shadowRadius: 20,

              }}>
                  <Text style={{ fontSize: 25, fontWeight: "700"}}>{item.name}</Text>

              <Text style={{ fontSize: 25, fontWeight: "500", color:'red'}}>{new Intl.NumberFormat('vi-VN', config).format(item.id)}</Text>
              
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
