import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Link } from "expo-router";

type CattleDetailsProps = {
  id: string;
  status: string;

  lastUpdated: string;
};

const CattleDetails = (props: CattleDetailsProps) => {
  return (
    <Link href={"/"} asChild>
      <TouchableOpacity style={{ padding: wp("3%"), backgroundColor: "green" }}>
        <View style={{ flexDirection: "column", gap: wp("1%") }}>
          <Text style={{ fontWeight: "bold" }}>{props.id}</Text>

          <Text>
            Status:
            <Text
              style={{
                color: props.status === "out of bounds" ? "red" : "blue",
              }}
            >
              {props.status}
            </Text>
          </Text>
          <Text>
            Last updated: <Text>{props.lastUpdated}</Text>
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default CattleDetails;
