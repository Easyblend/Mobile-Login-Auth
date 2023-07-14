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
const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={{ flex: 1 }}>
          <Image
            source={{
              uri: "https://www.pngmart.com/files/22/Illustration-Art-PNG-HD.png",
            }}
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
          </View>
          <View style={{ alignItems: "center", top: 60 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "purple",
                padding: 15,
                paddingHorizontal: 30,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "white" }}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
