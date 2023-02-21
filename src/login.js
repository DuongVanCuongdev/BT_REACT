import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

import avatar from "../src/asset/AVC.png";
// import avatar from "../";



export default function Login({ navigation }) {
    const SwitchScreen = (screenName) => {
        navigation.navigate(screenName);
    }



    function Login() {
        navigation.navigate('Home');
    }

  return (
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
          Đăng nhập
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
          // onChangeText={(text) => {
          //   setUserName(text);
          // }}
          placeholder="Tài khoản"
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
        <TouchableOpacity
          style={{
            width: 256,
            height: 44,
            borderRadius: 20,
            alignContent: "center",
            justifyContent: "center",
            backgroundColor: "#FFFFFF",
            marginTop: 50,
          }}
        >
          <Text style={{ color: "#000", alignSelf: "center", fontSize: 20 }}>
            Đăng nhập
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{ marginTop: 20 }} onPress={() => SwitchScreen('Signup')}>
          
        <Text>Chưa có tài khoản?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 30,
          width: 256,
          height: 44,
          borderRadius: 20,
          alignContent: "center",
          justifyContent: "center",
          backgroundColor: "#00ABFD",
          marginTop: 10,
        }}
        onPress={() => Login()}
      >
        <Text style={{ color: "#fff", alignSelf: "center", fontSize: 20 }}>
          Đăng nhập
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  containerBackground: {
    width: '100%',
    height: '80%',
    left: 0,
    backgroundColor: "#00ABFD",
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
    alignItems: "center",
    // justifyContent: "center",
  },
});
