import { useReducer, useState } from "react";
import "./App.css";
import { TodoInput } from "./components/TodoInput";
import { TodoItem } from "./components/TodoItem";
import { Todo, Action } from "./types/Todo";

function todoReducer(state: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.text,
          completed: false,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      dispatch({ type: "ADD_TODO", text: newTodo.trim() });
      setNewTodo("");
    }
  };

  const handleToggle = (id: number) => {
    dispatch({ type: "TOGGLE_TODO", id });
  };

  const handleRemove = (id: number) => {
    dispatch({ type: "REMOVE_TODO", id });
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-900 font-sans">
      <div className="bg-gray-800 rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-2xl text-gray-100">Lista de Tarefas</h1>
          <TodoInput
            newTodo={newTodo}
            setNewTodo={setNewTodo}
            handleSubmit={handleSubmit}
          />
        </div>

        <div>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={handleToggle}
              onRemove={handleRemove}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;