import { Image, Text, View } from "react-native";

import Clipboard from "../../assets/Clipboard.png";

export function EmptyList() {
  return (
    <>
      <View style={{ alignItems: "center", padding: 5 }}>
        <Image source={Clipboard} style={{ marginBottom: 10 }} />
        <Text
          style={{
            color: "white",
            fontSize: 14,
            fontFamily: "Inter_500Medium",
          }}
        >
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text
          style={{ color: "white", fontSize: 14, fontFamily: "Inter_300Light" }}
        >
          Crie tarefas e organize seus items a fazer
        </Text>
      </View>
    </>
  );
}
