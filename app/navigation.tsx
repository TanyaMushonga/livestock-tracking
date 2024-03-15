import { View, Text } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MapViewComponent from "@/components/mapView";

const Navigation = () => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        height: hp("100%"),
        width: "100%",
      }}
    >
      <MapViewComponent />
    </View>
  );
};

export default Navigation;
