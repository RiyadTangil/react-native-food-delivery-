import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";
import OrderCompleted from "./screens/OrderCompleted";

const store = configureStore();
const Stack = createNativeStackNavigator();
export default function RootNavigation() {
 

  const screenOptions = {
    headerShown: false,
  };

  return (
    <ReduxProvider store={store}>

   
    <NavigationContainer>
      <Stack.Navigator >
          <Stack.Screen  name="Home" component={Home} />
          <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
          {/* <Stack.Screen name="OrderCompleted" component={OrderCompleted} /> */}
        </Stack.Navigator>
    </NavigationContainer>
    </ReduxProvider>
  );
}
