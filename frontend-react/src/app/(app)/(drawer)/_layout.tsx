import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import Icon from "@/components/Icon";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        initialRouteName="index"
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#F7F3E9",
          },
          drawerActiveTintColor: "#267A76",
          drawerInactiveTintColor: "#333",
          drawerActiveBackgroundColor: "#EDEAE0",
          drawerLabelStyle: {
            fontSize: 16,
            fontFamily: "Inter-Bold",
          },
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Produtos",
            title: "Produtos",
            drawerIcon: ({ color, size }) => (
              <Icon name="Tags" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="cart"
          options={{
            drawerLabel: "Carrinho",
            title: "Carrinho",
            drawerIcon: ({ color, size }) => (
              <Icon name="ShoppingCart" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="order"
          options={{
            drawerLabel: "Pedidos",
            title: "Pedidos",
            drawerIcon: ({ color, size }) => (
              <Icon name="ScrollText" size={size} color={color} />

            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
