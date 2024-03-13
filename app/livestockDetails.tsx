import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import CattleDetailsHeader from "@/components/cattleDetailsHeader";
import TagId from "@/components/tagId";
const healthy = require("./../assets/images/healthy.png");
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const index = () => {
  return (
    <ScrollView>
      <View>
        <View style={{ padding: wp("3%") }}>
          <TagId />
        </View>
        <View
          style={{
            backgroundColor: "#79d18e",
            padding: wp("2%"),
            flexDirection: "row",
            gap: wp("4%"),
          }}
        >
          <View
            style={{
              backgroundColor: "green",
              width: wp("12%"),
              height: wp("12%"),
              alignItems: "center",
              justifyContent: "center",
              borderRadius: wp("1%"),
            }}
          >
            <Image
              source={healthy}
              style={{ width: wp("10%"), height: wp("10%"), margin: wp("1%") }}
            />
          </View>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: wp("4%") }}>
              Cattle is healthy
            </Text>
            <Text style={{ fontSize: wp("3%") }}>Vaccinated</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default index;
