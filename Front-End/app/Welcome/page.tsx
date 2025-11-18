import { useTranslate } from "@/localization/index";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export const options = {
  headerShown: false,
};

export default function page() {
  const router = useRouter();
  const t = useTranslate();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffff" }}>
      <View style={styles.container}>
        <Image
          source={require("@/assets/images/care.png")}
          style={{ width: 200, height: 200 }}
        />
        <Text style={{ fontSize: 35, color: "#3660ff" }}>
          {t("Your Health")}
        </Text>
        <Text style={{ fontSize: 30, color: "#3660ff" }}>{t("Firts")}</Text>
        <Text style={{ fontSize: 15, color: "#3660ff" }}>{t("CarePoint")}</Text>
        <View style={{ marginTop: 17, alignItems: "center" }}>
          <Text style={{ color: "#333" }}>
            {t("Get the medical care you need, when you need it.")}
          </Text>
          <Text style={{ fontSize: 16, color: "#333" }}>
            {t("Find trusted doctors across multiple specialties.")}
          </Text>
          <Text style={{ fontSize: 16, color: "#333" }}>
            {t("Book your appointment quickly and easily.")}
          </Text>
        </View>
        <View style={{ flex: 1, gap: 10, marginTop: 15 }}>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => router.push("/login/page")}
          >
            <Text style={{ fontSize: 17, color: "#ffff" }}>{t("Log in")}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <Text
              style={{ fontSize: 17, color: "#ffff" }}
              onPress={() => router.push("/register/page")}
            >
              {t("Sign up")}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  Button: {
    width: 200,

    backgroundColor: "#3660ff",
    alignItems: "center",
    padding: 10,

    borderRadius: 30,
  },
});
