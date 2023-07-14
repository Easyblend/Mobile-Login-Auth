import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Login from "./Screens/Login";

const MyTextInput = () => {
  const [text, setText] = useState("");

  const handleTextChange = (inputText) => {
    setText(inputText);
  };

  return <Login />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});

export default MyTextInput;
