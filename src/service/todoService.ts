import { ITodo } from "../types/todo.types";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ITodoService {
  getTodos(): Promise<ITodo[]>;
  setTodos(tarefas: ITodo[]): Promise<void>;
}

export const todoService: ITodoService = {
  async getTodos(): Promise<ITodo[]> {
    const tarefas = await AsyncStorage.getItem("@todolist");
    return tarefas ? JSON.parse(tarefas) : [];
  },

  async setTodos(tarefas: ITodo[]): Promise<void> {
    await AsyncStorage.setItem("@todolist", JSON.stringify(tarefas));
  },
};
