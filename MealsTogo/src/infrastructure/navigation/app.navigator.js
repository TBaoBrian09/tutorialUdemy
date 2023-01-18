import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RestaurantsNavigator from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { SettingsNavigator } from "./setting.navigator";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  RestaurantsRoot: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const tabBarIcon =
  (iconName) =>
  ({ size, color }) =>
    <Ionicons name={iconName} size={size} color={color} />;

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: tabBarIcon(iconName),
    headerShown: false,
    activeTintColor: "tomato",
    inactiveTintColor: "gray",
  };
};

export default function AppNavigator() {
  return (
    <>
      <Tab.Navigator
        screenOptions={createScreenOptions}
        initialRouteName="RestaurantsRoot"
      >
        <Tab.Screen name="RestaurantsRoot" component={RestaurantsNavigator} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsNavigator} />
      </Tab.Navigator>
    </>
  );
}
