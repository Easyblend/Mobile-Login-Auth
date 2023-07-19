import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
} from "react-native";
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import Spinner from "react-native-loading-spinner-overlay";

const Register = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setLoading] = useState(false);

  const registerUser = async () => {
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL:
          auth.currentUser.photoURL ||
          "https://previews.123rf.com/images/djvstock/djvstock1709/djvstock170910745/86471694-lawyer-icon-over-white-background-colorful-design-vector-illustration.jpg",
      });
      setLoading(false);
      return navigation.navigate("home");
    } catch (error) {
      setLoading(false);
      alert(error.code);
      console.log(error);
    }
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
            source={{
              uri: "https://img.freepik.com/free-vector/remote-meeting-concept-illustration_114360-4704.jpg",
            }}
            style={{
              width: "100%",
              height: "100%",
              alignSelf: "center",
            }}
          />
        </View>
        <View style={{ flex: 1, top: 20 }}>
          <View style={{ alignSelf: "center", padding: 0, margin: 0 }}>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>Sign up</Text>
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
              <FontAwesome name="user" size={18} color="black" />
              <TextInput
                placeholder="full name..."
                fontSize={18}
                style={{ width: "90%" }}
                value={name}
                onChangeText={(value) => setName(value)}
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
              style={{ color: "#00ff", flexDirection: "row", gap: 5 }}
              onPress={() => navigation.navigate("login")}
            >
              <Text>Already have an account</Text>
              <Text style={{ color: "#000099" }}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: "center", top: 60 }}>
            <TouchableOpacity
              onPress={registerUser}
              style={{
                backgroundColor: "#000",
                padding: 15,
                paddingHorizontal: 30,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "white" }}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;
