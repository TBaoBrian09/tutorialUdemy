import React, { useContext, useState, useEffect } from "react";
import MapView, { MapCallout, Marker } from "react-native-maps";
import styled from "styled-components/native";

import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import MapCalloutText from "../components/map-callout.component";
import { Search } from "../components/search.component";

// import { Search } from "../components/search.component";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

const SomeText = styled.Text``;

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <MapView>
              <Marker
                key={restaurant.name}
                title={restaurant.name}
                // title="haha"
                coordinate={{
                  latitude: restaurant.geometry.location.lat,
                  longitude: restaurant.geometry.location.lng,
                }}
              />
              <MapCallout
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant,
                  })
                }
              >
                <MapCalloutText restaurant={restaurant} />
              </MapCallout>
            </MapView>
          );
        })}
      </Map>
    </>
  );
};
