import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import phoneImage from '../../../assets/image/phone.png'
import Button from '../../UI/Button/Button'
import '../Auth.css'

const API = 'https://api.escuelajs.co/api/v1/auth/login'
const API_USER_INFO = 'https://api.escuelajs.co/api/v1/auth/profile'

function Login() {
	const [user, setUser] = useState({ email: '', password: '' })
	const [info, setInfo] = useState([])

	const handleChange = event => {
		const { name, value } = event.target
		setUser({ ...user, [name]: value })
	}

	const handleLogin = async () => {
		try {
			const data = await axios.post(API, user)
			console.log(data)

			localStorage.setItem('accessToken', data.data.access_token)

			const userInfo = await axios.get(API_USER_INFO, {
				headers: {
					Authorization: `Bearer ${data.data.access_token}`,
				},
			})
			console.log(userInfo)

			setInfo(userInfo.data)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<section className='signup-container'>
			<img src={phoneImage} alt='phone image' />
			<div className='register-content'>
				<div className='register-header'>
					<h2>Log in to Exclusive</h2>
					<p>Enter your details below</p>
				</div>
				<div className='register-form'>
					<div className='inputs'>
						<input
							onChange={handleChange}
							value={user.email}
							type='email'
							name='email'
							placeholder='email'
						/>
						<input
							onChange={handleChange}
							value={user.password}
							name='password'
							type='password'
							placeholder='password'
						/>
					</div>
					<div className='login-buttons'>
						<Button onclick={handleLogin} title='Log In' pd={48} />
						<Link>Forget Password?</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Login
