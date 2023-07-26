import React, { useState } from "react";

import {
  KeyboardAvoidingView,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const CustomerInquiriesPage = ({ navigation }) => {
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleQuestionChange = (text) => {
    setQuestion(text);
  };

  const handleSubmit = () => {
    // Handle form submission here, e.g., send data to a backend server
    // For demonstration purposes, we'll just log the data
    // console.log("Name:", name);
    // console.log("Question:", question);
    alert(`${name} ${question} 
    SUBMITTED`);

    navigation.navigate("Home");
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <TouchableOpacity
        style={{ top: 40, padding: 20, position: "absolute", zIndex: 1 }}
        onPress={() => navigation.openDrawer()}
      >
        <FontAwesome name="navicon" size={30} color="black" />
      </TouchableOpacity>

      <View style={styles.formContainer}>
        <Text style={styles.title}>Leave a Message</Text>
        <Text style={styles.subheading}>Enter your name:</Text>
        <TextInput
          mode="outlined"
          value={name}
          onChangeText={handleNameChange}
          style={styles.input}
        />

        <Text style={styles.subheading}>Type your question:</Text>
        <TextInput
          value={question}
          onChangeText={handleQuestionChange}
          multiline={true}
          numberOfLines={10}
          style={styles.textArea}
        />

        <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
          <Text style={{ color: "#fff", fontSize: 20 }}>Submit</Text>
        </TouchableOpacity>

        <View
          style={{
            marginTop: 30,
            justifyContent: "center",
            alignContent: "center",
            alignSelf: "flex-end",
          }}
        >
          <Text
            style={{
              textAlign: "justify",
              color: "#777",
            }}
          >
            Our Lawyers reply within the shortest time Range. Just stay on the
            look-Out, Keep eyes on the notification panel for replies.
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    textAlign: "center",
    marginBottom: 40,
    fontSize: 20,
  },
  formContainer: {
    backgroundColor: "#f0f0f0",
    padding: 20,
    borderRadius: 8,
    justifyContent: "flex-start",
    flex: 1,
    top: 70,
  },
  subheading: {
    marginBottom: 10,
  },
  input: {
    marginBottom: 20,
    borderWidth: 2,
    borderRadius: 5,
    padding: 15,
    borderColor: "#ccc",
    alignContent: "center",
    justifyContent: "center",
  },
  textArea: {
    marginBottom: 20,
    textAlignVertical: "top", // Align text to the top of the TextInput
    borderColor: "#ccc",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignContent: "center",
    justifyContent: "center",
    height: 150,
  },
  submitButton: {
    marginTop: 10,
    backgroundColor: "#00b4fc",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
});

export default CustomerInquiriesPage;
