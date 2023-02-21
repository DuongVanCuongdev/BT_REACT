import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";

import avatar from "../src/asset/AVC.png";

export default function Signup({ navigation }) {
    const SwitchScreen = (screenName) => {
        navigation.navigate(screenName);
    }
  return (
      <ScrollView>
    <View style={styles.container}>
      <View style={styles.containerBackground}>
        <Image
          style={{ width: 200, height: 163, marginTop: 29 }}
          source={avatar}
        />
        <Text style={{ color: "#fff", marginTop: -25 }}>
          Chào mừng bạn đến với
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 27,
            color: "#fff",
            marginTop: 10,
          }}
        >
          Tech Store
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30,
            color: "#000",
            marginTop: 20,
            marginBottom: 13
          }}
        >
          Đăng ký
        </Text>
        <TextInput
          style={{
            width: 300,
            height: 40,
            borderRadius: 10,
            backgroundColor: "#fff",
            borderColor: "#c4c4c4",
            borderWidth: 1,
            paddingLeft: 8,
            marginTop: 20,
          }}
        //   onChangeText={(text) => {
        //     setUserName(text);
        //   }}
          placeholder="Tên đăng nhập"
        />
        <TextInput
          style={{
            width: 300,
            height: 40,
            borderRadius: 10,
            backgroundColor: "#fff",
            borderColor: "#c4c4c4",
            borderWidth: 1,
            paddingLeft: 8,
            marginTop: 20,
          }}
        //   onChangeText={(text) => {
        //     setPassword(text);
        //   }}
          placeholder="Họ và tên"
          keyboardType=""
        />
        <TextInput
          style={{
            width: 300,
            height: 40,
            borderRadius: 10,
            backgroundColor: "#fff",
            borderColor: "#c4c4c4",
            borderWidth: 1,
            paddingLeft: 8,
            marginTop: 20,
          }}
        //   onChangeText={(text) => {
        //     setPassword(text);
        //   }}
          placeholder="Email"
        //   secureTextEntry={true}
          keyboardType=""
        />
        <TextInput
          style={{
            width: 300,
            height: 40,
            borderRadius: 10,
            backgroundColor: "#fff",
            borderColor: "#c4c4c4",
            borderWidth: 1,
            paddingLeft: 8,
            marginTop: 20,
          }}
        //   onChangeText={(text) => {
        //     setPassword(text);
        //   }}
          placeholder="Mật khẩu"
          secureTextEntry={true}
          keyboardType=""
        />
        <TextInput
          style={{
            width: 300,
            height: 40,
            borderRadius: 10,
            backgroundColor: "#fff",
            borderColor: "#c4c4c4",
            borderWidth: 1,
            paddingLeft: 8,
            marginTop: 20,
          }}
        //   onChangeText={(text) => {
        //     setPassword(text);
        //   }}
          placeholder="Nhập lại mật khẩu"
          secureTextEntry={true}
          keyboardType=""
        />
        
      </View>
      
      <TouchableOpacity
        style={{
          marginTop: 30,
          width: 256,
          height: 44,
          borderRadius: 20,
          alignContent: "center",
          justifyContent: "center",
          backgroundColor: "#00ABFD",
        }}
      >
        <Text style={{ color: "#fff", alignSelf: "center", fontSize: 20 }}>
          Đăng ký
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginTop: 20, marginBottom: 70 }}>
        <Text style={{textDecorationLine: 'underline'}} onPress={() => SwitchScreen('Login')}>Đăng nhập</Text>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  containerBackground: {
    width: '100%',
    height: 625,
    
    backgroundColor: "#00ABFD",
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
    alignItems: "center",
    // justifyContent: "center",
  },
});
