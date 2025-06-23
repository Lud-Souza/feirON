import AppLogo from "@/components/AppLogo";
import OrDivider from "@/components/OrDivider";
import { router } from "expo-router";
import React from "react";
import {
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignInScreen() {
  
  function fnLogin() {
    router.replace("/(app)/(drawer)");
  }


  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView className="flex-1 w-full h-full items-center pt-8 bg-primary-white">
          <AppLogo />

          <View className="w-full my-4 items-center justify-center">
            <Text className="color-primary-green3 font-bold text-4xl">
              Bem-vindo!
            </Text>
          </View>

          <View className="w-full gap-4 bg-primary-green3 justify-center items-center pt-4 pb-4 rounded-md">
            <TextInput
              placeholder="Usuário"
              placeholderTextColor={"#267A76"}
              className="w-[90%] rounded-md p-4 border-primary-green3 bg-white text-primary-green3 font-semibold"
            />
            <TextInput
              placeholder="Senha"
              placeholderTextColor={"#267A76"}
              className="w-[90%] rounded-md p-4 border-primary-green3 bg-white text-primary-green3 font-semibold"
            />

            <TouchableOpacity
              className="w-[45%] rounded-md p-4 border-primary-green3 bg-primary-white  items-center"
              onPress={fnLogin}
            >
              <Text className="text-center text-primary-green3 font-bold">
                Entrar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="w-[45%] rounded-md  border-primary-green3   items-center">
              <Text className="text-center text-primary-white font-semibold">
                Esqueci a senha
              </Text>
            </TouchableOpacity>
          </View>

          <OrDivider
            dividerClassName="color-red"
            textClassName="color-primary-green3"
            viewClassName="bg-primary-green3"
          />

          <TouchableOpacity className="w-[45%] rounded-md p-4 border-primary-green3 bg-primary-green3  items-center mt-2">
            <Text className="text-center text-white font-bold">
              Entrar com GOOGLE
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
}
