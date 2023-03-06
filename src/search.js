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
  const [listSearch, setListSearch] = useState();
  const [textSearch, setTextSearch] = useState();
  const [loading, setLoading] = useState(false)


  const config = { style: 'currency', currency: 'VND', maximumFractionDigits: 9}
  


  const getListCustomer = async () => {

    setLoading(true)

    await fetch(
      "https://60c7a3edafc88600179f5766.mockapi.io/listPhone"
    )
      .then((response) => response.json())
      .then((json) => {
          setLoading(false)
        setListCustomer(json);
        console.log("list", listCustomer);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const searchResult = async(name) => {
    const newLists = new Array()
    const newList = new Array()
    listCustomer.forEach(element => {
     if (element.name.includes(name) && name != "") {
       console.log("==", name);
       newLists.push(element)
     } else if (name == "" && !element.name.includes(name)){
       newLists(newList)
     }
    })
    setListSearch(newLists)
  }

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
              searchResult(text);
              setTextSearch(text);
            }}
          />
        </View>
      </View>

      <View style={{ flex: 1 }}>

      {loading?  <ActivityIndicator style={{marginTop: 20, justifyContent:'center'}} />: null}
        <FlatList

          data={listSearch}
          renderItem={({ item }) => {
            const partialText = item.name.split(textSearch)
            return (
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
                  <Text style={{ fontSize: 25, fontWeight: "700"}}>{partialText.map((part, index) => {
                    return(
                      <Text key={index}>
                        {part}
                        {index !== partialText.length - 1 && <Text style={{color: 'blue', fontWeight: '900'}}>{textSearch}</Text>}
                      </Text>
                    )
                  })}</Text>

              <Text style={{ fontSize: 25, fontWeight: "500", color:'red'}}>{new Intl.NumberFormat('vi-VN', config).format(item.id)}</Text>
              
            </View>
            )
          }}
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
