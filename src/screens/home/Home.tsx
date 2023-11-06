import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  GestureResponderEvent,
} from "react-native";
import React, { useRef, useState } from "react";
import { TouchableHighlight } from "react-native";
import Video from "react-native-video";
import { Dimensions } from "react-native";
import Fa5Icon from "react-native-vector-icons/FontAwesome5";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { ParamListBase } from "@react-navigation/native";
import { Colors } from "../../styles/Constants";
import WebView from "react-native-webview";
const emissions = [
  {
    text: "CULTE",
    playlistIdx: 0,
  },
  {
    text: "PREDICATION",
    playlistIdx: 0,
  },
  {
    text: "ENSEIGNEMENT",
    playlistIdx: 0,
  },
  {
    text: "MUSIQUE",
    playlistIdx: 0,
  },
];

const programmes = [
  {
    img: "https://www.journaldemickey.com/wp-content/uploads/2023/01/donjons-et-dragons-819x1024.jpg",
    text1: "Samedi & Dimanche",
    text2: "DE 16H00 A 17H30",
  },
  {
    img: "https://www.journaldemickey.com/wp-content/uploads/2023/01/donjons-et-dragons-819x1024.jpg",
    text1: "Samedi & Dimanche",
    text2: "DE 16H00 A 17H30",
  },
  {
    img: "https://www.journaldemickey.com/wp-content/uploads/2023/01/donjons-et-dragons-819x1024.jpg",
    text1: "Samedi & Dimanche",
    text2: "DE 16H00 A 17H30",
  },
  {
    img: "https://www.journaldemickey.com/wp-content/uploads/2023/01/donjons-et-dragons-819x1024.jpg",
    text1: "Samedi & Dimanche",
    text2: "DE 16H00 A 17H30",
  },
  {
    img: "https://www.journaldemickey.com/wp-content/uploads/2023/01/donjons-et-dragons-819x1024.jpg",
    text1: "Samedi & Dimanche",
    text2: "DE 16H00 A 17H30",
  },
  {
    img: "https://www.journaldemickey.com/wp-content/uploads/2023/01/donjons-et-dragons-819x1024.jpg",
    text1: "Samedi & Dimanche",
    text2: "DE 16H00 A 17H30",
  },
  {
    img: "https://www.journaldemickey.com/wp-content/uploads/2023/01/donjons-et-dragons-819x1024.jpg",
    text1: "Samedi & Dimanche",
    text2: "DE 16H00 A 17H30",
  },
];

const bouquets = [
  {
    img: "https://i0.wp.com/tech-ish.com/wp-content/uploads/2015/07/Startimes-Logo.png",
  },
  {
    img: "https://i0.wp.com/tech-ish.com/wp-content/uploads/2015/07/Startimes-Logo.png",
  },
  {
    img: "https://i0.wp.com/tech-ish.com/wp-content/uploads/2015/07/Startimes-Logo.png",
  },
  {
    img: "https://i0.wp.com/tech-ish.com/wp-content/uploads/2015/07/Startimes-Logo.png",
  },
];

const maxWidth = Dimensions.get("screen").width - 20;

