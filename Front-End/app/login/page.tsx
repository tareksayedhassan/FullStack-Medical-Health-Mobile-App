import { LoginStyle } from "@/components/styles/login";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function page() {
  return (
    <SafeAreaView style={LoginStyle.container}>
      <View style={LoginStyle.LoginConainer}>
        <AntDesign name="arrow-left" size={24} color="#3660ff" />
        <Text style={LoginStyle.texts}>Log In</Text>
        <View style={{ width: 40 }} />
      </View>

      <View>
        <Text>page</Text>
      </View>
    </SafeAreaView>
  );
}
