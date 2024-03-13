import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ModalComponent = () => {
  const colorScheme = useColorScheme();
  return (
    <View>
      <Link href="/modal" asChild>
        <Pressable>
          {({ pressed }) => (
            <Image
              source={require("@/assets/images/profile.jpg")}
              style={{
                width: wp("8%"),
                height: wp("8%"),
                borderRadius: wp("5%"), // half of width and height to make it fully rounded
                borderWidth: 2, // width of the border
                borderColor: "white", // color of the border
              }}
            />
          )}
        </Pressable>
      </Link>
    </View>
  );
};

export default ModalComponent;
