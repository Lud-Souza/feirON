import { useUser, useOAuth, useSignIn } from "@clerk/clerk-expo";
import * as WebBrowser from "expo-web-browser";
import React, { useState, useCallback, useEffect } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Alert,
  ImageBackground,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import * as LinkingExpo from "expo-linking";
import AppLogo from "@/components/AppLogo";
import { SafeAreaView } from "react-native-safe-area-context";
import OrDivider from "@/components/OrDivider";
import { router } from "expo-router";

export const useWarmUpBrowser = () => {
  useEffect(() => {
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

WebBrowser.maybeCompleteAuthSession();

type OAuthStrategy = "oauth_google";
type ProcessingState = OAuthStrategy | "guest" | null;

export default function SignInScreen() {
  useWarmUpBrowser();

  const { user, isLoaded } = useUser();
  const { setActive } = useSignIn();

  const [isProcessing, setIsProcessing] = useState<ProcessingState>(null);

  function fnLogin() {
    router.replace("/(app)/(drawer)");
  }

  const { startOAuthFlow: startGoogleAuth } = useOAuth({
    strategy: "oauth_google",
  });
  const { startOAuthFlow: startFacebookAuth } = useOAuth({
    strategy: "oauth_facebook",
  });
  const { startOAuthFlow: startGithubAuth } = useOAuth({
    strategy: "oauth_github",
  });

  const handleSocialSignIn = useCallback(
    async (strategy: OAuthStrategy) => {
      let oauthFlowFunction;
      switch (strategy) {
        case "oauth_google":
          oauthFlowFunction = startGoogleAuth;
          break;
        default:
          return;
      }

      setIsProcessing(strategy);
      try {
        const { createdSessionId, setActive: setOAuthActive } =
          await oauthFlowFunction({
            redirectUrl: LinkingExpo.createURL("/(tabs)", {
              scheme: "caloriecare",
            }),
          });
        if (createdSessionId && setOAuthActive) {
          await setOAuthActive({ session: createdSessionId });
        }
      } catch (err: any) {
        console.error(
          `${strategy} OAuth error`,
          err.errors ? JSON.stringify(err.errors) : err
        );
        Alert.alert(
          "Erro de Autenticação",
          err.errors
            ? err.errors[0]?.longMessage || err.errors[0]?.message
            : "Não foi possível fazer login com este provedor."
        );
      } finally {
        setIsProcessing(null);
      }
    },
    [startGoogleAuth, startFacebookAuth, startGithubAuth, setActive]
  );

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

          <TouchableOpacity
            className="w-[45%] rounded-md p-4 border-primary-green3 bg-primary-green3  items-center mt-2"
            onPress={() => handleSocialSignIn("oauth_google")}
            disabled={isProcessing !== null || !isLoaded}
          >
            <Text className="text-center text-white font-bold">
              {isProcessing === "oauth_google"
                ? "Conectando..."
                : "Continuar com Google"}
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
}
