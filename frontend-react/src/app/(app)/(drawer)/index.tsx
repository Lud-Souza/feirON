import React from "react";
import {
  Keyboard,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function page() {
  const cards = [
    {
      id: 1,
      title: "Maçã",
      price: "R$ 5,99 / kg",
      image:
        "https://cdn.pixabay.com/photo/2020/04/09/18/03/apple-5024033_960_720.jpg",
    },
    {
      id: 2,
      title: "Banana",
      price: "R$ 3,49 / kg",
      image:
        "https://cdn.pixabay.com/photo/2018/03/07/20/28/bananas-3204203_960_720.jpg",
    },
    {
      id: 3,
      title: "Alface",
      price: "R$ 2,99 / un",
      image:
        "https://cdn.pixabay.com/photo/2017/03/27/13/58/lettuce-2170743_960_720.jpg",
    },
    {
      id: 4,
      title: "Tomate",
      price: "R$ 4,79 / kg",
      image:
        "https://cdn.pixabay.com/photo/2015/03/24/08/32/tomatoes-686585_960_720.jpg",
    },
    {
      id: 5,
      title: "Cenoura",
      price: "R$ 3,29 / kg",
      image:
        "https://cdn.pixabay.com/photo/2017/01/20/15/06/carrots-1995046_960_720.jpg",
    },
    {
      id: 6,
      title: "Morango",
      price: "R$ 6,99 / bandeja",
      image:
        "https://cdn.pixabay.com/photo/2018/01/15/07/51/strawberries-3087127_960_720.jpg",
    },
  ];

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView className="flex-1 w-full h-full items-center pt-8">
        <View className="w-full gap-4 bg-primary-green3 justify-center p-4 rounded-md">
          <Text className=" text-primary-white">Tipos de produtos</Text>
          <TextInput
            placeholder="Todos"
            placeholderTextColor={"#267A76"}
            className="w-full rounded-md p-4 border-primary-green3 bg-white text-primary-green3 font-semibold"
          />
        </View>

        <View className="w-full flex-row flex-wrap justify-between px-4 mt-4">
          {cards.map((item, index) => (
            <View
              key={index}
              className="w-[48%] bg-primary-white rounded-md mb-4 overflow-hidden"
              style={{ height: 180 }}
            >
              <Image
                source={require("@/assets/images/icon.png")}
                className="w-full h-[100px]"
                resizeMode="contain"
              />
              <View className="p-2">
                <Text className="font-semibold text-base">{item.title}</Text>
                <Text className="text-primary-green3">{item.price}</Text>
              </View>
            </View>
          ))}
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
