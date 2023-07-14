import React from "react";
import { TouchableOpacity } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";

const Task = ({ task }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.icon} source={require("./assets/favicon.png")} />
      </View>
      <View>
        <Text>{task}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "lightblue",
    width: "90%",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    top: 20,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 20,
  },
});

export default Task;
