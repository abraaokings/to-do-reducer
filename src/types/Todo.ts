export type Todo = {
    id: number,
    text: string,
    completed: boolean,
}

export type TodoInputProps = {
    newTodo: string;
    setNewTodo: (value: string) => void;
    handleSubmit: (e: React.FormEvent) => void;
  }

export type Action = 
    | { type: 'ADD_TODO'; text: string }
    | { type: 'TOGGLE_TODO'; id: number }
    | { type: 'REMOVE_TODO'; id: number }

