import React from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  StyleSheet,
} from "react-native";
import Colors from "../constants/Colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 5,
    flexDirection: "row",
  },
  containerDisabled: {
    backgroundColor: Colors.offWhite,
  },
  button: {
    padding: 15,
    borderRightColor: Colors.border,
    borderRightWidth: 1,
    backgroundColor: Colors.white,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: Colors.blue,
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    padding: 10,
    color: Colors.textLight,
  },
});

export const ConversionInput = ({ text, onButtonPress, ...props }) => {
  const containerStyles = [styles.container];

  if (props.editable === false) {
    containerStyles.push(styles.containerDisabled);
  }
  return (
    <View style={containerStyles}>
      <TouchableOpacity onPress={onButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} {...props} />
    </View>
  );
};
