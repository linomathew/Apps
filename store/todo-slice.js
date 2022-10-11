import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'

const initialState = {
    todos: []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add(state, action) {
            state.todos.push({
                id: uuid(),
                title: action.payload.title,
                isCompleted: false
            })
        },
        remove(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        },
        toggleComplete(state, action) {
            const todo = state.todos.find(todo => todo.id === action.payload.id)
            todo.isCompleted = action.payload.isCompleted
        }
    }
})

export const todoActions = todoSlice.actions
export default todoSlice