import React from "react";
import {View, Text, Image, ScrollView, TextInput, TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "@/components/Icon"; 
import { FontAwesome } from '@expo/vector-icons';

const cartItems = [
  {
    id: 1,
    title: "Tábua de carne - artesanal",
    price: "R$ 245,99",
    unit: "un",
    image: require("@/assets/images/fruits/tabuaDeCarne.jpg"),
  },
  {
    id: 2,
    title: "Cenoura",
    price: "R$ 245,99",
    unit: "kg",
    image: require("@/assets/images/fruits/cenoura.jpg"),
  },
  {
    id: 3,
    title: "Tomate tradicional",
    price: "R$ 245,99",
    unit: "kg",
    image: require("@/assets/images/fruits/tomate.jpg"),
  },
  {
    id: 4,
    title: "Abóbora cabotia",
    price: "R$ 7,99",
    unit: "kg",
    image: require("@/assets/images/fruits/abobora.png"),
  },
  {
    id: 5,
    title: "Abacate verde",
    price: "R$ 245,99",
    unit: "kg",
    image: require("@/assets/images/fruits/abacate.png"),
  },
  {
    id: 6,
    title: "Vasilhas de barro",
    price: "R$ 7,99",
    unit: "kg",
    image: require("@/assets/images/fruits/vasilha.png"),
  },
];

export default function CartScreen() {
  return (
    <SafeAreaView className="flex-1 bg-primary-white px-4 pt-4 pb-20">
        <View
            style={{ backgroundColor: "#EBD380" }}
            className="w-full px-4 py-4 flex-row items-center justify-between"
            >
            <TouchableOpacity>
                <Icon name="Menu" size={24} color="black" />
            </TouchableOpacity>

            <Text className="text-xl font-bold text-gray-700">CARRINHO</Text>

            <TouchableOpacity>
                <Icon name="Search" size={24} color="black" />
            </TouchableOpacity>
        </View>

      <TextInput
        className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 mb-4"
        placeholder="Tipos de produtos"
        defaultValue="TODOS"
      />

      <ScrollView>
        <View className="flex-row flex-wrap justify-between gap-y-4">
          {cartItems.map((item) => (
            <View
              key={item.id}
              className="w-[48%] bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <Image source={item.image} className="w-full h-28" resizeMode="cover" />
              <View className="p-2">
                <Text className="font-semibold text-sm">{item.title}</Text>
                <View className="flex-row justify-between items-center mt-1">
                  <Text className="text-primary-green3 font-semibold text-sm">
                    {item.price} <Text className="text-xs">/{item.unit}</Text>
                  </Text>
                  <View className="flex-row gap-2">
                    <TouchableOpacity>
                      <Icon name="Trash" color="black" size={16} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FontAwesome name="heart" size={16} color="red" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

    <TouchableOpacity
        className="w-[32%] absolute bottom-64 right-0 rounded-tl-full rounded-bl-full px-4 py-3 flex-row items-center justify-center gap-2"
        style={{ backgroundColor: "#EBD380" }}
        >
        <Text className="text-black font-bold">FINALIZAR</Text>
        <Icon name="ShoppingCart" color="black" size={25} />
    </TouchableOpacity>


    </SafeAreaView>
  );
}
