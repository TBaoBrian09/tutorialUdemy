import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TransitionPresets } from "@react-navigation/stack";
import React from "react";
import RestaurantDetailScreen from "../../features/restaurants/screens/restaurant-detail.screen";
import RestaurantsScreen from "../../features/restaurants/screens/restaurants.screen";

const Stack = createNativeStackNavigator();

const RestaurantsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerShown: false,
      }}
      initialRouteName="Restaurants"
    >
      <Stack.Screen name="Restaurants" component={RestaurantsScreen} />
      <Stack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default RestaurantsNavigator;
