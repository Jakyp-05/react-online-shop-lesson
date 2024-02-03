import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './account.css'
import Button from '../UI/Button/Button'

function Account() {
	const [openPopup, setOpenPopup] = useState(false)
	const [openPopupOrder, setOpenPopupOrder] = useState(false)
	const [openPopupList, setOpenPopupList] = useState(false)

	const visiblePopup = () => {
		setOpenPopup(!openPopup)
	}

	const visiblePopupOrder = () => {
		setOpenPopupOrder(!openPopupOrder)
	}

	const visiblePopupList = () => {
		setOpenPopupList(!setOpenPopupList)
	}

	return (
		<section className='container'>
			<div className='top-account'>
				<div className='child-1'>
					<Link to='/'>Home /</Link>
					<span>My Account</span>
				</div>
				<div className='child-2'>
					<p>
						Welcome! <span className='child-item'>Zhakyp</span>
					</p>
				</div>
			</div>
			<div className='main-account'>
				<div className='profile'>
					<div className='profile-item'>
						<h4 onClick={visiblePopup}>Manage My Account</h4>
						{openPopup && (
							<div className='option-account'>
								<p className='option-text'>My Profile</p>
								<p>Address Book</p>
								<p>My Payment Options</p>
							</div>
						)}
					</div>
					<div className='profile-item'>
						<h4 onClick={visiblePopupOrder}>My Orders</h4>
						{openPopupOrder && (
							<div className='option-account'>
								<p>My Returns</p>
								<p>My Cancellations</p>
							</div>
						)}
					</div>
					<div className='profile-item'>
						<h4 onClick={visiblePopupList}>My Wishlist</h4>
						{openPopupList && <div className='option-account'></div>}
					</div>
				</div>
				<form className='form-inputs'>
					<h2>Edit Your Profile</h2>
					<div className='input-names'>
						<div className='input-name'>
							<label>First Name</label>
							<input type='text' placeholder='Md' />
						</div>
						<div className='input-name'>
							<label>Last Name</label>
							<input type='text' placeholder='Rimel' />
						</div>
					</div>
					<div className='input-names'>
						<div className='input-name'>
							<label>Email</label>
							<input type='text' placeholder='rimel1111@gmail.com' />
						</div>
						<div className='input-name'>
							<label>Address</label>
							<input type='text' placeholder='Kingston, 5236, United State' />
						</div>
					</div>
					<div className='form-passwords'>
						<h2>Password Changes</h2>
						<div className='form-password'>
							<input type='password' placeholder='Current Password' />
							<input type='password' placeholder='New Password' />
							<input type='password' placeholder='Confirm New Password' />
						</div>
					</div>
					<div className='form-btns'>
						<p>Cancel</p>
						<Button title='Save Changes' pd={48} />
					</div>
				</form>
			</div>
		</section>
	)
}

export default Account
