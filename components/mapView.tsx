import React from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { StyleSheet, Platform, Linking, Text, Image } from "react-native";

const MapViewComponent = () => {
  const handleGetDirections = (latitude: number, longitude: number) => {
    const url = Platform.select({
      ios: `maps://app?saddr=&daddr=${latitude},${longitude}`,
      android: `geo:0,0?q=${latitude},${longitude}`,
    });

    if (url) {
      Linking.openURL(url);
    } else {
      console.error("Unable to get directions, unknown platform");
    }
  };

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: -20.15,
        longitude: 28.58,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Marker
        coordinate={{ latitude: -20.15, longitude: 28.58 }}
        title={"Padock One"}
        description={"cows padock"}
      >
        <Callout onPress={() => handleGetDirections(-20.15, 28.59)}>
          <Text>Padock One</Text>
        </Callout>
      </Marker>
      <Marker
        coordinate={{ latitude: -20.16, longitude: 28.68 }}
        title={"Padock Two"}
        description={"bulls padock"}
      >
        <Callout onPress={() => handleGetDirections(-20.16, 28.6)}>
          <Text>Padock Two</Text>
        </Callout>
      </Marker>
      <Marker
        coordinate={{ latitude: -20.17, longitude: 28.61 }}
        title={"Padock Three"}
        description={"sheep padock"}
      >
        <Callout onPress={() => handleGetDirections(-20.17, 28.61)}>
          <Text>Padock Three</Text>
        </Callout>
      </Marker>
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default MapViewComponent;
