import {
  createContext,
  Dispatch,
  ReactNode,
  useEffect,
  useReducer,
} from "react";
import { ITodo } from "../types/todo.types";
import { todoService } from "../service/todoService";
import { ToastAndroid } from "react-native";

type Action =
  | { type: "add-todo"; payload: ITodo }
  | { type: "remove-todo"; payload: string }
  | { type: "att-todo"; payload: ITodo }
  | { type: "fetch-todos"; payload: ITodo[] };

const todosReducer = (state: ITodo[], action: Action): ITodo[] => {
  switch (action.type) {
    case "add-todo":
      return [...state, action.payload];
    case "remove-todo":
      return state.filter((todo) => todo.id !== action.payload);
    case "att-todo":
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
      );
    case "fetch-todos":
      return action.payload;
    default:
      return state;
  }
};
interface TodoContextProps {
  dispatch: Dispatch<Action>;
  todos: ITodo[];
  showToast: (message: string) => void;
}

const TodoContext = createContext<TodoContextProps | undefined>(undefined);

const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, dispatch] = useReducer(todosReducer, []);
  useEffect(() => {
    const fetchTodos = async () => {
      const storedTodos = await todoService.getTodos();
      dispatch({ type: "fetch-todos", payload: storedTodos });
    };
    fetchTodos();
  }, []);

  useEffect(() => {
    todoService.setTodos(todos);
  }, [todos]);
  const showToast = (message: string) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };
  return (
    <TodoContext.Provider value={{ todos, dispatch, showToast }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
