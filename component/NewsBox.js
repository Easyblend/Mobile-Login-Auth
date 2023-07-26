import React from "react";
import { Text, View, Image } from "react-native";

const NewsBox = ({ link, title, image }) => {
  return (
    <View style={{}}>
      <Text>{title}Upcoming Movie Releases: Blockbusters to Watch Out For</Text>
      <Image
        source={{
          uri: `{${
            image ||
            "https://wilmotandbennett.net/wp-content/uploads/2023/01/Legal-news-in-brief.jpg"
          }}`,
        }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

export default NewsBox;
