import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.componet";
import { SafeArea } from "../../../components/utility/safe-are.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import RestaurantInfoCard from "../../restaurants/components/restaurant-info-card.component";
import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";

const FavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  return favourites.length ? (
    <SafeArea>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item?.name}
      />
    </SafeArea>
  ) : (
    <FavouritesArea>
      <Text center>No favourites yet</Text>
    </FavouritesArea>
  );
};

export default FavouritesScreen;
