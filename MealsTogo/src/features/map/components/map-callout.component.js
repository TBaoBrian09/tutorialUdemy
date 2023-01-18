import React from "react";
import CompactRestaurantInfo from "../../../components/restaurant/compac-restaurant-info.component";

const MapCalloutText = ({ restaurant }) => {
  return <CompactRestaurantInfo isMap restaurant={restaurant} />;
};

export default MapCalloutText;
