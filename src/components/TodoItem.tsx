import { Todo } from '../types/Todo';

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

export function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
  return (
    <div className="flex mb-4 items-center">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-5 h-5 mr-3 rounded border-gray-600 bg-gray-700 text-blue-500 focus:ring-0 focus:ring-offset-0"
      />
      <p
        onClick={() => onToggle(todo.id)}
        className={`w-full ${
          todo.completed ? "line-through text-gray-500" : "text-gray-100"
        } cursor-pointer`}
      >
        {todo.text}
      </p>
      <button
        onClick={() => onRemove(todo.id)}
        className="ml-2 text-gray-400 hover:text-gray-300"
      >
        ×
      </button>
    </div>
  );
}