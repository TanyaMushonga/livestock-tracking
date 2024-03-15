import { View, Text, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const batteryLow = require("@/assets/images/batterylow.png");

const BatteryLow = () => {
  return (
    <View
      style={{
        padding: wp("2%"),
        backgroundColor: "#2e8f3c",
        flexDirection: "row",
        gap: wp("3%"),
        borderRadius: wp("1%"),
      }}
    >
      <View
        style={{
          padding: wp("3%"),
          backgroundColor: "#3c9e4b",
          borderRadius: wp("1%"),
        }}
      >
        <Image
          source={batteryLow}
          style={{ width: wp("10%"), height: wp("10%") }}
        />
      </View>
      <View>
        <Text
          style={{ color: "#fff", fontWeight: "bold", fontSize: wp("4.5%") }}
        >
          Battery is low please replace it
        </Text>
        <Text style={{ color: "#fff" }}>Cattle ID: 12345</Text>

        <Text style={{ color: "#fff" }}>3 mins ago</Text>
      </View>
    </View>
  );
};

export default BatteryLow;
