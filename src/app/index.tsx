import { Text, View } from "react-native";
import "../styles/global.css";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-2xl font-bold text-red-800">TESTE</Text>
    </View>
  );
}
