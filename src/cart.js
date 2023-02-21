import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import avatar from "../src/asset/TechStore.png";

export default function Cart({ navigation }) {
  const [listProduct, setListProduct] = useState();
  const [number, setNumber] = useState();
  const [total, setTotal] = useState();
  const [check, setCheck] = useState(false)


  const getListProduct = async () => {
    await fetch("https://60c7a3edafc88600179f5766.mockapi.io/w")
      .then((Response) => Response.json())
      .then((json) => {
        setListProduct(json);
        // console.log("list", listProduct);
        setNumber(json.length)
        let amountOfMoney = 0
        let money = 0
        for (let i = 0; i < json.length; i++){
          money = json[i].price * json[i].quantityBuy
          amountOfMoney += money
        }
        setTotal(amountOfMoney)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getListProduct();
  }, []);

  const onDelete = (deleteId) => {
    // const newList = listProduct.filter(item => item.id !== deleteId);
    // setListProduct(newList);

    const newList = new Array()
    listProduct.forEach(element => {
      if(element.id != deleteId){
        newList.push(element)
      }
    });
    setListProduct(newList)


    setNumber(newList.length)

    let amountOfMoney = 0
    let money = 0
    for (let i = 0; i < newList.length; i++){
      money = newList[i].price * newList[i].quantityBuy
      amountOfMoney += money
    }
    console.log(amountOfMoney);
    setTotal(amountOfMoney);
  };


  const onDeleteAPI = async(deleteID) => {
    fetch("https://60c7a3edafc88600179f5766.mockapi.io/w/" + deleteID, {
      method: 'DELETE',
    })
    .then(res => {
      if(res.status == 200) {
        alert("Xoa thanh cong")
        getListProduct()
      } else {
        alert("Xoa khong thanh cong")
      }

    })

  }



  const updateItem = (item, bool) => {

    // console.log(check);
    if (!bool) {
      item.quantityBuy = item.quantityBuy + 1
    item.quantity = item.quantity - 1
    } else {
      item.quantityBuy = item.quantityBuy - 1
    item.quantity = item.quantity + 1
    }
    

    const requestOptions = {
      method: "PUT",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(item)
    };
    fetch("https://60c7a3edafc88600179f5766.mockapi.io/w/" + item.id, requestOptions)
    .then(res => {
      if(res.status == 200) {
        console.log("Update thanh cong id: " , item.id);
        getListProduct()
      } else {
        console.log("That bai");
      }
    })
  }


  const updateItemDelete = (item) => {

    if (item.quantityBuy > 1 ) {
      item.quantityBuy = item.quantityBuy - 1
      item.quantity = item.quantity + 1


      const requestOptions = {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(item)
      };
      fetch("https://60c7a3edafc88600179f5766.mockapi.io/w/" + item.id, requestOptions)
      .then(res => {
        if(res.status == 200) {
          console.log("Update thanh cong id: " , item.id);
          getListProduct()
        } else {
          console.log("That bai");
        }
      })
    } else {
      onDeleteAPI(item.id)
    }
    
  }


  // function totalAmount() {
  //   if(listProduct.length != []){
  //     let amountOfMoney = 0
  //   let money = 0
  //   for (let i = 0; i < listProduct.length; i++){
  //     money = listProduct[i].price * listProduct[i].quantityBuy
  //     amountOfMoney += money
  //   }

  //   setTotal(amountOfMoney);
  //   } else { 
  //     setTotal(0)
  //   }
    
  // }

  const QuantityBuy = 0
  function addition(){
    for (let i = 0; i < listProduct.length; i++){
      
      console.log(listProduct[i].price);
    }
  }



  const config = {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 9,
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
          Giỏ hàng của tôi
        </Text>
      </View>
      <Text
        style={{
          marginTop: 15,
          marginBottom: 15,
          marginLeft: 15,
          fontSize: 20,
          fontWeight: "500",
        }}
      >
        Tổng số: {number} sản phẩm
      </Text>

      <StatusBar style="auto" />
      <View style={{ flex: 10, backgroundColor: '#F7F7F7' }}>
        <FlatList
          data={listProduct}
          renderItem={({ item }) => (
            <View style={{flexDirection:'row', padding: 20, backgroundColor: '#fff', margin: 15, borderRadius: 10}}>
              <Image
                style={{ width: 100, height: 100 }}
                source={{ uri: item.imagePhone }}
              />
              <View>
              <Text style={{fontSize: 15, fontWeight: '700'}}>{item.name}</Text>
              <Text style={{color: 'red', fontSize: 15, marginTop: 20, marginBottom: 20}}>
                {new Intl.NumberFormat("vi-VN", config).format(item.price)}
              </Text>
              <Text style={{fontSize: 12, color: '#707070'}}>Chỉ còn {item.quantity} sản phẩm</Text>
              </View>

              <View style={{marginLeft: "25%"}}>
              <TouchableOpacity onPress={() => onDeleteAPI(item.id)}>
                <Text style={{fontSize: 25, fontWeight: '600'}}>X</Text>
              </TouchableOpacity>

              <View style={{flexDirection: 'row', marginTop:35, backgroundColor: '#F4F4F4', padding: 7, marginLeft: -20, borderRadius: 10}}>
              <TouchableOpacity ><Text style={{fontSize: 20}} onPress={() => updateItem(item, true)}>-</Text></TouchableOpacity>
              <Text style={{marginLeft: 10, marginRight: 10, fontSize: 20}}>{item.quantityBuy}</Text>
              <TouchableOpacity ><Text style={{fontSize: 20}} onPress={() => updateItem(item, false)}>+</Text></TouchableOpacity>
              </View>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}

        ></FlatList>
      </View> 

      <View style={{ flex: 1.5 , flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{flex: 1,fontSize: 20, fontWeight: '700', marginLeft: 30}}>Tổng cộng: {new Intl.NumberFormat("vi-VN", config).format(total)}</Text>
        <TouchableOpacity style={{flex: 1 ,backgroundColor: '#00ABFD', alignItems:'center', padding: 10, borderRadius: 20}}><Text style={{fontSize: 20, fontWeight: '500'}}>Thanh toán</Text></TouchableOpacity>
      </View>
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
