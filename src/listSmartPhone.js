import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import avatar from '../src/asset/TechStore.png';

export default function ListSmartPhone({navigation}) {


  return (
    <View style={styles.container}>
      
        <View style={{flex:2, backgroundColor: '#00ABFD', flexDirection: 'row', alignItems: 'center', paddingTop: 13}}>
            <Image source={require('../src/asset/AVC.png')} style={{width:96, height: 100}}/>
            <Text style={{fontWeight: 'bold', fontSize: 25, color: '#fff', marginLeft: -15}}>Tech Store</Text>
        </View>

        <View style={{flex:10, backgroundColor: '#000', alignItems: 'center'}}>
            <View style = {{backgroundColor: '#fff', width: '90%', height: 47, marginTop: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center', paddingLeft: 15}}>
                <Image style={{height: 25, width:25}} source={require('../src/asset/search.png')}/>
                <TextInput placeholder='Tìm kiếm sản phẩm' style={{height: 20, width: '80%', marginLeft: 10}}/>
            </View>
        </View>

        <View style={{flex:1, backgroundColor: '#0a0'}}>
            
        </View>

      <StatusBar style="auto" />
    </View>
    
  );

  


}

const styles = StyleSheet.create({
  container: {
      flexDirection: 'column',
    width: '100%',
    flex: 1,
   
  },
});