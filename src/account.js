import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import avatar from '../src/asset/TechStore.png';
import cartStore from './cartStore';

export default function Account({navigation}) {

const listCart = cartStore(state => state.list)
useEffect(() => {
  console.log("ACC",listCart); 
}, []);

  return (
    <View style={styles.container}>
      
        <Text>Thong tin tai khoan</Text>

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