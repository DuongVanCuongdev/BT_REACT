import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function InfoProduct({ navigation, route }) {
  const info = route.params;
  const config = {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 9,
  };

  useEffect(() => {
    console.log(info.item);
  }, []);

  const onSave = () => {
    const newProduct = info.item;
    console.log(newProduct);
    fetch("https://60c7a3edafc88600179f5766.mockapi.io/w", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => navigation.navigate("Cart"));
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#00ABFD",
          flexDirection: "row",
          alignItems: "center",
          paddingTop: 20,
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
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 25,
            color: "#fff",
          }}
        >
          Chi tiết sản phẩm
        </Text>

        <TouchableOpacity style={{marginLeft: '25%'}} onPress={() => navigation.navigate('Cart')}>
          <Image
            source={require("../src/asset/shopping-cart.png")}
            style={{ width: 20, height: 20 }}
          />
          {/* <Text style={{backgroundColor: 'red', borderRadius: 100, width: 20}}>5</Text> */}
        </TouchableOpacity>
      </View>

      <View style={{ padding: 30 }}>
        <Image
          source={{ uri: info.item.imagePhone }}
          style={{ width: "100%", height: "50%", marginBottom: 8 }}
        />
        <Text style={{ fontSize: 25, fontWeight: "700" }}>
          {info.item.name}
        </Text>
        <Text style={{ color: "#EE0033", fontSize: 20, fontWeight: "700" }}>
          {new Intl.NumberFormat("vi-VN", config).format(info.item.price)}
        </Text>
        <Text style={{ marginTop: 30, marginBottom: 10, color: "#007EBB" }}>
          Thông tin sản phẩm:
        </Text>
        <Text>{info.item.dependencies}</Text>
      </View>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <TouchableOpacity
          style={{
            width: 190,
            height: 49,
            backgroundColor: "#A5A5A5",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <Text
            style={{ color: "#fff", fontSize: 20, fontWeight: "400" }}
            onPress={() => onSave()}
          >
            Thêm vào giỏ hàng
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            width: 190,
            height: 49,
            backgroundColor: "#00ABFD",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "400" }}>
            Mua ngay
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
    backgroundColor: "#fff",
  },
});
