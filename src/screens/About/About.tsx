import { View, Text, Dimensions } from "react-native";
import React from "react";
import { Image } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { Colors } from "../../styles/Constants";

const maxWidth = Dimensions.get("window").width;
const About = () => {
  return (
    <View
      style={{
        padding: 15,
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
        gap: 12,
      }}
    >
      <Image
          resizeMode="cover"
          style={{
            height: 100,
            width: 150,
            marginBottom: 35,
          }}
          source={require("../../assets/images/playstore-icon.png")}
        />
      
      <Text
        style={{
          color: Colors.primary,
          fontWeight: "700",
          fontSize: 22,
          padding: 5,
        }}
      >
        DMServices TV
      </Text>
      <Text
        style={{
          textAlign: "center",
          paddingHorizontal: 15,
          color: Colors.primaryText,
        }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus,
        accusantium est. Exercitationem nemo dolor odio recusandae quasi,
        consectetur optio eligendi obcaecati, voluptatum numquam suscipit
        voluptatem libero eum laborum perferendis temporibus. Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Natus, accusantium est.
        Exercitationem nemo dolor odio recusandae quasi, consectetur optio
        eligendi obcaecati, voluptatum numquam suscipit voluptatem libero eum
        laborum perferendis temporibus.
      </Text>
      <Text
        style={{
          color: Colors.primary,
        }}
      >
        Application developpe par DMSERVICES CM
      </Text>
      <TouchableHighlight
        underlayColor={"rgba(0,0,0,0.0)"}
        activeOpacity={0.7}
        style={{
          borderWidth: 0,
          borderRadius: 5,
          backgroundColor: Colors.primaryBackground,
          padding: 15,
          margin: 5,
          width: maxWidth - 40,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "white",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Aller Sur le Site
        </Text>
      </TouchableHighlight>
    </View>
  );
};

export default About;
