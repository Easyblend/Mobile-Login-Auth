import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { ImageBackground } from "react-native";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import NewsBox from "../component/NewsBox";
import { ScrollView } from "react-native";

const LawNews = () => {
  const options = {
    method: "GET",
    url: "https://newsdata2.p.rapidapi.com/news",
    params: {
      language: "en",
      q: "law",
    },
    headers: {
      "X-RapidAPI-Key": "9c11b549dbmshc1de7d2079a5344p1b4042jsn0dfd7e13f437",
      "X-RapidAPI-Host": "newsdata2.p.rapidapi.com",
    },
  };

  const [newState, setNewState] = useState(null);

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch(options.url, options);
    //     const data = await response.json();
    //     setNewState(data.results);
    //   } catch (error) {
    //     alert(error);
    //   }
    // };

    // fetchData();
    setNewState(array1);
  }, []);

  const array1 = [
    {
      category: ["business"],
      content:
        "Printable Reflective Films Market Future Outlook (2023-2029) Trends, Scope, Size, Demand, Competitors Study, by Region, Top Players...",
      country: ["germany"],
      keywords: ["Business, Economy, Finances, Banking & Insurance"],
      language: "english",
      link: "https://www.openpr.com/news/3147154/printable-reflective-films-market-future-outlook-2023-2029",
      pubDate: "2023-07-26 20:14:46",
      title:
        "Printable Reflective Films Market Future Outlook (2023-2029) Trends, Scope, Size, Demand, Competitors Study, by Region, Top Players - Imperx Inc, Matrox Imaging Ltd., ADLINK Technology Inc",
      video_url: null,
    },
    // Additional objects
    {
      category: ["technology"],
      content:
        "New Advancements in Artificial Intelligence: A Comprehensive Overview...",
      country: ["united states"],
      keywords: ["Technology, AI, Artificial Intelligence"],
      language: "english",
      link: "https://www.example.com/ai-advancements",
      pubDate: "2023-07-26 15:30:00",
      title:
        "New Advancements in Artificial Intelligence: A Comprehensive Overview",
      video_url: null,
    },
    {
      category: ["entertainment"],
      content: "Upcoming Movie Releases: Blockbusters to Watch Out For...",
      country: ["united kingdom"],
      keywords: ["Entertainment, Movies, Upcoming Releases"],
      language: "english",
      link: "https://www.example.com/upcoming-movies",
      pubDate: "2023-07-26 12:00:00",
      title: "Upcoming Movie Releases: Blockbusters to Watch Out For",
      video_url: null,
    },
    {
      category: ["health"],
      content:
        "Tips for a Healthy Lifestyle: Diet and Exercise Recommendations...",
      country: ["canada"],
      keywords: ["Health, Wellness, Diet, Exercise"],
      language: "english",
      link: "https://www.example.com/healthy-lifestyle-tips",
      pubDate: "2023-07-26 09:45:00",
      title: "Tips for a Healthy Lifestyle: Diet and Exercise Recommendations",
      video_url: null,
    },
    // Add more objects as needed...
  ];

  console.log(array1[2].title);

  return (
    <SafeAreaView>
      <TouchableOpacity
        style={{ top: 40, padding: 20, position: "absolute", zIndex: 2 }}
        onPress={() => navigation.openDrawer()}
      >
        <FontAwesome name="navicon" size={30} color="black" />
      </TouchableOpacity>
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
        <ScrollView style={{}}>
          {array1.map(({ title, link, image }) => {
            return <NewsBox tile={title} link={link} image={image} />;
          })}
        </ScrollView>
      ) : (
        <View
          style={{
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "black", fontSize: 30 }}>An Error occured</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default LawNews;
