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

export function Home() {
  const [tasks, setTasks] = React.useState<string[]>([]);
  const [task, setTask] = React.useState<string>("");

  function handleCreate(task: string): void {
    if (tasks.find((el) => el === task)) {
      // FIXME: Toast not displaying
      Toast.show({
        type: "error",
        text1: "Opa!",
        text2: "Você já cadastrou uma tarefa igual a essa",
      });
      return;
    }
    setTasks((prev) => [...prev, task]);
  }
  function handleMarkAsDone() {}

  function handleDelete(pressedTask: string) {
    const removeTask = tasks.filter((el) => el !== pressedTask);

    setTasks((prev) => [...removeTask]);
  }

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
        {/* TODO: Get rid of this big hunk of code and use FlatList */}
        {tasks.length > 0 ? (
          <ScrollView>
            {tasks?.map((task) => (
              <View style={styles.todo_card} key={task}>
                <Checkbox status="checked" />
                <Text style={styles.text}>{task}</Text>
                <IconButton
                  icon={"delete"}
                  iconColor="#E25858"
                  onPress={() => handleDelete(task)}
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
