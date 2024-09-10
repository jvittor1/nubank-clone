import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { ListItem } from "../utils/list-item";

export type iconNameProps = keyof typeof MaterialIcons.glyphMap;

type ItemCardProps = {
  label: string;
  icon: iconNameProps;
};

type ItemProps = {
  id: string;
  label: string;
  icon: iconNameProps;
};

export function ListItems() {
  const [data, setData] = useState<ItemProps[]>([]);

  useEffect(() => {
    setData(ListItem as ItemProps[]);
  }, []);

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Item label={item.label} icon={item.icon} />}
      keyExtractor={(item) => item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        gap: 16,
        marginVertical: 8,
        paddingHorizontal: 18,
      }}
    />
  );
}

export function Item({ label, icon }: ItemCardProps) {
  return (
    <View className="flex-col items-center gap-2">
      <View className="bg-nubank-gray h-24 w-24 items-center justify-center rounded-full">
        <MaterialIcons name={icon} size={24} color="white" />
      </View>
      <Text className="text-nubank-white max-w-24 text-center text-xl font-medium">
        {label}
      </Text>
    </View>
  );
}
