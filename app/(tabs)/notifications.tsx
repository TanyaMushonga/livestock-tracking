import {
  View,
  Text,
  StatusBar,
  Image,
  Pressable,
  TouchableOpacity,
  Button,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Link } from "expo-router";
import CattleOutofBounds from "@/components/cattleOutofBounds";
import BatteryLow from "@/components/batteryLow";
import BatchOutofBounds from "@/components/batchOutofBounds";
import { useNavigation } from "@react-navigation/native";

const notifications = () => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const navigation = useNavigation();

  const buttons = ["All", "New", "Battery Low", "Out of Bounds"];
  return (
    <ScrollView style={{ marginBottom: wp("5%") }}>
      <StatusBar backgroundColor="green" barStyle="light-content" />
      <View
        style={{
          backgroundColor: "green",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: wp("8%"),
          padding: wp("3%"),
          paddingHorizontal: wp("7%"),
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: wp("6%"),
            fontWeight: "bold",
          }}
        >
          Notifications
        </Text>
        <View>
          <Link href="/search" asChild>
            <Pressable>
              {({ pressed }) => (
                <Image
                  source={require("@/assets/images/search.png")}
                  style={{
                    width: wp("8%"),
                    height: wp("8%"),
                  }}
                />
              )}
            </Pressable>
          </Link>
        </View>
      </View>

      <View style={{ flexDirection: "row", padding: wp("1%") }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {buttons.map((button, index) => (
            <View
              key={index}
              style={{
                borderRadius: wp("1%"),
                margin: wp("1%"),
              }}
            >
              <TouchableOpacity
                style={{
                  borderRadius: wp("1%"),
                  margin: wp("1%"),
                  backgroundColor:
                    selectedButton === button ? "green" : "#90ee90",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: selectedButton === button ? wp("0.5") : wp("1%"),
                }}
                onPress={() => setSelectedButton(button)}
              >
                <Text>{button}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>

      <View
        style={{
          paddingTop: wp("2%"),
          paddingHorizontal: wp("2%"),
          flexDirection: "column",
          gap: hp("1%"),
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("navigation")}>
          <CattleOutofBounds />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("navigation")}>
          <BatteryLow />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("navigation")}>
          <BatchOutofBounds />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default notifications;
