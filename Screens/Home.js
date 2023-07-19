import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { auth } from "../config/firebaseConfig";

const Home = () => {
  const [name, setName] = useState();
  const [profilePic, setProfilePic] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setName(user.displayName);
        setProfilePic(user.photoURL);
        console.log(user);
      } else {
        return navigation.navigate("login");
      }
    });
  }, []);

  return (
    <SafeAreaView style={{ alignItems: "center" }}>
      <Text style={{ fontSize: 26 }}>Welcome {name}</Text>
    </SafeAreaView>
  );
};

export default Home;
