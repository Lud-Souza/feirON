import React, { useLayoutEffect } from "react";
import {
  View, Text, Image, ScrollView, TextInput, TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import Icon from "@/components/Icon";
import { FontAwesome, Ionicons } from '@expo/vector-icons';

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
  const navigation = useNavigation();

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
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View className="flex-1 bg-primary-green3">
        <View className="w-full gap-4 bg-primary-green3 justify-center p-4 ">
          <Text className=" text-primary-white text-md font-semibold">
            Tipos de produtos
          </Text>
          <TextInput
            placeholder="Todos"
            placeholderTextColor={"#267A76"}
            className="w-full rounded-md p-4 border-primary-green3 bg-white text-primary-green3 font-semibold"
          />
        </View>

        <ScrollView className="w-full px-4 mt-4">
          <View className="flex-row flex-wrap justify-between">
            {cartItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                className="w-[48%] bg-primary-white rounded-md mb-4 overflow-hidden border-solid border-primary-white border-2"
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
                  <View className="flex-row gap-2 items-center justify-between">
                    <Text className="text-primary-green3">{item.price}</Text>
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
              </TouchableOpacity>
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
      </View>
    </TouchableWithoutFeedback>
  );
}
