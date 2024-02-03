import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
	name: 'todos',
	initialState: {
		todos: [],
	},
	reducers: {
		addTodo: (state, action) => {
			state.todos.push({
				id: Date.now(),
				text: action.payload,
				completed: false,
			})
		},
		removeTodo: (state, action) => {
			state.todos = state.todos.filter(x => x.id !== action.payload)
		},
		// toggleTodo: (state, action) => {
		// 	const toggleComplete = state.todos.find(
		// 		todo => todo.id === action.payload
		// 	)
		// 	toggleComplete.completed = !toggleComplete.completed
		// },
		// toggleTodo: (state, action) => {
		// 	const index = state.todos.findIndex(todo => todo.id === action.payload.id)
		// 	if (index !== -1) {
		// 		state.todos[index].completed = !state.todos[index].completed
		// 	}
		// },
		toggleTodo: (state, action) => {
			const itemTodo = state.todos.find(todo => todo.id === action.payload)
			if (itemTodo) {
				itemTodo.completed = !itemTodo.completed
			}
		},
		removeAllCheck: state => {
			state.todos = state.todos.filter(item => !item.completed)
		},
	},
})

export const { addTodo, removeTodo, toggleTodo, removeAllCheck } =
	todoSlice.actions
export default todoSlice.reducer
