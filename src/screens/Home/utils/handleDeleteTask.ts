import { Alert } from "react-native";
import { ITasks } from "../../../types/ITasks";

export function handleDeleteTask(
  setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>,
  tasks: ITasks[],
  pressedTask: string
) {
  Alert.alert(`Deletar tarefa "${pressedTask}"?`, "Deseja continuar?", [
    {
      text: "Sim",
      onPress: () => {
        const removeTask = tasks.filter((el) => el.description !== pressedTask);

        setTasks((prev) => [...removeTask]);
      },
    },
    {
      text: "Não",
      style: "cancel",
    },
  ]);
}
