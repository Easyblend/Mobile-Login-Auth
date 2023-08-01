import React, { useEffect, useLayoutEffect, useState } from "react";

import Login from "./Screens/Login";
import Welcome from "./Screens/Welcome";
import { NavigationContainer } from "@react-navigation/native";
import Register from "./Screens/register";
import Home from "./Screens/Home";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CustomDrawer from "./component/CustomDrawer";

import { FontAwesome } from "@expo/vector-icons";
import Setting from "./Screens/Setting";
import CreateDoc from "./Screens/CreateDoc";
import SpeakToLawyer from "./Screens/SpeakToLawyer";
import lawNews from "./Screens/LawNews";
import DocumentForm from "./Screens/DocumentForm";
import Library from "./Screens/Library";

const MyTextInput = () => {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        initialRouteName="welcome"
        screenOptions={{
          drawerActiveBackgroundColor: "#222",
          drawerActiveTintColor: "white",
          drawerInactiveTintColor: "#333",
          headerShown: false,
          drawerType: "front",
        }}
      >
        <Drawer.Screen
          key="welcome"
          name="welcome"
          component={Welcome}
          options={{
            drawerIcon: ({ color }) => (
              <FontAwesome name="sign-in" size={24} color="#aaa" />
            ),
            swipeEnabled: false,
          }}
        />
        <Drawer.Screen
          key="home"
          name="Home"
          component={Home}
          options={{
            drawerIcon: ({ color }) => (
              <FontAwesome name="home" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          key="setting"
          name="Setting"
          component={Setting}
          options={{
            drawerIcon: ({ color }) => (
              <FontAwesome name="gear" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          key="login"
          name="login"
          component={Login}
          options={{
            drawerIcon: ({ color }) => (
              <FontAwesome name="sign-in" size={24} color="#aaa" />
            ),
            swipeEnabled: false,
          }}
        />
        <Drawer.Screen
          key="register"
          name="register"
          component={Register}
          options={{
            drawerIcon: ({ color }) => (
              <FontAwesome name="sign-in" size={24} color="#aaa" />
            ),
            swipeEnabled: false,
          }}
        />

        <Drawer.Screen
          key="CreateDoc"
          name="CreateDoc"
          component={CreateDoc}
          options={{
            drawerIcon: ({ color }) => (
              <FontAwesome name="files-o" size={24} color="#aaa" />
            ),
          }}
        />
        <Drawer.Screen
          key="SpeakToLawyer"
          name="SpeakToLawyer"
          component={SpeakToLawyer}
          options={{
            drawerIcon: ({ color }) => (
              <FontAwesome name="files-o" size={24} color="#aaa" />
            ),
          }}
        />
        <Drawer.Screen
          key="library"
          name="library"
          component={Library}
          options={{
            drawerIcon: ({ color }) => (
              <FontAwesome name="files-o" size={24} color="#aaa" />
            ),
          }}
        />
        <Drawer.Screen
          key="lawNews"
          name="lawNews"
          component={lawNews}
          options={{
            drawerIcon: ({ color }) => (
              <FontAwesome name="files-o" size={24} color="#aaa" />
            ),
          }}
        />
        <Drawer.Screen
          key="documentForm"
          name="documentForm"
          component={DocumentForm}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MyTextInput;
