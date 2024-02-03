import React from 'react'

import './Button.css'

function Button({ title, pd, onclick }) {
	return (
		<button
			onClick={onclick}
			style={{ padding: `16px ${pd}px` }}
			className='button'
		>
			{title}
		</button>
	)
}

export default Button
