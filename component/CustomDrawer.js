import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { Image } from "react-native";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import userHook from "../Screens/Utils/userHook";
import { auth } from "../config/firebaseConfig";
import Setting from "../Screens/Setting";
import Home from "../Screens/Home";

const CustomDrawer = (props) => {
  const { data } = userHook();

  const sign_Out = () => {
    signOut(auth)
      .then(() => {
        console.log("You are logging Out!");
        props.navigation.navigate("login");
      })
      .catch((err) => {
        console.log(err.code);
      });
  };

  // Check if there is no user data and navigate to login screen
  useEffect(() => {
    // Check if there is no user data and navigate to login screen
    if (!data) {
      props.navigation.navigate("login");
    }
  }, [data, props.navigation]);

  return (
    <View style={{ flex: 1, paddingVertical: 20 }}>
      <DrawerContentScrollView {...props} style={{ flex: 1, height: "100%" }}>
        <TouchableOpacity style={{ paddingLeft: 20 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Image
              source={{ uri: data?.photoURL }}
              style={{
                height: 60,
                width: 60,
                borderColor: "#ccc",
                borderWidth: 1,
                borderRadius: 1000,
              }}
            />
            <Text style={{ fontSize: 20 }}>{data?.displayName}</Text>
          </View>

          <View style={{ paddingVertical: 10 }}>
            <Text style={{}}>Client Account</Text>
          </View>
        </TouchableOpacity>

        <View style={{ borderColor: "#ddd", borderWidth: 2 }}></View>
        <View style={{ top: 20 }}>
          <DrawerItem
            label="Home"
            activeTintColor="black"
            activeBackgroundColor="white"
            icon={({ color, size }) => (
              <FontAwesome name="home" size={24} color={color} />
            )}
            onPress={() => props.navigation.navigate("Home")}
          />
          <DrawerItem
            label="Create Legal Docs"
            activeTintColor="black"
            activeBackgroundColor="white"
            icon={({ color, size }) => (
              <FontAwesome name="files-o" size={24} color={color} />
            )}
            onPress={() => props.navigation.navigate("Home")}
          />
          <DrawerItem
            label="Speaker to a Lawyer"
            activeTintColor="black"
            activeBackgroundColor="white"
            icon={({ color, size }) => (
              <FontAwesome name="wechat" size={24} color={color} />
            )}
            onPress={() => props.navigation.navigate("Home")}
          />
          <DrawerItem
            label="Setting"
            activeTintColor="black"
            activeBackgroundColor="white"
            icon={({ color, size }) => (
              <FontAwesome name="gear" size={24} color={color} />
            )}
            onPress={() => props.navigation.navigate("Setting")}
          />
        </View>
      </DrawerContentScrollView>

      <View style={{ padding: 20, borderTopColor: "#ddd", borderTopWidth: 2 }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "center",
            gap: 20,
          }}
          onPress={sign_Out}
        >
          <FontAwesome name="sign-out" size={20} color="#aaa" />
          <Text style={{ fontSize: 18 }}>sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
