import { useTranslate } from "@/localization";
import { Colors } from "@/styles/ColorsVarabels";
import { LoginStyle } from "@/styles/login";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function page() {
  const [showPassword, setShowPassword] = useState(false);
  const t = useTranslate();

  const router = useRouter();
  const Icons = [
    {
      icone: <AntDesign name="google-plus" size={24} color="black" />,
    },
    {
      icone: <Entypo name="facebook" size={24} color="black" />,
    },
    {
      icone: <FontAwesome5 name="fingerprint" size={24} color="black" />,
    },
  ];
  return (
    <SafeAreaView style={LoginStyle.container}>
      <View style={LoginStyle.LoginConainer}>
        <AntDesign
          name="arrow-left"
          size={24}
          color={Colors.primary}
          onPress={() => router.back()}
        />
        <Text style={LoginStyle.texts}>{t("Log In")}</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={LoginStyle.texts}>{t("Welcome")} </Text>
        <View style={{ marginTop: 10, gap: 5 }}>
          <Text style={{ fontSize: 13, color: `${Colors.fonts}` }}>
            {t("We're glad to have you with us again.")}
          </Text>
          <Text style={{ fontSize: 13, color: `${Colors.fonts}` }}>
            {t("Hope you're doing well — let us know if you need any help.")}
          </Text>
        </View>
      </View>

      <View style={LoginStyle.InputsContainer}>
        <View>
          <Text style={{ fontSize: 20, color: `${Colors.fonts}` }}>
            {t("Email Or Mobile Number")}
          </Text>
          <TextInput
            placeholder="example@example.com"
            style={LoginStyle.Inputs}
          />
        </View>
        <View style={{ marginTop: 25 }}>
          <Text style={{ fontSize: 20, color: `${Colors.fonts}` }}>
            {t("Password")}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              placeholder="*********"
              style={LoginStyle.Inputs}
              secureTextEntry={true}
            />
            <AntDesign
              onPress={() => setShowPassword(!showPassword)}
              name={showPassword ? "eye" : "eye-invisible"}
              size={24}
              color="black"
              style={{ right: 50, position: "absolute", top: 20 }}
            />
          </View>
          <View style={LoginStyle.ForgetPassword}>
            <Text>{t("Forget Password")}</Text>
          </View>
        </View>
      </View>

      <View style={{ marginTop: 30, alignItems: "center" }}>
        <TouchableOpacity style={LoginStyle.LoginButton}>
          <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
            {t("Log In")}
          </Text>
        </TouchableOpacity>
        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              fontSize: 13,
              color: `${Colors.fonts}`,
              textAlign: "center",
            }}
          >
            {t("Or Sign Up With")}
          </Text>
          {/* social media */}

          <View style={{ flexDirection: "row", gap: 10, marginTop: 10 }}>
            {Icons.map((item, index) => (
              <View key={index} style={LoginStyle.Icons}>
                {item.icone}
              </View>
            ))}
          </View>
        </View>
      </View>
      <Text
        style={{
          fontSize: 15,
          color: `${Colors.fonts}`,
          marginTop: 20,
          textAlign: "center",
        }}
      >
        {t("Don’t have an account?")}
        <Text
          style={{ color: Colors.primary }}
          onPress={() => router.push("/register/page")}
        >
          {t("Sign Up")}
        </Text>
      </Text>
    </SafeAreaView>
  );
}
