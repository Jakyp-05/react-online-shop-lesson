import { configureStore } from '@reduxjs/toolkit'

import todoReducer from './Todo/todoSlice'
import cartSlice from './Cart/cartSlice'

const store = configureStore({
	reducer: {
		todo: todoReducer,
		cart: cartSlice,
	},
})

export default store
