import React, { useContext, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "../../../components/Icon";

import { Context as CartContext } from "@/context/cartContext";

export default function FavoritesScreen() {
  const { stateCart, setFavorites } = useContext(CartContext);
  const [query, setQuery] = useState("");

  const addToFavorites = (item) => {
    const isAlreadyFavorite = stateCart.favorites?.some(
      (fav) => fav.id === item.id
    );

    let updatedFavorites;

    if (isAlreadyFavorite) {
      updatedFavorites = stateCart.favorites.filter(
        (fav) => fav.id !== item.id
      );
    } else {
      updatedFavorites = [
        ...(Array.isArray(stateCart.favorites) ? stateCart.favorites : []),
        item,
      ];
    }

    setFavorites(updatedFavorites);
  };

  const result =
    query.length <= 0
      ? stateCart.favorites
      : stateCart.favorites.filter((e) => e.title.includes(query));

  return (
    <View className="flex-1 bg-gray-50">
      <View className="w-full gap-4 bg-primary-green3 justify-center p-4 ">
        <Text className=" text-primary-white text-md font-semibold">
          Filtro de produtos
        </Text>
        <TextInput
          placeholder="Pesquise aqui..."
          placeholderTextColor={"#267A76"}
          className="w-full rounded-md p-4 border-primary-green3 bg-white text-primary-green3 font-semibold"
          value={query}
          onChangeText={(e) => setQuery(e)}
        />
      </View>

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <View className="flex-row flex-wrap justify-between">
          {result?.map((product) => (
            <View
              key={product.id}
              className="w-[48%] bg-primary-white rounded-md mb-4 overflow-hidden border-solid border-primary-white border-2"
            >
              <View className="bg-white">
                <Image
                  source={product.image}
                  className="w-full h-[150px]"
                  resizeMode="cover"
                />
              </View>
              <View className="p-2">
                <View className="w-full flex-row justify-between">
                  <Text className="font-semibold text-lg">{product.title}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      setTimeout(addToFavorites(product), 0);
                    }}
                  >
                    <Icon name="Heart" color={"red"} size={24} />
                  </TouchableOpacity>
                </View>
                <Text className="text-primary-green3">{product.price}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
