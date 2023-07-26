import React, { useState } from "react";
import { Image, KeyboardAvoidingView, View } from "react-native";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import Spinner from "react-native-loading-spinner-overlay";
import { LawyerForms } from "../component/LawyerForms";
import { ClientForms } from "../component/ClientForms";
import * as DocumentPicker from "expo-document-picker";
import { useNavigation } from "@react-navigation/native";

// import { GoogleSignin } from "@react-native-google-signin/google-signin";

const Register = () => {
  const navigation = useNavigation();
  const [hidePassword, setHidePassword] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setLoading] = useState(false);

  const [isLawyer, setLawyer] = useState(false);

  const [fileUri, setFileUri] = useState(null);

  // const data = GoogleSignin.configure();

  // const gmaiLogin = async () => {
  //   setLoading(true);
  //   console.log(data);
  //   console.log(resp);
  // };

  const signUPlawyer = async () => {
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
      return navigation.navigate("Home");
    } catch (error) {
      setLoading(false);
      alert(error.code);
      console.log(error);
    }
  };

  //Pick file
  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*", // Set the MIME type or specific file types you want to allow (e.g., 'image/*', 'application/pdf', etc.)
        copyToCacheDirectory: false, // Set to true if you want to copy the file to the app's cache directory
      });

      console.log(result);
      if (result.type === "success") {
        setFileUri(result.name);
      } else {
        console.log("User cancelled the document picker.");
      }
    } catch (error) {
      console.log("Error while picking the document:", error);
    }
  };

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
      return navigation.navigate("Home");
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
        textContent={"signing you in"}
        textStyle={{ color: "#fff" }}
        overlayColor="rgba(0,0,0,0.93)"
      />
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={{ flex: 1 }}>
          <Image
            source={require("../assets/illustration-2.jpg")}
            style={{
              width: "100%",
              height: "100%",
              alignSelf: "center",
            }}
          />
        </View>
        {isLawyer ? (
          <LawyerForms
            name={name}
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            registerUser={registerUser}
            setName={setName}
            setLawyer={setLawyer}
            isLawyer={isLawyer}
            hidePassword={hidePassword}
            setHidePassword={setHidePassword}
            pickDocument={pickDocument}
            fileUri={fileUri}
          />
        ) : (
          <ClientForms
            name={name}
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            registerUser={registerUser}
            setName={setName}
            setLawyer={setLawyer}
            isLawyer={isLawyer}
            hidePassword={hidePassword}
            setHidePassword={setHidePassword}
          />
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;
