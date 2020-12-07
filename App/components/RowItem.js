import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import Colors from "../constants/Colors";

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    color: Colors.text,
  },
  separator: {
    backgroundColor: Colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
  },
});

export const RowItem = ({ text, rightIcon, onPress }) => {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
      {rightIcon}
    </TouchableOpacity>
  );
};
export const RowSeparator = () => {
  return <View style={styles.separator} />;
};
