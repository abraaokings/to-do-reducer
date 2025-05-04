export type Todo = {
    id: number,
    text: string,
    completed: boolean,
}

export type Action = 
    | { type: 'ADD_TODO'; text: string }
    | { type: 'TOGGLE_TODO'; id: number }
    | { type: 'REMOVE_TODO'; id: number }