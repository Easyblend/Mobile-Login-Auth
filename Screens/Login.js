import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

const Login = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  const login = () => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setLoading(false);
        return navigation.navigate("home");
      })
      .catch((err) => {
        alert(err.code);
        setLoading(false);
      });
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{ flex: 1, justifyContent: "center", backgroundColor: "#fff" }}
    >
      <Spinner
        visible={isLoading}
        textContent={"Loading..."}
        textStyle={{ color: "#fff" }}
        overlayColor="rgba(0,0,0,0.93)"
      />
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={{ flex: 1 }}>
          <Image
            source={require("../assets/illustration-1.jpg")}
            style={{
              width: "100%",
              height: "100%",
              alignSelf: "center",
            }}
          />
        </View>
        <View style={{ flex: 1, top: 40 }}>
          <View style={{ alignSelf: "center", padding: 0, margin: 0 }}>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>Login</Text>
          </View>

          <View style={{ paddingHorizontal: 40, gap: 40 }}>
            <View
              style={{
                top: 20,
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
                borderBottomColor: "charcoal",
                borderBottomWidth: 1,
                paddingBottom: 10,
              }}
            >
              <Entypo name="email" size={18} />
              <TextInput
                placeholder="email"
                fontSize={18}
                keyboardType="email-address"
                style={{ width: "90%" }}
                value={email}
                onChangeText={(value) => setEmail(value)}
              />
            </View>
            <View
              style={{
                top: 20,
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
                borderBottomColor: "charcoal",
                borderBottomWidth: 1,
                paddingBottom: 10,
              }}
            >
              <Entypo name="lock" size={18} />
              <TextInput
                placeholder="password"
                secureTextEntry={hidePassword}
                fontSize={18}
                style={{ width: "90%" }}
                value={password}
                onChangeText={(value) => setPassword(value)}
              />
              {hidePassword ? (
                <Entypo
                  name="eye"
                  size={18}
                  style={{ right: 30 }}
                  onPress={() => setHidePassword(!hidePassword)}
                />
              ) : (
                <Entypo
                  name="eye-with-line"
                  size={18}
                  style={{ right: 30 }}
                  onPress={() => setHidePassword(!hidePassword)}
                />
              )}
            </View>
            <TouchableOpacity
              style={{ color: "#00ff", flexDirection: "row" }}
              onPress={() => navigation.navigate("register")}
            >
              <Text>Create a new </Text>
              <Text style={{ color: "#000099" }}>Account</Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center", top: 60 }}>
            <TouchableOpacity
              onPress={login}
              style={{
                backgroundColor: "#000",
                padding: 15,
                paddingHorizontal: 30,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "white" }}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
