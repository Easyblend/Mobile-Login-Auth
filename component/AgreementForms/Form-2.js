import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

const Form_2 = ({ handleSubmit, unhandleSubmit, party, setParty }) => {
  console.log(party);
  const [partyData, setPartyData] = useState([]);

  useEffect(() => {
    setPartyData(Array.from({ length: party }, () => ""));
  }, [party]);

  const handlePartyDataChange = (index, text) => {
    const newData = [...partyData];
    newData[index] = text;
    setPartyData(newData);
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
      <Text style={{ fontSize: 20 }}>Names of {party} Participants</Text>
      {partyData.map((partyItem, index) => (
        <TextInput
          key={index}
          placeholder={`Participant ${index + 1} name...`}
          style={{
            marginLeft: 10,
            height: 45,
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 5,
            padding: 8,
            width: "100%",
          }}
          onChangeText={(text) => handlePartyDataChange(index, text)}
          value={partyItem}
        />
      ))}
      <Text style={{ textAlign: "justify", color: "#555" }}>
        The names and contact information of all parties involved in the
        agreement. Typically, this includes the disclosing party (the one
        sharing confidential information) and the receiving party (the one
        receiving the information).
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

export default Form_2;
