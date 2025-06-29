import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "@/components/Icon"; // seu componente de ícones
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

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
    <View className="flex-1 bg-white">
      <ImageBackground
        source={require("@/assets/images/fruits/frutasfundo.png")}
        resizeMode="cover"
        className="flex-1"
      >
        <ScrollView className="w-full px-4 mt-4">
          {orders.map((order) => (
            <View
              key={order.id}
              style={{ backgroundColor: "#EBD380" }}
              className="p-4 rounded-lg shadow-sm mb-4"
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
    </View>
  );
}
