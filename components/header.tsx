import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import ModalComponent from "./modal";

const Headers = () => {
  return (
    <View
      style={{
        backgroundColor: "green",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: wp("3%"),
      }}
    >
      <Text
        style={{ textAlign: "center", fontSize: wp("6%"), fontWeight: "bold" }}
      >
        Livestock Tracker
      </Text>
      <ModalComponent />
    </View>
  );
};

export default Headers;
