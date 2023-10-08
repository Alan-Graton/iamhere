import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#0D0D0D",
  },
  header: {
    padding: 10,
    gap: 10,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#FFF",
    fontSize: 24,
    fontFamily: "Inter_700Bold",
  },
  text: {
    color: "#F2F2F2",
    fontFamily: "Inter_300Light",
  },
  form: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 20,
  },
  new_task_input: {
    flex: 1,
    padding: 16,
    fontSize: 16,
    fontFamily: "Inter_300Light",
    height: 55,
    backgroundColor: "#808080",
    marginRight: 12,
    borderRadius: 4,
    color: "#F2F2F2",
  },
  new_task_btn: {
    backgroundColor: "#1E6F9F",
    width: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  tasks_counters: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginBottom: 10,
  },
  todo_card: {
    marginBottom: 15,
    backgroundColor: "#808080",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 4,
  },
  todo_action: {},
  todo_content: {},
});
