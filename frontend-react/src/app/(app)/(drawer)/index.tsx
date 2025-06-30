import Icon from "@/components/Icon";
import React, { useContext, useState } from "react";
import { router } from "expo-router";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Context as CartContext } from "@/context/cartContext";

import {
  Keyboard,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  View,
  ScrollView,
} from "react-native";

interface CardItem {
  id: number;
  title: string;
  price: string;
  image: any;
}

export default function Page() {
  const navigation = useNavigation();

  const { stateCart, setCart, setFavorites } = useContext(CartContext);

  const [viewDetails, setViewDetails] = useState<CardItem | null>(null);
  const [query, setQuery] = useState("");

  const cards: CardItem[] = [
    {
      id: 1,
      title: "Tabua de carne",
      price: "R$ 5,99 / kg",
      image: require("@/assets/images/fruits/tabuaDeCarne.jpg"),
    },
    {
      id: 2,
      title: "Cenoura",
      price: "R$ 3,49 / kg",
      image: require("@/assets/images/fruits/cenoura.jpg"),
    },
    {
      id: 3,
      title: "Tomate tradicional",
      price: "R$ 2,99 / un",
      image: require("@/assets/images/fruits/tomate.jpg"),
    },
    {
      id: 4,
      title: "Abóbora cabotia",
      price: "R$ 4,79 / kg",
      image: require("@/assets/images/fruits/abobora.png"),
    },
    {
      id: 5,
      title: "Abacate verde",
      price: "R$ 3,29 / kg",
      image: require("@/assets/images/fruits/abacate.png"),
    },
    {
      id: 6,
      title: "Vasilhas de barro",
      price: "R$ 6,99 / bandeja",
      image: require("@/assets/images/fruits/vasilha.png"),
    },
  ];

  const addProductToCart = () => {
    if (viewDetails) {
      const updatedCart = [
        ...(Array.isArray(stateCart.cart) ? stateCart.cart : []),
        viewDetails,
      ];
      setCart(updatedCart);
      setViewDetails(null);
    }
  };

  const addToFavorites = () => {
    if (!viewDetails) return;

    const isAlreadyFavorite = stateCart.favorites?.some(
      (fav) => fav.id === viewDetails.id
    );

    let updatedFavorites;

    if (isAlreadyFavorite) {
      updatedFavorites = stateCart.favorites.filter(
        (fav) => fav.id !== viewDetails.id
      );
    } else {
      updatedFavorites = [
        ...(Array.isArray(stateCart.favorites) ? stateCart.favorites : []),
        viewDetails,
      ];
    }

    setFavorites(updatedFavorites);
  };

  const isFavorite = (item: CardItem) => {
    return stateCart.favorites?.some((fav) => fav.id === item.id);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          style={{ marginLeft: 16 }}
        >
          <Ionicons name="menu" size={28} color="#267A76" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const result =
    query.length <= 0 ? cards : cards.filter((e) => e.title.includes(query));

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View className="flex-1 bg-primary-green3">
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
          <Text className="text-primary-white text-center text-md font-semibold">
            Selecione um produto para ver mais detalhes!
          </Text>
        </View>

        {viewDetails && (
          <>
            <View
              key={"viewDetails"}
              className="w-full bg-primary-white rounded-md mb-4 overflow-hidden border-solid border-primary-white border-2"
            >
              <View className="bg-white">
                <Image
                  source={viewDetails?.image}
                  className="w-full h-[400px]"
                  resizeMode="cover"
                />
              </View>
              <View className="p-4">
                <View className="w-full flex-row justify-between">
                  <Text className="font-semibold text-4xl text-black">
                    {viewDetails?.title}
                  </Text>

                  <TouchableOpacity onPress={addToFavorites}>
                    <Icon
                      name="Heart"
                      color={isFavorite(viewDetails) ? "red" : "gray"}
                      size={32}
                    />
                  </TouchableOpacity>
                </View>

                <Text className="text-primary-green3 text-2x1">
                  {viewDetails?.price}
                </Text>
              </View>

              <View className="w-full items-center flex-row gap-2 justify-around p-2">
                <TouchableOpacity
                  className="w-[49%] justify-center items-center bg-primary-green3 mb-4 rounded-md p-2"
                  onPress={() => setViewDetails(null)}
                >
                  <Text className="text-white text-center">Fechar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  className="w-[49%] justify-center items-center bg-primary-green3 mb-4 rounded-md p-2 flex-row gap-2"
                  onPress={addProductToCart}
                >
                  <Icon name="ShoppingCart" color="white" size={16} />

                  <Text className="text-white text-center">
                    Adicionar ao carrinho
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}

        <ScrollView className="w-full px-4 mt-4">
          <View className="flex-row flex-wrap justify-between">
            {result.map((item, index) => (
              <TouchableOpacity
                key={index}
                className="w-[48%] bg-primary-white rounded-md mb-4 overflow-hidden border-solid border-primary-white border-2"
                onPress={() => {
                  setViewDetails(item);
                }}
              >
                <View className="bg-white">
                  <Image
                    source={item.image}
                    className="w-full h-[150px]"
                    resizeMode="cover"
                  />
                </View>
                <View className="p-2">
                  <View className="w-full flex-row justify-between">
                    <Text className="font-semibold text-lg">{item.title}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        setViewDetails(item);
                        setTimeout(addToFavorites, 0);
                      }}
                    >
                      <Icon
                        name="Heart"
                        color={isFavorite(item) ? "red" : "gray"}
                        size={24}
                      />
                    </TouchableOpacity>
                  </View>
                  <Text className="text-primary-green3">{item.price}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {!viewDetails && (
          <TouchableOpacity
            onPress={() => router.push("/(app)/(drawer)/cart")}
            className="w-[15%] absolute bg-primary-green3 bottom-64 right-0 rounded-tl-full rounded-bl-full p-4 pl-6 flex-row"
          >
            <Icon name="ShoppingCart" color="white" size={32} />
            <Text className="text-white">{stateCart.cart?.length}</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}