type Props = {
  navigation: DrawerNavigationProp<ParamListBase, string, undefined>;
};
const videoLinks = [
  "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8",
  "http://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8",
  "http://playertest.longtailvideo.com/adaptive/wowzaid3/playlist.m3u8",
];
const Home = ({ navigation }: Props) => {
  const videoRef = useRef<Video>(null);
  const [videoIdx, setVideoIdx] = useState(0);
  const handleCategoriePress = (
    e: GestureResponderEvent,
    element: (typeof emissions)[0]
  ) => {
    navigation.navigate("emissions", {
      playlistIdx: element.playlistIdx,
    });
  };

  return (
    <ScrollView>
      <View>
        <Video
          onEnd={() => {
            setVideoIdx((prev) => {
              return prev === videoLinks.length - 1 ? 0 : prev + 1;
            });
          }}
          ref={videoRef}
          // source={{
          //   uri: videoLinks[videoIdx],
          // }} 
          // source={{ uri: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" }} // the video file
          source={require("../../assets/videos/vid1.mp4")} // the video file
          paused={false}
          // controls
          // on
          style={{
            width: maxWidth,
            marginHorizontal: 10,
            height: 250,
          }}
          resizeMode="cover"
          repeat={true}
        />
        
        <TouchableHighlight
          underlayColor={"rgba(0,0,0,0)"}
          activeOpacity={0.9}
          onPress={(e) => {
            // videoRef.current?.forceUpdate()
          }}
        >
          <View
            style={{
              backgroundColor: Colors.primaryBackground,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: 15,
              padding: 10,
            }}
          >
            <Fa5Icon name="redo-alt" color="white" size={18} />
            <Text style={{ ...Section1Styles.whiteText }}>
              Rafraichir la Tv
            </Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={Section1Styles.section1}>
        <Text style={{ ...Section1Styles.textUpperCase, paddingHorizontal: 8 }}>
          Nos Emissions
        </Text>
        <ScrollView horizontal style={Section1Styles.emissionsContainer}>
          {emissions.map((e, i) => {
            return (
              <TouchableHighlight
                key={i}
                style={Section1Styles.emissionCards}
                underlayColor={"rgba(0,0,0,0.2)"}
                activeOpacity={0.2}
                onPress={(event) => handleCategoriePress(event, e)}
              >
                <Text style={{ ...Section1Styles.whiteText }}>{e.text}</Text>
              </TouchableHighlight>
            );
          })}
        </ScrollView>
      </View>
      {/* section 2 */}
      <View style={Section1Styles.section1}>
        <Text style={{ ...Section1Styles.textUpperCase, paddingHorizontal: 8 }}>
          La grille de nos programmes
        </Text>
        <ScrollView horizontal style={Section1Styles.emissionsContainer}>
          {programmes.map((e, i) => {
            return (
              <TouchableHighlight
                key={i}
                style={Section2Styles.cards}
                underlayColor={"rgba(0,0,0,0.2)"}
                activeOpacity={0.2}
              >
                <View style={Section2Styles.cardView}>
                  <Image
                    source={{ uri: e.img }}
                    resizeMode="cover"
                    style={Section2Styles.image}
                  />
                  <Text style={{ ...Section2Styles.text1 }}>{e.text1}</Text>
                  <Text style={{ ...Section2Styles.text2 }}>{e.text2}</Text>
                </View>
              </TouchableHighlight>
            );
          })}
        </ScrollView>
      </View>
      {/* section 3 */}
      <View style={Section1Styles.section1}>
        <Text style={{ ...Section1Styles.textUpperCase, paddingHorizontal: 8 }}>
          Retrouvez Nous Sur les bouquets
        </Text>
        <ScrollView horizontal style={Section1Styles.emissionsContainer}>
          {bouquets.map((e, i) => {
            return (
              <TouchableHighlight
                key={i}
                style={Section2Styles.cards}
                underlayColor={"rgba(0,0,0,0.2)"}
                activeOpacity={0.2}
              >
                <View style={Section3Styles.cards}>
                  <Image
                    source={{ uri: e.img }}
                    resizeMode="cover"
                    style={Section2Styles.image}
                  />
                </View>
              </TouchableHighlight>
            );
          })}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const Section3Styles = StyleSheet.create({
  cards: {
    borderRadius: 8,
    backgroundColor: Colors.secondary, //"rgb(220,220,220)",
    marginRight: 10,
    marginTop: 8,
    padding: 6,
  },
});

const Section2Styles = StyleSheet.create({
  cardView: {
    marginTop: 8,
  },
  image: {
    height: 130,
    width: 130,
    borderRadius: 6,
  },
  text1: {
    fontWeight: "400",
    fontSize: 13,
    textAlign: "center",
    marginVertical: 5,
    color: Colors.primaryText,
  },
  text2: {
    fontWeight: "700",
    fontSize: 13,
    textAlign: "center",
    color: Colors.primaryText,
  },
  cards: {
    marginRight: 15,
  },
});

const Section1Styles = StyleSheet.create({
  section1: {
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  emissionCards: {
    backgroundColor: Colors.secondary, //"rgb(150,185,75)",
    borderRadius: 5,
    borderWidth: 0,
    padding: 6,
    marginRight: 10,
  },
  whiteText: {
    color: "white",
  },
  textUpperCase: {
    color: Colors.primaryText,
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: 19,
  },
  emissionsContainer: {
    display: "flex",
    gap: 20,
    flexDirection: "row",
    padding: 8,
  },
});

export default Home;
