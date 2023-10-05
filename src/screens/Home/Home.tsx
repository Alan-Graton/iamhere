import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import { Checkbox, IconButton } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

export function Home() {
  const [todos, setTodos] = React.useState<string[]>();

  const handleCreate = () => {};
  const handleMarkAsDone = () => {};
  const handleDelete = () => {};

  return (
    <>
      <View style={styles.container}>
        {/* TODO: Header - Logo */}
        {/* Header - Creation Bar */}
        <View style={styles.header}>
          <Ionicons name="rocket" size={24} color="#FFF" />
          <Text style={styles.text}>todo</Text>
          <TextInput placeholder="Nova Tarefa" placeholderTextColor="#F2F2F2" />
          <Button title="+" />
        </View>
        {/* TODO: Counters */}
        <View>
          <Text style={styles.text}>Criadas 0</Text>
          <Text style={styles.text}>Finalizadas 0</Text>
        </View>
        {/* Content - Tasks */}
        <View style={styles.todo_card}>
          <View style={styles.todo_action}>
            <Checkbox status="checked" />
          </View>
          <View style={styles.todo_content}>
            <Text style={styles.text}>Finalizar Layout</Text>
          </View>
          <View style={styles.todo_action}>
            <IconButton icon={"delete"} iconColor="red" />
          </View>
        </View>
      </View>
    </>
  );
}
