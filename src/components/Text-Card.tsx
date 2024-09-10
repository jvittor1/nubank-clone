import { MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

type TextCardProps = {
  label: string;
  children: React.ReactNode;
  isBorderTop?: boolean;
  isBorderBottom?: boolean;
};

export function TextCard({
  label,
  children,
  isBorderBottom,
  isBorderTop,
}: TextCardProps) {
  return (
    <View
      className={`flex-col gap-3 px-6 py-3 ${isBorderTop ? "border-t border-zinc-700" : ""} ${isBorderBottom ? "border-b border-zinc-700" : ""} `}
    >
      <View className="w-full flex-row items-center justify-between">
        <Text className="text-nubank-white text-xl font-medium">{label}</Text>
        <MaterialIcons name="chevron-right" size={22} color="gray" />
      </View>
      {children}
    </View>
  );
}
