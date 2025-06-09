import Icon from "@/components/Icon";
import React, { useState } from "react";
import { router } from "expo-router";

import {
  Keyboard,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface CardItem {
  id: number;
  title: string;
  price: string;
  image: any;
}

export default function page() {
  const [viewDatails, setViewDetails] = useState<CardItem | null>(null);

  const cards: CardItem[] = [
    {
      id: 1,
      title: "Tabua de carne - artesanal",
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

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView className="flex-1 w-full h-full items-center pt-8">
        <View className="w-full gap-4 bg-primary-green3 justify-center p-4 rounded-md">
          <Text className=" text-primary-white text-md font-semibold">
            Tipos de produtos
          </Text>
          <TextInput
            placeholder="Todos"
            placeholderTextColor={"#267A76"}
            className="w-full rounded-md p-4 border-primary-green3 bg-white text-primary-green3 font-semibold"
          />
          <Text className="text-primary-white text-center text-md font-semibold">
            Selecione um produto para ver mais detalhes!
          </Text>
        </View>

        {viewDatails && (
          <>
            <View
              key={"viewDatails"}
              className="w-full bg-primary-white rounded-md mb-4 overflow-hidden border-solid border-primary-white border-2"
            >
              <View className="bg-white">
                <Image
                  source={viewDatails?.image}
                  className="w-full h-[400px]"
                  resizeMode="cover"
                />
              </View>
              <View className="p-2">
                <Text className="font-semibold text-4xl text-black">
                  {viewDatails?.title}
                </Text>
                <Text className="text-primary-green3 text-2x1">
                  {viewDatails?.price}
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
                  onPress={() => {
                    setViewDetails(null);
                    router.push("/(app)/(drawer)/cart");
                  }}
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
            {cards.map((item, index) => (
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
                  <Text className="font-semibold text-base">{item.title}</Text>
                  <Text className="text-primary-green3">{item.price}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        <TouchableOpacity
          onPress={() => router.push("/(app)/(drawer)/cart")}
          className="w-[15%] absolute bg-primary-green3 bottom-64 right-0 rounded-tl-full rounded-bl-full p-4 pl-6"
        >
          <Icon name="ShoppingCart" color="white" size={32} />
        </TouchableOpacity>

      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
