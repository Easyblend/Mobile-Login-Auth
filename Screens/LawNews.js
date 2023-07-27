import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { ImageBackground } from "react-native";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import NewsBox from "../component/NewsBox";
import { ScrollView, RefreshControl } from "react-native";
import qs from "qs";

const LawNews = ({ navigation }) => {
  const query = [
    "law",
    "legal",
    "lawyer",
    "court",
    "arrest",
    "constitution",
    "regulation",
    "federal",
    "Domestic",
    "rape",
    "ghana",
    "africa",
    "Accra",
    "nigeria",
    "south africa",
  ];

  const baseURL = "https://newsdata2.p.rapidapi.com/news";
  const queryParams = {
    language: "en",
    q: query[Math.floor(Math.random() * query.length)],
  };
  const queryString = qs.stringify(queryParams);
  const url = `${baseURL}?${queryString}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9c11b549dbmshc1de7d2079a5344p1b4042jsn0dfd7e13f437",
      "X-RapidAPI-Host": "newsdata2.p.rapidapi.com",
    },
  };

  const [newState, setNewState] = useState(null);

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setNewState(data.results);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setNewState(data.results);
        setRefreshing(false);
      })
      .catch((error) => {
        alert(error);
        setRefreshing(false);
      });
  });

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <ScrollView
        style={{ paddingBottom: 40 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <ImageBackground
          source={{
            uri: "https://wilmotandbennett.net/wp-content/uploads/2023/01/Legal-news-in-brief.jpg",
          }}
          style={{
            width: "100%",
            height: 240,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.6)", // Darken the background color
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 30, color: "white", fontWeight: "700" }}>
              Latest Law News
            </Text>
          </View>
        </ImageBackground>
        {newState ? (
          <View style={{ height: "100%" }}>
            {newState.map(
              ({ title, link, image_url, content, pubDate }, key) => {
                return (
                  <NewsBox
                    key={key}
                    title={title}
                    link={link}
                    image={image_url}
                    content={content}
                    pubDate={pubDate}
                  />
                );
              }
            )}
          </View>
        ) : (
          <View
            style={{
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "black", fontSize: 30 }}>
              An Error occured
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default LawNews;
