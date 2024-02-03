import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

import googleSvg from '../../../assets/svg/google.svg'
import phoneImage from '../../../assets/image/phone.png'
import Button from '../../UI/Button/Button'
import '../Auth.css'
import { useState } from 'react'

const API_Users = 'https://api.escuelajs.co/api/v1/users/'

function Signup() {
	const [user, setUser] = useState({
		email: '',
		name: '',
		password: '',
		avatar: 'https://i.imgur.com/5mPmJYO.jpeg',
	})

	const handleChange = event => {
		const { name, value } = event.target
		setUser({ ...user, [name]: value })
	}

	const handleSubmitForms = event => {
		event.preventDefault()
		// console.log(user)
		const getUser = async () => {
			try {
				const res = await axios.post(API_Users, {
					...user,
				})
				console.log(res)
				setUser({
					name: '',
					email: '',
					password: '',
					avatar: 'https://i.imgur.com/5mPmJYO.jpeg',
				})
			} catch (error) {
				console.log(error)
			}
		}
		getUser()
	}
	return (
		<section className='signup-container'>
			<img src={phoneImage} alt='phone image' />
			<div className='register-content'>
				<div className='register-header'>
					<h2>Create an account</h2>
					<p>Enter your details below</p>
				</div>
				<form className='register-form' onSubmit={handleSubmitForms}>
					<div className='inputs'>
						<input
							onChange={handleChange}
							value={user.name}
							type='name'
							name='name'
							placeholder='name'
						/>
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
					<div className='button-container'>
						<Button title='Create Account' pd={122} />
						<button className='create-account-google'>
							<img src={googleSvg} alt='google icon' />
							<p>Sign Up with Google</p>
						</button>
						<div className='login-link'>
							<p>Already have account?</p>
							<Link to='/login'>Log in</Link>
						</div>
					</div>
				</form>
			</div>
		</section>
	)
}

export default Signup
