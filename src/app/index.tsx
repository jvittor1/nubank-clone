import { ScrollView, Text, View } from "react-native";
import "../styles/global.css";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { MaterialIcons } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import { ListItems } from "../components/List-Items";
import { Card } from "../components/Card";
import { TextCard } from "../components/Text-Card";
import {
  LearnMoreCard,
  LearnMoreCardList,
} from "../components/Learn-More-Card";

export default function Index() {
  return (
    <ScrollView style={{ flex: 1 }} className="bg-nubank-black">
      <View className="bg- bg-nubank-purple-400 p-app-padding h-44 w-full justify-between">
        <Header />

        <Text className="text-nubank-white text-xl font-semibold">
          Olá, João
        </Text>
      </View>

      <View className="p-app-padding mt-1 items-start gap-1">
        <View className="w-full flex-row items-center justify-between">
          <Text className="text-nubank-white text-xl font-medium">Conta</Text>
          <MaterialIcons name="chevron-right" size={22} color="gray" />
        </View>
        <Text className="text-nubank-white text-xl font-medium">
          R$ 1.000,00
        </Text>
      </View>

      <ListItems />

      <View className="p-app-padding gap-4">
        <Card>
          <View className="flex-row items-center gap-3">
            <MaterialIcons name="credit-card" size={22} color="white" />
            <Text className="text-nubank-white text-xl font-medium">
              Meus cartões
            </Text>
          </View>
        </Card>

        <Card>
          <View className="flex-row items-center justify-between">
            <Text className="text-nubank-white max-w-72 text-xl font-medium">
              Pague boletos no crédito em ate 12x, direto no app.
            </Text>
            <View className="bg-nubank-black h-16 w-16 items-center justify-center rounded-full">
              <MaterialIcons name="smartphone" size={22} color="white" />
            </View>
          </View>
        </Card>
      </View>

      <TextCard label="Cartão de crédito" isBorderTop={true}>
        <View className="gap-1">
          <Text className="text-xl text-zinc-300">Fatura atual</Text>
          <Text className="text-nubank-white text-xl font-medium">
            R$ 1.000,00
          </Text>
        </View>
        <Text className="mt-2 text-lg text-zinc-500">
          Limite disponível de R$ 5000,00
        </Text>
      </TextCard>

      <TextCard label="Empréstimo" isBorderBottom={true} isBorderTop={true}>
        <Text className="text-lg text-zinc-500">
          Dinheiro parado no FGTS? Você pode antecipar até 12 parcelas do seu
          saque aniversário.
        </Text>
      </TextCard>

      <TextCard label="Próximo pagamento" isBorderBottom={true}>
        <Text className="text-nubank-white text-xl">Segunda-feira, 1 Jan</Text>
      </TextCard>

      <View className="p-app-padding">
        <Text className="text-nubank-white mt-1 text-2xl font-medium">
          Descubra mais
        </Text>
        <LearnMoreCardList />
      </View>
    </ScrollView>
  );
}
