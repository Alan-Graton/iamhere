import { Image, Text, View } from "react-native";

import Clipboard from "../../assets/Clipboard.png";

import { styles } from "./styles";

export function EmptyList() {
  return (
    <>
      <View style={{ alignItems: "center", padding: 5 }}>
        <Image source={Clipboard} style={{ marginBottom: 10 }} />
        <Text style={styles.empty_list_title}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.empty_list_text}>
          Crie tarefas e organize seus items a fazer
        </Text>
      </View>
    </>
  );
}
