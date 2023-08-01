import React from "react";
import { Image, Text, View, SafeAreaView, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Book from "../component/AgreementForms/BookLayout";

const Library = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      <View style={{ height: 400 }}>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={{
            uri: "https://img.freepik.com/free-vector/book-lover-concept-illustration_114360-1067.jpg?w=740&t=st=1690889454~exp=1690890054~hmac=53214e02075ca7ef04b48aa33944d87d632e70a464383bfb7c4b3f2bf442e342",
          }}
        />
      </View>
      <View stle={{ flex: 2, backgroundColor: "#fff" }}>
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Upload a book</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={{ marginVertical: 10 }}>
          <View style={styles.buttonContainer2}>
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
              Browse Collections
            </Text>
          </View>
        </TouchableOpacity>

        {/* <View style={{}}>
          <Book
            title="Emmanuel"
            author="Kumah"
            imageUrl="https://img.freepik.com/free-vector/book-lover-concept-illustration_114360-1067.jpg?w=740&t=st=1690889454~exp=1690890054~hmac=53214e02075ca7ef04b48aa33944d87d632e70a464383bfb7c4b3f2bf442e342"
          />
          <Book
            title="Emmanuel"
            author="Kumah"
            imageUrl="https://img.freepik.com/free-vector/book-lover-concept-illustration_114360-1067.jpg?w=740&t=st=1690889454~exp=1690890054~hmac=53214e02075ca7ef04b48aa33944d87d632e70a464383bfb7c4b3f2bf442e342"
          />
        </View> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#ff1f44",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    marginHorizontal: 20,
  },
  buttonContainer2: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    marginHorizontal: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Library;
