import { ITasks } from "../../../types/ITasks";

export function handleMarkAsDone(
  setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>,
  tasks: ITasks[],
  task: ITasks,
  index: number
) {
  const finishedTask = [...tasks];

  finishedTask[index] = {
    ...finishedTask[index],
    status: finishedTask[index].status === "checked" ? "unchecked" : "checked",
  };

  setTasks(finishedTask);
}
