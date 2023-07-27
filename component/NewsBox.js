import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const NewsBox = ({ link, title, image, content }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        paddingHorizontal: 15,
        paddingVertical: 10,
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        style={{ flexDirection: "row", gap: 10 }}
        onPress={() => setReadMore(!readMore)}
      >
        <Image
          source={{
            uri:
              image ||
              "https://i.pinimg.com/originals/d9/c6/3f/d9c63f660867c4f80a35c437eea48052.png",
          }}
          style={{ width: 100, height: 100, flex: 1, borderRadius: 10 }}
        />
        <View style={{ flex: 2 }}>
          <Text style={{ color: "#000" }}>{title}</Text>
          <Text style={{ color: "blue" }}>{!readMore && "Read more"}</Text>
        </View>
      </TouchableOpacity>
      {readMore && (
        <Text style={{ paddingTop: 10, color: "#777" }}>{content}</Text>
      )}
    </View>
  );
};

export default NewsBox;
