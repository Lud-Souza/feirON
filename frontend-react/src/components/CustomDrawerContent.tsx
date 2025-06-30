import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { router } from "expo-router";
import { useClerk, useUser } from "@clerk/clerk-expo";
import AppLogo from "./AppLogo";

// Componente para um botão reutilizável do menu
const DrawerButton = ({
  label,
  routeName,
  navigation,
}: {
  label: string;
  routeName: string;
  navigation: any;
}) => (
  <TouchableOpacity
    onPress={() => {
      navigation.navigate(routeName);
      navigation.closeDrawer();
    }}
    className="bg-[#BDCE82] p-3 rounded-lg mb-3"
  >
    <Text className="text-center font-bold text-gray-700 text-base">
      {label}
    </Text>
  </TouchableOpacity>
);

export default function CustomDrawerContent(props: any) {
  const { navigation } = props;
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk();

  const handleLogout = async () => {
    navigation.closeDrawer();
    await signOut();
  };

  const userNameText = user?.firstName;

  return (
    // Usamos uma View normal aqui pois o SafeAreaView já está no layout pai
    <View className="flex-1" style={{ backgroundColor: "#F7F6F1" }}>
      <ScrollView contentContainerStyle={{ padding: 20, paddingTop: 60 }}>
        {/* Seção do Perfil */}
        <View className="bg-[#BDCE82] p-4 rounded-lg mb-8 flex-row items-center">
          <View className="w-16 h-16 rounded-full bg-gray-50/50 items-center justify-center mr-4">
            {user?.imageUrl && (
              <Image
                source={{ uri: user?.imageUrl || "" }}
                className="w-full h-full rounded-full"
                resizeMode="cover"
              />
            )}
          </View>
          <Text className="text-xl font-bold text-white">
            Olá, {userNameText}
          </Text>
        </View>

        {/* Botões de Navegação */}
        <DrawerButton
          label="PRODUTOS"
          routeName="index"
          navigation={navigation}
        />
        <DrawerButton
          label="PEDIDOS"
          routeName="order"
          navigation={navigation}
        />
        <DrawerButton
          label="FAVORITOS"
          routeName="favorites"
          navigation={navigation}
        />
        <DrawerButton
          label="CARRINHO"
          routeName="cart"
          navigation={navigation}
        />
        <DrawerButton
          label="ENDEREÇOS"
          routeName="addresses"
          navigation={navigation}
        />
        <DrawerButton
          label="PERFIL PESSOAL"
          routeName="profile"
          navigation={navigation}
        />
        <DrawerButton
          label="FEIRANTE"
          routeName="fair-profile"
          navigation={navigation}
        />

        {/* Logo no meio */}
        <View className="items-center my-10">
          {/* Placeholder para a Logo */}
          <View className="w-36 h-36 bg-gray-200/50 rounded-lg items-center justify-center">
            <AppLogo className="w-full h-full" />
          </View>
        </View>

        {/* Botão de Sair */}
        <TouchableOpacity
          onPress={handleLogout}
          className="bg-[#EBD380] p-3 rounded-lg"
        >
          <Text className="text-center font-bold text-gray-700 text-base">
            SAIR
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
