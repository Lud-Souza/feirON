import { router } from "expo-router";
import { useEffect } from "react";
import { Image, View } from "react-native";

export default function App() {
  useEffect(() => {
    setTimeout(() => {
    }, 1000);
  }, []);
  return <View className="flex-1 bg-primary-green3"></View>;
}
