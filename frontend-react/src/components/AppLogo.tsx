import React from "react";
import { View, Image } from "react-native";

const AppLogo = ({className = ''}) => (
  <View className={className || "w-2/6 h-1/3 items-center justify-center"}>
    <Image
      source={require("@/assets/images/icon.png")}
      className="flex-1 w-full h-full"
      resizeMode="contain"
    />
  </View>
);

export default AppLogo;
