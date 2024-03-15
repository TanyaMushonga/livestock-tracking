import { View, Text, Image } from "react-native";
import React from "react";
const cattle = require("@/assets/images/cattle1.png");
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const CattleOutofBounds = () => {
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
          source={cattle}
          style={{ width: wp("10%"), height: wp("10%") }}
        />
      </View>
      <View>
        <Text
          style={{ color: "#fff", fontWeight: "bold", fontSize: wp("4.5%") }}
        >
          Cattle has escaped the boundery
        </Text>
        <Text style={{ color: "#fff" }}>Cattle ID: 12345</Text>

        <Text style={{ color: "#fff" }}>3 mins ago</Text>
      </View>
    </View>
  );
};

export default CattleOutofBounds;
