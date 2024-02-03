import { Route, Routes } from 'react-router-dom'

import Layout from './Components/Layout/Layout'
import MyAccount from './pages/MyAccount'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import CartPage from './pages/CartPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import NotFound from './pages/NotFound'
import WishList from './pages/WishListPage'

import './App.css'
import Register from './pages/Register'

function App() {
	return (
		<div className='Wrapper'>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='/' element={<HomePage />} />
					<Route path='/contact' element={<ContactPage />} />
					<Route path='/about' element={<AboutPage />} />
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/account' element={<MyAccount />} />
					<Route path='/cart' element={<CartPage />} />
					<Route path='/wishlist' element={<WishList />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
