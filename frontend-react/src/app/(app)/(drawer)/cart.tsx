import React, { useContext, useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import Icon from "@/components/Icon";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Context as CartContext } from "@/context/cartContext";

export default function CartScreen() {
  const navigation = useNavigation();
  const { stateCart, setCart, setSales } = useContext(CartContext);
  const [loading, setLoading] = useState(false);

  const removeItemFromCart = (indexToRemove: number) => {
    const updatedCart = result.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
  };

  const finalizeCart = async () => {
    if (result.length === 0) return;
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const totalPrice = result.reduce((sum, item) => {
      const priceNumber = parseFloat(
        String(item.price).replace("R$", "").replace(",", ".").trim()
      );
      return sum + (isNaN(priceNumber) ? 0 : priceNumber);
    }, 0);

    const orderId = `${Number.parseInt(String(Date.now() / 2.1))}`;

    const dias = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
    const randomDay = dias[Math.floor(Math.random() * dias.length)];
    const status =
      Math.floor(Math.random() * 2) % 2 === 0 ? "Entregue" : "Pendente";

    const orderSummary = {
      id: orderId,
      total: totalPrice.toFixed(2),
      entrega: randomDay,
      status,
      createdAt: new Date().toLocaleDateString("pt-BR"),
      type: "summary",
    };

    const updatedSales = [
      ...(Array.isArray(stateCart.sales) ? stateCart.sales : []),
      orderSummary,
    ];

    setSales(updatedSales);
    setLoading(false);
    setCart([]);
    navigation.goBack();
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

  const result = stateCart.cart || [];

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View className="flex-1 bg-primary-green3">
        <ScrollView className="w-full px-4 mt-4">
          <View className="flex-row flex-wrap justify-between">
            {result.map((item, index) => (
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
                      <TouchableOpacity
                        onPress={() => removeItemFromCart(index)}
                      >
                        <Icon name="Trash" color="black" size={32} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        {result.length > 0 && (
          <TouchableOpacity
            className="w-[32%] absolute bottom-64 right-0 rounded-tl-full rounded-bl-full px-4 py-3 flex-row items-center justify-center gap-2"
            style={{ backgroundColor: "#EBD380" }}
            onPress={finalizeCart}
          >
            <Text className="text-black font-bold">
              {loading ? "FINALIZANDO..." : "FINALIZAR"}
            </Text>
            <Icon name="ShoppingCart" color="black" size={25} />
          </TouchableOpacity>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}
