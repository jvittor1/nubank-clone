import { Text, View } from "react-native";
import "../styles/global.css";
import { Button } from "../components/Button";

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
      <Button label="teste" />
    </View>
  );
}
