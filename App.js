import React, { useState } from "react";

import Login from "./Screens/Login";
import Welcome from "./Screens/Welcome";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./Screens/register";
import Home from "./Screens/Home";

const MyTextInput = () => {
  const Stack = createNativeStackNavigator();

  const [text, setText] = useState("");

  const handleTextChange = (inputText) => {
    setText(inputText);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyTextInput;
