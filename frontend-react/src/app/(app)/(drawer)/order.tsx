import React, { useContext, useLayoutEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Context as CartContext } from "@/context/cartContext";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

const orders = [
  {
    id: 1,
    status: "Pendente",
    date: "Chegará em 20 de maio (Terça-feira)",
    total: "85,74",
  },
];

export default function OrdersScreen() {
  const navigation = useNavigation();
  const { stateCart, setSales } = useContext(CartContext);

  const cancelOrder = (orderId) => {
    Alert.alert("Anteção!", "Deseja realmente cancelar o pedido?", [
      {
        text: "Não",
        style: "default",
      },
      {
        text: "Sim",
        style: "destructive",
        onPress: () => {
          setTimeout(() => {
            const updatedSales = result.filter((order) => order.id !== orderId);
            setSales(updatedSales);
          }, 2000);
        },
      },
    ]);
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

  const result = stateCart.sales || [];

  return (
    <View className="flex-1 bg-white">
      <ImageBackground
        source={require("@/assets/images/fruits/frutasfundo.png")}
        resizeMode="cover"
        className="flex-1"
      >
        <ScrollView className="w-full px-4 mt-4">
          {result.map((order) => (
            <View
              key={order.id}
              style={{ backgroundColor: "#EBD380" }}
              className="p-4 rounded-lg shadow-sm mb-4"
            >
              <View className="flex-row justify-between">
                <Text className="font-bold">PEDIDO - {order.id}</Text>
                <Text className="text-gray-700">{order.status}</Text>
              </View>
              <Text className="text-sm text-gray-800 mt-1">
                Realizado: {order.createdAt}
              </Text>
              <Text className="text-sm text-gray-800 mt-1">
                {order.status === "Entregue" ? "Chegou" : "Chegará"}:{" "}
                {order.entrega}
              </Text>
              <Text className="mt-1">Total: R$ {order.total}</Text>

              <View className="flex-row justify-end mt-3">
                {order.status != "Entregue" && (
                  <TouchableOpacity
                    style={{ backgroundColor: "#fff" }}
                    className="px-6 py-2 rounded-md"
                    onPress={() => cancelOrder(order.id)}
                  >
                    <Text className="text-red-500 font-semibold">Cancelar</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
