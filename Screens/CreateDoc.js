import React from "react";
import { Text, View, TouchableOpacity, SafeAreaView } from "react-native";

import CustomDocumentList from "../component/CustomDocumentList";

import { FontAwesome } from "@expo/vector-icons";
const CreateDoc = ({ navigation }) => {
  const docTypes = [
    {
      icon: "file-o",
      name: "Non-Disclosure Agreeement",
    },
    {
      icon: "files-o",
      name: "Lease Agreement",
    },
    {
      icon: "file-text-o",
      name: "Last Will and Testament",
    },
    {
      icon: "file-pdf-o",
      name: "Business Contract",
    },
    {
      icon: "file-excel-o",
      name: "Divorce Settlement Agreement",
    },
    {
      icon: "file-excel-o",
      name: "Divorce Settlement Agreement",
    },
  ];

  return (
    <>
      <TouchableOpacity
        style={{ top: 40, padding: 20, position: "absolute", zIndex: 1 }}
        onPress={() => navigation.openDrawer()}
      >
        <FontAwesome name="navicon" size={30} color="black" />
      </TouchableOpacity>
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: "center",
          top: 90,
          marginHorizontal: 20,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "500", color: "#005bc5" }}>
          Create Legal Documents
        </Text>
        <View style={{ width: "100%" }}>
          {docTypes.map((docs) => {
            return <CustomDocumentList name={docs.name} icon={docs.icon} />;
          })}
        </View>
      </SafeAreaView>
    </>
  );
};

export default CreateDoc;
