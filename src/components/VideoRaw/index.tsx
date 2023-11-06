import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import { VideoRawSchema } from "../../types/VideoRaw";

const maxWidth = Dimensions.get("window").width;
const maxHeight = Dimensions.get("window").height;

const VideoRaw = ({ author, imageUrl, time, title, videoUrl , imageUri }: VideoRawSchema) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={imageUrl} imageStyle={{width : '100%' , borderRadius : 8 , borderColor : "rgba(255,255,255,0.5)", borderWidth : 1}} resizeMode="cover" style={styles.child1}>
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>
            {time[0]} : {time[1]}
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.child2}>
        <Text >{title}</Text>
        <Text>{author}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: "100%",
    display: "flex",
    gap: 15,
    padding : 5,
    alignItems: "flex-start",
    flexDirection : 'row',
  },

  child1: { width: "50%", height: "100%", position: "relative", flex: 1 },
  child2: { height: "100%", position: "relative", flex: 1 },
  timeContainer: {
    backgroundColor: "black",
    borderRadius: 4,
    position: "absolute",
    bottom: 10,
    right: 6,
    padding : 3,
    paddingHorizontal : 5
  },
  timeText: {
    color: "white",
  },
  title : {
    fontWeight : "600",
    color : 'white'
  },
  author : {
    fontWeight : "500",
    color : 'rgba(255,255,255,0.8)'
  }
});

export default VideoRaw;
