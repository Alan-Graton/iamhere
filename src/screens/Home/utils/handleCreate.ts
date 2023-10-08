import Toast from "react-native-toast-message";
import { ITasks } from "../../../types/ITasks";

export function handleCreate(
  setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>,
  tasks: ITasks[],
  task: string
): void {
  if (tasks.find((el) => el.description === task)) {
    // FIXME: Toast not displaying
    Toast.show({
      type: "error",
      text1: "Opa!",
      text2: "Você já cadastrou uma tarefa igual a essa",
    });
    return;
  }

  if (!task) return;

  setTasks((prev) => [...prev, { description: task, status: "unchecked" }]);
}
