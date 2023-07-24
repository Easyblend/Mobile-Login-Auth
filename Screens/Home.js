import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import userHook, { useCustomContextProvider } from "./Utils/userHook";

const Home = ({ navigation }) => {
  const { data } = userHook();

  useEffect(() => {
    // Check if there is no user data and navigate to login screen
    if (!data) {
      navigation.navigate("login");
    }
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, flexDirection: "row" }}>
      <TouchableOpacity
        style={{ top: 40, padding: 20, position: "absolute", zIndex: 1 }}
        onPress={() => navigation.openDrawer()}
      >
        <FontAwesome name="navicon" size={30} color="black" />
      </TouchableOpacity>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Text style={{ fontSize: 26, textAlign: "center" }}>
          Welcome {data?.displayName}
        </Text>
        <Text>No Activities at the Moment</Text>
        <Image
          source={require("../assets/illustration-3.png")}
          style={{ width: 350, height: 350 }}
        />
        <Text style={{ color: "red" }}>Swipe left to get started</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
