import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-red-500">
      <Text className="text-black text-2xl">
        App up ipp.js to rftart working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
