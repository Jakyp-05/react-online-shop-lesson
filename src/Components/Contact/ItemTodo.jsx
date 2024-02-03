import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { removeTodo, toggleTodo } from '../../redux/Todo/todoSlice'

import './Contact.css'

function ItemTodo() {
	const todos = useSelector(state => state.todo.todos)
	const dispatch = useDispatch()

	const handleDelete = id => {
		dispatch(removeTodo(id))
	}

	const handleComplete = id => {
		dispatch(toggleTodo(id))
	}

	return (
		<ul>
			{todos.map(item => (
				<li key={item.id}>
					<input
						type='checkbox'
						checked={item.completed}
						onChange={() => handleComplete(item.id)}
					/>
					<p className={item.completed ? 'text' : ''}>{item.text}</p>
					<button onClick={() => handleDelete(item.id)} className='addBtn'>
						Delete
					</button>
				</li>
			))}
		</ul>
	)
}

export default ItemTodo
