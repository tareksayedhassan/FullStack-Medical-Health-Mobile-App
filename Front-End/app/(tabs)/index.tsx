import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
export default function HomeScreen() {
  const router = useRouter();
  return (
    <SafeAreaView>
      <View>
        <Text className="text-lg">hello world</Text>
      </View>
      <Button
        title="click me"
        onPress={() => router.push("/Welcome/page")}
      ></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
