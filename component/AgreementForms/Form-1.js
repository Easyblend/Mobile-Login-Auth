import { Picker } from "@react-native-picker/picker";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Form_1 = ({ handleSubmit, setParty, party }) => {
  const options = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "7", value: "7" },
    { label: "8", value: "8" },
    // Add more options as needed
  ];

  // Event handler for when the value is changed
  const onValueChange = (itemValue, itemIndex) => {
    setParty(itemValue);
  };

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
      <Text style={{ fontSize: 20 }}>Number of parties involved</Text>

      <View>
        <Picker selectedValue={party} onValueChange={onValueChange}>
          {options.map((option) => (
            <Picker.Item
              key={option.value}
              label={option.label}
              value={option.value}
            />
          ))}
        </Picker>
        <Text style={{ textAlign: "center" }}>
          The number of Parties involved in the Disclosure Agreement. This
          includes you !
        </Text>
      </View>
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
    </View>
  );
};

export default Form_1;
