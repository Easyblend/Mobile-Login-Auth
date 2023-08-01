import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Book = ({ title, author, imageUrl }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.coverImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
        <Text style={styles.author}>
          Sure, here's an example of a simple book component in React Native.
          This component will display basic information about a book, such as
          its title, author, and cover image.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginVertical: 10,
    backgroundColor: "#009Bdd",
    marginHorizontal: 10,
  },
  coverImage: {
    width: 80,
    height: 120,
    marginRight: 10,
    borderRadius: 4,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  author: {
    fontSize: 14,
    color: "#fff",
  },
});

export default Book;
