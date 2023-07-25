import React from "react";
import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const CustomDocumentList = ({ name, icon }) => {
  return (
    <TouchableOpacity
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 35,
        gap: 20,

        marginVertical: 10,
        borderRadius: 15,
        backgroundColor: "#005bc5",
      }}
    >
      <FontAwesome name={icon} size={20} color="#fff" />
      <Text style={{ fontSize: 18, color: "#fff" }}>{name}</Text>
      <FontAwesome
        name="arrow-right"
        size={20}
        color="rgba(256,256,256,0.2)"
        style={{ position: "absolute", right: 0, paddingRight: 10 }}
      />
    </TouchableOpacity>
  );
};

export default CustomDocumentList;
