import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "@/components/Icon"; // seu componente de ícones

const orders = [
  {
    id: 2,
    status: "Pendente",
    date: "Chegará em 20 de maio (Terça-feira)",
    total: "85,74",
  },
  {
    id: 1,
    status: "Entregue",
    date: "Chegou em 01 de maio (Quinta-feira)",
    total: "85,74",
  },
];

export default function OrdersScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View
        style={{ backgroundColor: "#EBD380" }}
        className="w-full px-4 py-4 flex-row items-center justify-between"
      >
        <TouchableOpacity>
          <Icon name="Menu" size={24} color="black" />
        </TouchableOpacity>

        <Text className="text-xl font-bold text-gray-700">PEDIDOS</Text>

        <TouchableOpacity>
          <Icon name="Search" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <ImageBackground
        source={require("")}
        resizeMode="cover"
        className="flex-1 px-4 pt-4"
      >
        <ScrollView className="space-y-6 pb-6">
          {orders.map((order) => (
            <View
              key={order.id}
              style={{ backgroundColor: "#EBD380" }}
              className="p-4 rounded-lg shadow-sm"
            >
              <View className="flex-row justify-between">
                <Text className="font-bold">PEDIDO - {order.id}</Text>
                <Text className="text-gray-700">{order.status}</Text>
              </View>
              <Text className="text-sm text-gray-800 mt-1">{order.date}</Text>
              <Text className="mt-1">Total: R$ {order.total}</Text>

              <View className="flex-row justify-between mt-3">
                {order.status === "Entregue" ? (
                  <TouchableOpacity
                    style={{ backgroundColor: "#BDCE82" }}
                    className="px-6 py-2 rounded-md"
                  >
                    <Text className="text-black font-semibold">Devolver</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={{ backgroundColor: "#BDCE82" }}
                    className="px-6 py-2 rounded-md"
                  >
                    <Text className="text-black font-semibold">Cancelar</Text>
                  </TouchableOpacity>
                )}

                <TouchableOpacity
                  style={{ backgroundColor: "#BDCE82" }}
                  className="px-6 py-2 rounded-md"
                >
                  <Text className="text-black font-semibold">Visualizar</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}
