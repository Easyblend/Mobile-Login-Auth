import React from "react";
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity, View, Text, TextInput, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const ClientForms = ({
  email,
  setEmail,
  password,
  setPassword,
  name,
  setName,
  isLawyer,
  setLawyer,
  registerUser,
  hidePassword,
  setHidePassword,
}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 2,
        justifyContent: "flex-start",
        paddingVertical: 20,
      }}
    >
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
            borderBottomColor: "#ccc",
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
            borderBottomColor: "#ccc",
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
            borderBottomColor: "#ccc",
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

      <View style={{ alignItems: "center", top: 40 }}>
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
        <Text style={{ fontSize: 24, color: "#aaa", marginVertical: 20 }}>
          OR
        </Text>
        <TouchableOpacity
          onPress={() => setLawyer(!isLawyer)}
          style={{
            paddingVertical: 5,
            paddingHorizontal: 15,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            backgroundColor: "lightorange",
            borderColor: "#eee",
            borderWidth: 2,
            borderRadius: 5,
          }}
        >
          <Image
            style={{ width: 30, height: 30 }}
            source={{
              uri: "https://icons.veryicon.com/png/o/miscellaneous/color-icon-library/lawyer-7.png",
            }}
          />
          <Text>Sign up as a Lawyer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
