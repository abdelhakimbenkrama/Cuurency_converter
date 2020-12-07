import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { format } from "date-fns";
import { Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import { ConversionInput } from "../components/ConversionInput";
import Colors from "../constants/Colors";
import { Button } from "../components/Button";
import { KeyBoardSpacer } from "../components/KeyBoardSpacer";
import { ConversionContext } from "../utils/ConversionContext";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue,
    flex: 1,
  },
  content: {
    //paddingTop: screen.height * 0.2,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
  },
  logobackground: {
    width: screen.width * 0.45,
    height: screen.height * 0.45,
  },
  logo: {
    position: "absolute",
    width: screen.width * 0.25,
    height: screen.height * 0.25,
  },
  textHeader: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 30,
    marginVertical: 20,
    textAlign: "center",
  },
  text: {
    color: Colors.white,
    fontSize: 13,
    textAlign: "center",
  },
  header: {
    alignItems: "flex-end",
    paddingHorizontal: 20,
  },
});

const Home = ({ navigation }) => {
  const [value, setValue] = useState("100");
  const {
    baseCurrency,
    quoteCurrency,
    swapCurrrency,
    date,
    rates,
    isLoading,
  } = useContext(ConversionContext);
  const conversionRate = rates[quoteCurrency];

  const [scrollEnabled, setScrollEnabled] = useState(false);
  console.log(conversionRate);
  return (
    <View style={styles.container}>
      <ScrollView scrollEnabled={scrollEnabled}>
        <StatusBar barStyle="light-content" backgroundColor={Colors.blue} />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.push("Options")}>
            <Entypo name="cog" size={32} color={Colors.white} />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../assets/images/background.png")}
              style={styles.logobackground}
              resizeMode="contain"
            />
            <Image
              source={require("../assets/images/logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.textHeader}> Currency Converter</Text>
          {isLoading ? (
            <ActivityIndicator color={Colors.white} size="large" />
          ) : (
            <>
              <ConversionInput
                text={baseCurrency}
                value={value}
                onButtonPress={() =>
                  navigation.push("CurrencyList", {
                    title: "Base Currency",
                    isBaseCurrency: true,
                  })
                }
                onChangeText={(text) => setValue(text)}
                keyboardType="numeric"
              />
              <ConversionInput
                text={quoteCurrency}
                value={
                  value && `${(parseFloat(value) * conversionRate).toFixed(2)}`
                }
                onButtonPress={() =>
                  navigation.push("CurrencyList", {
                    title: "Quote Currency",
                    isBaseCurrency: false,
                  })
                }
                editable={false}
              />
              <Text style={styles.text}>
                {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${
                  date && format(new Date(date), "MMMM do, yyyy")
                }.`}
              </Text>
              <Button
                text="Reverse Currencies"
                onPress={() => swapCurrrency()}
              />
            </>
          )}

          <KeyBoardSpacer
            onToggle={(keyboardIsVisible) =>
              setScrollEnabled(keyboardIsVisible)
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
