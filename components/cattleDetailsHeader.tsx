import { View, Text, StatusBar } from "react-native";
import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const CattleDetailsHeader = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="green" barStyle="light-content" />
      <Link href={"/"} style={{ marginRight: wp("25%") }}>
        {" "}
        <Ionicons name="arrow-back" size={24} color="black" />
      </Link>

      <Text style={styles.title}>Cattle Details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "green",
    paddingHorizontal: wp("3%"),
    paddingTop: wp("3%"),
    paddingVertical: wp("3%"),
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CattleDetailsHeader;
