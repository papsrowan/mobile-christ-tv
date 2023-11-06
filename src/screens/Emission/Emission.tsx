import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Touchable,
  TouchableHighlight,
} from "react-native";
import React, { useRef, useState } from "react";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import WebView, { WebViewMessageEvent } from "react-native-webview";
import { ScrollView } from "react-native";
import Video from "react-native-video";
import { playlist1 } from "./data";
import VideoRaw from "../../components/VideoRaw";
import LinearGradient from "react-native-linear-gradient";
import { Colors } from "../../styles/Constants";

type Props = {
  route: RouteProp<ParamListBase>;
  navigation: DrawerNavigationProp<ParamListBase, string, undefined>;
};
const maxWidth = Dimensions.get("window").width;
const maxHeight = Dimensions.get("window").height;
const Emission = ({ route, navigation }: Props) => {
  const [videoIdx, setVideoIdx] = useState(0);
  // @ts-ignore
  const { playlistIdx } = route.params;
  const videoRef = useRef<Video>(null);
  return (
    <LinearGradient
      colors={[Colors.primaryBackground, "#000"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      <Video
        onEnd={() => {
          setVideoIdx((prev) => {
            return prev === playlist1.length - 1 ? 0 : prev + 1;
          });
        }}
        ref={videoRef}
        source={{
          uri: playlist1[videoIdx].videoUrl,
        }}
        controls
        // source={{ uri: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" }} // the video file
        paused={false}
        style={{
          width: maxWidth - 20,
          marginTop: 25,
          marginBottom: 25,
          borderRadius: 10,
          alignSelf: "center",
          marginHorizontal: 10,
          height: 250,
        }}
        resizeMode="cover"
      />

      <ScrollView style={styles.container}>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 2,

            width: maxWidth - 10,
            alignSelf: "center",
          }}
        >
          {playlist1.map((item, idx) => {
            return (
              <TouchableHighlight
                key={idx}
                underlayColor="rgba(0,0,0,0)"
                onPress={(e) => {
                  setVideoIdx(idx);
                }}
              >
                <View style={{ position: "relative" }}>
                  {idx === videoIdx && (
                    <View
                      style={{
                        position: "absolute",
                        backgroundColor: "rgba(255,255,255,0.4)",
                        width: "100%",
                        height: "100%",
                        borderRadius: 8,
                      }}
                    />
                  )}
                  <VideoRaw key={idx} {...item} />
                </View>
              </TouchableHighlight>
            );
          })}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundImage: "linear-gradient(180deg, #FFFFFF 0%, #F2F2F2 100%)",
  },
});

export default Emission;
