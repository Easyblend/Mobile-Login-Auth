import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { Image, StyleSheet } from "react-native";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import userHook from "../Utils/userHook";
import { auth } from "../config/firebaseConfig";

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
  // useEffect(() => {
  //   // Check if there is no user data and navigate to login screen
  //   if (!data) {
  //     props.navigation.navigate("login");
  //   }
  // }, [data, props.navigation]);

  const isItemActive = (routeName) => {
    const currentRouteName = props.state.routes[props.state.index].name;
    return routeName === currentRouteName;
  };

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
                borderRadius: 1444,
              }}
            />
            <Text style={{ fontSize: 20 }}>{data?.displayName}</Text>
          </View>

          <View style={{ paddingVertical: 10 }}>
            <Text style={{}}>Client Account</Text>
          </View>
        </TouchableOpacity>

        <View style={{ borderColor: "#ddd", borderWidth: 1 }}></View>
        <View style={{ top: 20, gap: 15 }}>
          <DrawerItem
            label="Home"
            icon={() => (
              <FontAwesome
                name="home"
                size={27}
                style={{ marginRight: -10 }}
                color="#444"
              />
            )}
            onPress={() => props.navigation.navigate("Home")}
            labelStyle={
              isItemActive("Home") ? styles.activeLabel : styles.inactiveLabel
            }
            style={
              isItemActive("Home") ? styles.activeItem : styles.inactiveItem
            }
          />
          <DrawerItem
            label="Create Legal Docs"
            icon={() => (
              <FontAwesome
                name="files-o"
                size={27}
                color="#444"
                style={{ marginRight: -10 }}
              />
            )}
            onPress={() => props.navigation.navigate("CreateDoc")}
            labelStyle={
              isItemActive("CreateDoc")
                ? styles.activeLabel
                : styles.inactiveLabel
            }
            style={
              isItemActive("CreateDoc")
                ? styles.activeItem
                : styles.inactiveItem
            }
          />
          <DrawerItem
            label="Speaker to a Lawyer"
            icon={() => (
              <FontAwesome
                name="wechat"
                size={27}
                style={{ marginRight: -10 }}
                color="#444"
              />
            )}
            onPress={() => props.navigation.navigate("SpeakToLawyer")}
            labelStyle={
              isItemActive("SpeakToLawyer")
                ? styles.activeLabel
                : styles.inactiveLabel
            }
            style={
              isItemActive("SpeakToLawyer")
                ? styles.activeItem
                : styles.inactiveItem
            }
          />
          <DrawerItem
            label="Library"
            icon={() => (
              <FontAwesome
                name="book"
                size={27}
                style={{ marginRight: -10 }}
                color="#444"
              />
            )}
            onPress={() => props.navigation.navigate("library")}
            labelStyle={
              isItemActive("library")
                ? styles.activeLabel
                : styles.inactiveLabel
            }
            style={
              isItemActive("library") ? styles.activeItem : styles.inactiveItem
            }
          />
          <DrawerItem
            label="Law News"
            icon={() => (
              <FontAwesome
                name="newspaper-o"
                size={27}
                style={{ marginRight: -10 }}
                color="#444"
              />
            )}
            onPress={() => props.navigation.navigate("lawNews")}
            labelStyle={
              isItemActive("lawNews")
                ? styles.activeLabel
                : styles.inactiveLabel
            }
            style={
              isItemActive("lawNews") ? styles.activeItem : styles.inactiveItem
            }
          />
          <DrawerItem
            label="Settings"
            icon={() => (
              <FontAwesome
                name="gear"
                size={27}
                style={{ marginRight: -10 }}
                color="#444"
              />
            )}
            onPress={() => props.navigation.navigate("Setting")}
            labelStyle={
              isItemActive("Setting")
                ? styles.activeLabel
                : styles.inactiveLabel
            }
            style={
              isItemActive("Setting") ? styles.activeItem : styles.inactiveItem
            }
          />
        </View>
      </DrawerContentScrollView>

      <View style={{ padding: 30, borderTopColor: "#ddd", borderTopWidth: 2 }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "center",
            gap: 10,
          }}
          onPress={sign_Out}
        >
          <FontAwesome name="sign-out" size={24} color="#c62828" />
          <Text style={{ fontSize: 20, color: "#c62828" }}>sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  activeItem: {
    backgroundColor: "#00b4fc",
  },
  inactiveItem: {
    backgroundColor: "transparent",
  },
  activeLabel: {
    color: "#fff",
  },
  inactiveLabel: {
    color: "#444",
  },
});

export default CustomDrawer;
