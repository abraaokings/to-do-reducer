import { TodoInputProps } from "../types/Todo";


export function TodoInput({ newTodo, setNewTodo, handleSubmit }: TodoInputProps) {
  return (
    <form onSubmit={handleSubmit} className="flex mt-4">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Adicionar nova tarefa"
        className="bg-gray-700 shadow appearance-none border-none rounded w-full py-2 px-3 mr-4 text-gray-100 placeholder-gray-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-gray-700 text-gray-100 rounded hover:bg-gray-600"
      >
        +
      </button>
    </form>
  );
}