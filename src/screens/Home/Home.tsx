import React from "react";
// Widgets
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Checkbox, IconButton } from "react-native-paper";
// Styles
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

export function Home() {
  const [tasks, setTasks] = React.useState<string[]>([]);
  const [task, setTask] = React.useState<string>("");

  function handleCreate(task: string): void {
    setTasks((prev) => [...prev, task]);
  }
  const handleMarkAsDone = () => {};
  const handleDelete = () => {};

  React.useEffect(() => {
    console.info(tasks);
  }, [tasks]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Ionicons name="rocket" size={24} color="#FFF" />
          <Text style={styles.title}>todo</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            placeholder="Adicione uma Tarefa"
            placeholderTextColor="#F2F2F2"
            style={styles.new_task_input}
            onChangeText={(text) => setTask((prev) => (prev = text))}
          />
          <TouchableOpacity
            style={styles.new_task_btn}
            onPress={() => handleCreate(task)}
          >
            <Text style={{ fontSize: 24, color: "#FFF" }}>+</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {tasks?.map((task) => (
            <View style={styles.todo_card} key={task}>
              <Checkbox status="checked" />
              <Text style={styles.text}>{task}</Text>
              <IconButton icon={"delete"} iconColor="#E25858" />
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
}
