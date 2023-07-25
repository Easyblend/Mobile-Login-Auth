import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Switch,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SettingPage = ({ navigation }) => {
  const [notification, setNotification] = useState(true);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNotificationToggle = () => {
    setNotification((prevState) => !prevState);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text);
  };

  const handleSave = () => {
    // Handle save settings here, e.g., save data to a backend server or local storage
    // For demonstration purposes, we'll just log the data
    console.log("Notification:", notification);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNumber);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ top: 40, padding: 20, position: "absolute", zIndex: 1 }}
        onPress={() => navigation.openDrawer()}
      >
        <FontAwesome name="navicon" size={30} color="black" />
      </TouchableOpacity>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Settings</Text>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Enable Notifications</Text>
          <Switch
            value={notification}
            onValueChange={handleNotificationToggle}
          />
        </View>

        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Email</Text>
          <TextInput
            value={email}
            onChangeText={handleEmailChange}
            style={styles.input}
            placeholder="Enter your email"
          />
        </View>

        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Phone Number</Text>
          <TextInput
            value={phoneNumber}
            onChangeText={handlePhoneNumberChange}
            style={styles.input}
            placeholder="Enter your phone number"
          />
        </View>

        <Button title="Save Settings" onPress={handleSave} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  formContainer: {
    backgroundColor: "#f0f0f0",
    padding: 20,
    borderRadius: 8,
    top: 70,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  settingLabel: {
    fontSize: 16,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
  },
});

export default SettingPage;
