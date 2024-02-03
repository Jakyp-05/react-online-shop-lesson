import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		carts: [],
	},
	reducers: {
		addCart: (state, action) => {
			state.carts.push(action.payload)
		},
	},
})

export const { addCart } = cartSlice.actions
export default cartSlice.reducer
