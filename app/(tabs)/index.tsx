import {
  StyleSheet,
  ScrollView,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Headers from "@/components/header";
import MapViewComponent from "@/components/mapView";
import { Link } from "expo-router";
import { Text, View } from "@/components/Themed";
import { useColorScheme } from "@/components/useColorScheme";
import { useNavigation } from "@react-navigation/native";

export default function TabOneScreen() {
  const navigation = useNavigation();
  const data = [
    { id: "CT2738", status: "out of bounds", lastUpdated: "2022-01-01" },
    { id: "CT2527", status: "in bounds", lastUpdated: "2022-01-02" },
    { id: "CT2562", status: "out of bounds", lastUpdated: "2022-01-01" },
    { id: "CT7289", status: "in bounds", lastUpdated: "2022-01-02" },
    // ...
  ];

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <StatusBar backgroundColor="green" barStyle="light-content" />

          <View style={{ flex: 1, paddingTop: hp("4%") }}>
            <Headers />
          </View>

          <View
            style={{
              backgroundColor: "#fff",
              height: hp("45.5%"),
              width: "100%",
            }}
          >
            <MapViewComponent />
          </View>

          <View style={{}}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: wp("4%"),
                padding: wp("3%"),
              }}
            >
              Listview
            </Text>
          </View>
        </>
      }
      contentContainerStyle={{ paddingBottom: hp("5%") }}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Link href={"./../livestockDetails"} asChild>
          <TouchableOpacity style={{}}>
            <View
              style={{
                flexDirection: "column",
                gap: wp("1.5%"),
                backgroundColor: "#fff",
                padding: wp("1.5%"),
                marginBottom: wp("1%"),
                borderWidth: 1,
                borderBlockColor: "green",
                borderRadius: wp("2%"),
                marginHorizontal: wp("2%"),
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Cattle ID: {item.id}</Text>

              <Text>
                Status:
                <Text
                  style={{
                    color: item.status === "out of bounds" ? "red" : "blue",
                  }}
                >
                  {item.status}
                </Text>
              </Text>
              <Text>
                Last updated: <Text>{item.lastUpdated}</Text>
              </Text>
            </View>
          </TouchableOpacity>
        </Link>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "auto",
    paddingTop: wp("6.7%"),
  },
  maps: {
    backgroundColor: "#fff",
    height: hp("45.5%"),
    width: "100%",
    borderRadius: wp("5.25%"),
  },
});
