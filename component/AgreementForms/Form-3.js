import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

const Form_3 = ({ handleSubmit, unhandleSubmit }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        width: "100%",
        flex: 1,
        alignItems: "center",
        gap: 10,
      }}
    >
      <Text style={{ fontSize: 20, textAlign: "center" }}>
        Description of Confidential Information
      </Text>
      <TextInput
        placeholder="A clear description of...."
        inputMode="numeric"
        style={{
          marginLeft: 10,
          height: 45,
          borderColor: "#ccc",
          borderWidth: 1,
          borderRadius: 5,
          padding: 8,
          width: "100%",
          marginBottom: 20,
          textAlignVertical: "top", // Align text to the top of the TextInput
          alignContent: "center",
          justifyContent: "center",
          height: 150,
        }}
        multiline={true}
        numberOfLines={10}
      />
      <Text style={{ textAlign: "justify", color: "#555" }}>
        A clear and specific description of the information that the disclosing
        party considers confidential. This can include trade secrets, business
        plans, financial data, customer lists, product designs, or any sensitive
        information they wish to protect.
      </Text>
      <TouchableOpacity
        onPress={handleSubmit}
        style={{
          marginTop: 10,
          backgroundColor: "#0084fc",
          borderRadius: 4,
          padding: 10,
          alignItems: "center",
          width: "100%",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 20 }}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={unhandleSubmit}
        style={{
          marginTop: 10,
          backgroundColor: "#333",
          borderRadius: 4,
          padding: 10,
          alignItems: "center",
          width: "100%",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 20 }}>Previous</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form_3;
