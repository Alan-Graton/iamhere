import React from "react";
// Widgets
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Checkbox, IconButton } from "react-native-paper";
// Types
import { ITasks } from "../../types/ITasks";
// Components
import { EmptyList } from "../../components/EmptyList/EmptyList";
// Utils
import { handleCreate } from "./utils/handleCreate";
import { handleDeleteTask } from "./utils/handleDeleteTask";
import { handleMarkAsDone } from "./utils/handleMarkAsDone";
// Styles
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

export function Home() {
  const [fontsLoaded, fontError] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  const [tasks, setTasks] = React.useState<ITasks[]>([]);
  const [taskName, setTaskName] = React.useState<string>("");

  let createdTasks = tasks.length;
  let checkedTasks = tasks.filter((task) => task.status === "checked").length;

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
            onPress={() => handleCreate(setTasks, tasks, taskName)}
          >
            <Text style={{ fontSize: 24, color: "#FFF" }}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tasks_counters}>
          <Text style={styles.text}>Criadas: {createdTasks}</Text>
          <Text style={styles.text}>Concluidas: {checkedTasks}</Text>
        </View>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.description}
          ListEmptyComponent={<EmptyList />}
          renderItem={({ item, index }) => (
            <View style={styles.todo_card} key={item.description}>
              <Checkbox
                status={item.status}
                onPress={() => handleMarkAsDone(setTasks, tasks, item, index)}
              />
              <Text style={styles.text}>{item.description}</Text>
              <IconButton
                icon={"delete"}
                iconColor="#E25858"
                onPress={() =>
                  handleDeleteTask(setTasks, tasks, item.description)
                }
              />
            </View>
          )}
        />
      </View>
    </>
  );
}
