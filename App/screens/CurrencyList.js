import React, { useContext } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { RowItem, RowSeparator } from "../components/RowItem";
import { useSafeArea } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import currencies from "../data/currencies.json";
import { ConversionContext } from "../utils/ConversionContext";

const styles = StyleSheet.create({
  container: { backgroundColor: Colors.white },
  icon: {
    width: 30,
    height: 30,
    backgroundColor: Colors.blue,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});

const CurrencyList = ({ navigation, route = {} }) => {
  const insets = useSafeArea();
  const params = route.params || {};
  const {
    baseCurrency,
    quoteCurrency,
    setBaseCurrency,
    setQuoteCurrency,
  } = useContext(ConversionContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={currencies}
        renderItem={({ item }) => {
          let seleceted = false;
          if (params.isBaseCurrency && item == baseCurrency) {
            seleceted = true;
          } else if (!params.isBaseCurrency && item == quoteCurrency) {
            seleceted = true;
          }

          return (
            <RowItem
              text={item}
              onPress={() => {
                if (params.isBaseCurrency) {
                  setBaseCurrency(item);
                } else {
                  setQuoteCurrency(item);
                }
                navigation.pop();
              }}
              rightIcon={
                seleceted && (
                  <View style={styles.icon}>
                    <Entypo name="check" size={20} color={Colors.white} />
                  </View>
                )
              }
            />
          );
        }}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={() => <RowSeparator />}
        ListFooterComponent={() => (
          <View style={{ paddingBottom: insets.bottom }} />
        )}
      />
    </View>
  );
};

export default CurrencyList;
