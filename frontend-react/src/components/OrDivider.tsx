import React from "react";
import { View, Text } from "react-native";

interface OrDividerProps {
  dividerClassName?: string;
  viewClassName?: string;
  textClassName?: string;
  showText?: boolean;
  width?: string;
}

const OrDivider = ({
  dividerClassName = "",
  viewClassName = "",
  textClassName = "",
  showText = true,
  width = "100%",
}: OrDividerProps) => (
  <View
    className={`w-[${width}] items-center justify-center flex-row ${dividerClassName}`}
  >
    {showText ? (
      <>
        <View className={`h-[1px] flex-1 bg-white" ${viewClassName}`} />
        <Text
          className={`color-white font-extrabold text-2xl px-4 ${textClassName}`}
        >
          ou
        </Text>
        <View className={`h-[1px] flex-1 bg-white" ${viewClassName}`} />
      </>
    ) : (
      <>
        <View className={`h-[1px] flex-1 bg-white" ${viewClassName}`} />
      </>
    )}
  </View>
);

export default OrDivider;
