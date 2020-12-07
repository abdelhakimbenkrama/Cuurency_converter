import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

import Home from "../screens/Home";
import Options from "../screens/Options";
import CurrencyList from "../screens/CurrencyList";
import Colors from "../constants/Colors";
import { ConversionContextProvide } from "../utils/ConversionContext";

const MainStack = createStackNavigator();

const MainStackScreen = () => (
  <MainStack.Navigator
  //   headerMode="none"
  //initialRouteName="CurrencyList"
  >
    <MainStack.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
      }}
    />
    <MainStack.Screen name="Options" component={Options} />
    <MainStack.Screen
      name="CurrencyList"
      component={CurrencyList}
      options={({ navigation, route }) => ({
        title: route.params && route.params.title,
        headerLeft: null,
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.pop()}
            style={{ paddingHorizontal: 10 }}
          >
            <Entypo name="cross" size={30} color={Colors.blue} />
          </TouchableOpacity>
        ),
      })}
    />
  </MainStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <ConversionContextProvide>
      <MainStackScreen />
    </ConversionContextProvide>
  </NavigationContainer>
);
