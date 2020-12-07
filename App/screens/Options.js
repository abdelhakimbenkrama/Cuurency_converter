import React from "react";
import { View, StyleSheet, ScrollView, Linking, Alert } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { RowItem, RowSeparator } from "../components/RowItem";

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
});

const openUrl = (url) => {
  return Linking.openURL(url).catch(() => {
    Alert.alert("Sorry ,somthing went Wrong", "Please try Again");
  });
};

const Options = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <RowItem
          text="Themes"
          rightIcon={
            <Entypo name="chevron-right" size={20} color={Colors.blue} />
          }
          onPress={() => alert("todo!")}
        />
        <RowSeparator />
        <RowItem
          text="Basics"
          rightIcon={<Entypo name="export" size={20} color={Colors.blue} />}
          onPress={() => openUrl("https://www.google.com")}
        />

        <RowSeparator />
        <RowItem
          text="Examples"
          rightIcon={<Entypo name="export" size={20} color={Colors.blue} />}
          onPress={() => openUrl("https://www.youtube.com")}
        />
      </ScrollView>
    </View>
  );
};

export default Options;
