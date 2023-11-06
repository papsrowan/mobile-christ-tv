import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import React from "react";
import {
  DrawerNavigationOptions,
  DrawerNavigationProp,
  Layout,
} from "@react-navigation/drawer/lib/typescript/src/types";
import { ParamListBase, RouteProp } from "@react-navigation/native";

type Props = {
  layout: Layout;
  options: DrawerNavigationOptions;
  route: RouteProp<ParamListBase>;
  navigation: DrawerNavigationProp<ParamListBase, string, undefined>;
};

import Fa5Icon from "react-native-vector-icons/FontAwesome5";
import AntIcon from "react-native-vector-icons/AntDesign";
import EntIcon from "react-native-vector-icons/Entypo";
import { Colors } from "../../styles/Constants";

const NavBar = ({ layout, navigation, options, route }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        activeOpacity={0.8}
        underlayColor="rgba(0,0,0,0)"
        onPress={() => {
          switch (route.name) {
            case "emissions":
              navigation.goBack();
              break;

            default:
              navigation.toggleDrawer();
              break;
          }
        }}
      >
        {route.name === "emissions" ? (
          <AntIcon name="left" size={25} color="white" />
        ) : (
          <Fa5Icon name="bars" size={25} color="white" />
        )}
      </TouchableHighlight>
      <Text style={styles.title}>CHRIST TV</Text>
      <Fa5Icon name="share-alt" size={25} color="white" />
      {/* <Fa5Icon name="" size={20} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: Colors.primaryBackground,
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    fontWeight: "700",
    fontSize: 18,
    color: "white",
  },
  whiteText: {
    color: "white",
  },
});

export default NavBar;
