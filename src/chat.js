import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function Chat({navigation}) {



  return (
    <View style={styles.container}>
      
        <View style={{flex: 9}}></View>
        <View style={{flex: 1, flexDirection: 'row'}}>
            <TextInput style={{width: "85%", height: "90%",borderRadius: 20 , borderWidth: 1,
                borderColor: "#000", padding: 20}}></TextInput>
            <TouchableOpacity style={{backgroundColor: 'blue', justifyContent: 'center', borderRadius: 40, alignItems: 'center', padding: 10}}>
                <Text style={{color: '#fff', fontWeight: '700', fontSize: 20}}>Send</Text>
            </TouchableOpacity>
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