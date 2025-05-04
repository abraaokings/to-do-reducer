import { useReducer, useState } from "react";
import { Todo, Action } from "../../types/Todo";
import style from "./TodoReducer.module.css";

const todoReducer = (state: Todo[], action: Action): Todo[] => {
    switch(action.type) {
        case 'ADD_TODO':
            return [...state, {
                id: Date.now(),
                text: action.text,
                completed: false,
            }]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.id
                ? { ...todo, completed: !todo.completed }
                : todo
            )
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.id)
        default:
            return state
    }
}

export const TodoReducer = () => {

    const [todos, dispatch] = useReducer(todoReducer, []);
    const [newTodo, setNewTodo] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(newTodo.trim()) {
            dispatch({ type: 'ADD_TODO', text: newTodo.trim() })
            setNewTodo('');
        } 
    }

    return (
        
        <div className={style.todoContainer}>
            <h1>Lista de Tarefas</h1>

            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Adicionar nova tarefa"
                />
                <button type="submit">+</button>
            </form>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <input 
                        type="checkbox" 
                        checked={todo.completed}
                        onChange={() => dispatch({ type: 'TOGGLE_TODO', id: todo.id })}    
                    />
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                            {todo.text}
                        </span>
                        <button onClick={() => dispatch({ type: 'REMOVE_TODO', id: todo.id })}>
                            x
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}