import React, { useState, useEffect, useRef } from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from 'expo-location';
import styles from "./styles";

const Map = () => {
  const latitude = -8.394097983524112;
  const longitude = -34.97408204488957;
  const coordinate = { latitude: latitude, longitude: longitude };
  const [initialCoordinate, setInitialCoordinate] = useState(coordinate);
  const mapRef = useRef("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      setInitialCoordinate({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      mapRef.current.animateToRegion(
        {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0043,
          longitudeDelta: 0.0034,
        },
        500
      );
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        ref={mapRef}
        style={styles.map}
      >
        <Marker
          id="initial"
          key="initial"
          title="Você está aqui!"
          coordinate={initialCoordinate}
        />
      </MapView>
    </View>
  );
};

export default Map;
