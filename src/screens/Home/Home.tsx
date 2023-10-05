import React from "react";
// Widgets
import {
  Image,
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
import Toast from "react-native-toast-message";
import Clipboard from "../../assets/Clipboard.png";

interface ITasks {
  description: string;
  status: "unchecked" | "checked";
}

export function Home() {
  const [tasks, setTasks] = React.useState<ITasks[]>([]);
  const [taskName, setTaskName] = React.useState<string>("");

  function handleCreate(task: string): void {
    if (tasks.find((el) => el.description === task)) {
      // FIXME: Toast not displaying
      Toast.show({
        type: "error",
        text1: "Opa!",
        text2: "Você já cadastrou uma tarefa igual a essa",
      });
      return;
    }

    setTasks((prev) => [...prev, { description: task, status: "unchecked" }]);
  }
  function handleMarkAsDone(task: ITasks, index: number) {
    const updatedTask = [...tasks];

    updatedTask[index] = {
      ...updatedTask[index],
      status: updatedTask[index].status === "checked" ? "unchecked" : "checked",
    };

    setTasks(updatedTask);
  }

  function handleDelete(pressedTask: string) {
    const removeTask = tasks.filter((el) => el.description !== pressedTask);

    setTasks((prev) => [...removeTask]);
  }

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
            onChangeText={(text) => setTaskName((prev) => (prev = text))}
          />
          <TouchableOpacity
            style={styles.new_task_btn}
            onPress={() => handleCreate(taskName)}
          >
            <Text style={{ fontSize: 24, color: "#FFF" }}>+</Text>
          </TouchableOpacity>
        </View>
        {/* TODO: Get rid of this big hunk of code and use FlatList */}
        {tasks.length > 0 ? (
          <ScrollView>
            {tasks?.map((task, index) => (
              <View style={styles.todo_card} key={task.description}>
                <Checkbox
                  status={task.status}
                  onPress={() => handleMarkAsDone(task, index)}
                />
                <Text style={styles.text}>{task.description}</Text>
                <IconButton
                  icon={"delete"}
                  iconColor="#E25858"
                  onPress={() => handleDelete(task.description)}
                />
              </View>
            ))}
          </ScrollView>
        ) : (
          <>
            <View style={{ alignItems: "center", padding: 5 }}>
              <Image source={Clipboard} style={{ marginBottom: 10 }} />
              <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={{ color: "white", fontSize: 16 }}>
                Crie tarefas e organize seus items a fazer
              </Text>
            </View>
          </>
        )}
      </View>
    </>
  );
}
