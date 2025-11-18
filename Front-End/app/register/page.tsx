import { useTranslate } from "@/localization";
import { Colors } from "@/styles/ColorsVarabels";
import { LoginStyle } from "@/styles/login";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function page() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const t = useTranslate();

  const onChange = (event: any, selectedDate?: Date) => {
    setShowPicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

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
        <Text style={LoginStyle.texts}>{t("New Account")}</Text>
        <View style={{ width: 40 }} />
      </View>
      <View style={LoginStyle.InputsContainer}>
        <View>
          <Text style={{ fontSize: 20, color: `${Colors.fonts}` }}>
            {t("Full Name")}
          </Text>
          <TextInput
            placeholder={t("Enter your full name")}
            style={LoginStyle.Inputs}
          />
        </View>
        <View style={{ marginTop: 5 }}>
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
        </View>
        <View>
          <Text style={{ fontSize: 20, color: `${Colors.fonts}` }}>
            {t("Email")}
          </Text>
          <TextInput
            placeholder="example@example.com"
            style={LoginStyle.Inputs}
          />
        </View>
        <View>
          <Text style={{ fontSize: 20, color: `${Colors.fonts}` }}>
            {t("Mobile Number")}
          </Text>
          <TextInput
            placeholder="01 (XXX) (XXXX) (XXXX)"
            style={LoginStyle.Inputs}
          />
        </View>
        <View>
          <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 20, color: `${Colors.fonts}` }}>
              {t("Date of Birth:")}
            </Text>
            <TouchableOpacity onPress={() => setShowPicker(true)}>
              <TextInput
                placeholder="Select Date"
                value={date.toDateString()}
                editable={false}
                style={LoginStyle.Inputs}
              />
            </TouchableOpacity>

            {showPicker && (
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                maximumDate={new Date()}
                onChange={onChange}
              />
            )}
          </View>
        </View>
      </View>
      <View style={{ alignItems: "center", margin: 5 }}>
        <Text>{t("By continuing, you agree to")} </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Text style={{ fontWeight: "bold", color: Colors.primary }}>
            {t("Terms of Use")}
          </Text>
          <Text>{t("and")}</Text>
          <Text style={{ fontWeight: "bold", color: Colors.primary }}>
            {t("Privacy Policy.")}{" "}
          </Text>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={LoginStyle.LoginButton}>
          <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
            {t("Sign Up")}
          </Text>
        </TouchableOpacity>
        <View style={{ marginTop: 10 }}>
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

          <View style={{ flexDirection: "row", gap: 10, marginTop: 5 }}>
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
          marginTop: 10,
          textAlign: "center",
        }}
      >
        {t("already have an account?")}
        <Text
          style={{ color: Colors.primary }}
          onPress={() => router.push("/login/page")}
        >
          {t(" Log in")}
        </Text>
      </Text>
    </SafeAreaView>
  );
}
