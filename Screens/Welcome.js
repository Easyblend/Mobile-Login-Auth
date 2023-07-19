import React, { Component } from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Entypo, Feather } from "@expo/vector-icons";

const Welcome = ({ navigation }) => {
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../assets/lawhub-1.jpg")}
    >
      <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.3)" }}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#fff" }}>
            Law-Hubbs
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: "center",
            paddingHorizontal: 20,
            top: 0,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              textAlign: "center",
              color: "#fff",
            }}
          >
            Everything you need in
          </Text>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              textAlign: "center",
              color: "#fff",
            }}
          >
            one single app.
          </Text>
          <Text
            style={{ fontSize: 16, textAlign: "center", top: 5, color: "#eee" }}
          >
            All lawyers from all parts of the world. We deliever the best beyond
            .
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("register")}
            style={{
              backgroundColor: "#111",
              padding: 20,
              width: "85%",
              borderRadius: 5,
              marginBottom: 60,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              bottom: 0,
              gap: 20,
            }}
          >
            <Text style={{ color: "#fff", textAlign: "center" }}>
              Let's Get Started
            </Text>
            <Feather name="arrow-right" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Welcome;
