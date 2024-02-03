import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addTodo, removeAllCheck } from '../../redux/Todo/todoSlice'
import ItemTodo from './ItemTodo'

import './Contact.css'

function Contact() {
	const [title, setTitle] = useState('')
	const dispatch = useDispatch()

	const handleAddTodo = () => {
		dispatch(addTodo(title))
		setTitle('')
	}

	const handleRemoveAllCheck = () => {
		dispatch(removeAllCheck())
	}

	return (
		<div className='contact'>
			<input
				type='text'
				value={title}
				onChange={e => setTitle(e.target.value)}
				placeholder='Enter text'
			/>
			<button
				onClick={handleAddTodo}
				disabled={!title.trim()}
				className='addBtn'
			>
				Add Todo
			</button>
			<button onClick={handleRemoveAllCheck} className='addBtn'>
				Remove All Check
			</button>
			<ItemTodo />
		</div>
	)
}

export default Contact
