import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import Home from "./home";
import Cart from "./cart";
import Account from "./account";


const Tab = createBottomTabNavigator();

// const tabNv = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={Home} />
//         <Tab.Screen name="Cart" component={Cart} />
//         <Tab.Screen name="Account" component={Account} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

const Tabbar = () => {
    return (
              <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} options={{ headerShown: false }}/>
                <Tab.Screen name="Cart" component={Cart} options={{ headerShown: false }}/>
                <Tab.Screen name="Account" component={Account} options={{ headerShown: false }}/>
              </Tab.Navigator>
          );
};

export default Tabbar;
