import { View, Text, Image } from "react-native";
import React from "react";
const cow = require("./../assets/images/cow.jpg");
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const TagId = () => {
  return (
    <View>
      <View style={{ marginVertical: wp("2%") }}>
        <Text>Tag ID: 12381, Breed: Braman, cow</Text>
      </View>
      <View
        style={{
          borderColor: "green",
          flexDirection: "row",
          gap: wp("3%"),
          padding: wp("3%"),
          borderWidth: 1,
          borderRadius: wp("1%"),
        }}
      >
        <View
          style={{
            padding: wp("4%"),
            backgroundColor: "#9dcca8",
            width: wp("45"),
            height: wp("25"),
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: wp("1%"),
          }}
        >
          <Text style={{ fontWeight: "400", fontSize: wp("3%") }}>
            Body weight
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: wp("4%") }}>500kg</Text>
        </View>
        <View
          style={{
            padding: wp("4%"),
            backgroundColor: "#9dcca8",
            width: wp("45"),
            height: wp("25"),
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: wp("1%"),
          }}
        >
          <Text style={{ fontWeight: "400", fontSize: wp("3%") }}>
            Temperature
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: wp("4%") }}>37 C</Text>
        </View>
      </View>
    </View>
  );
};

export default TagId;
