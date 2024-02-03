import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import accountSvg from '../../assets/svg/account.svg'
import cartSvg from '../../assets/svg/cart.svg'
import searchSvg from '../../assets/svg/search.svg'
import wishListSvg from '../../assets/svg/wishList.svg'
import profileSvg from '../../assets/svg/profilemenu.svg'
import orderSvg from '../../assets/svg/order.svg'
import cancelSvg from '../../assets/svg/cansel.svg'
import reviewsSvg from '../../assets/svg/reviews.svg'
import logoutSvg from '../../assets/svg/logout.svg'
import './Header.css'

function Header() {
	const { t, i18n } = useTranslation()
	const [openPopup, setOpenPopup] = useState(false)

	let token = localStorage.getItem('accessToken')
	console.log(token)

	const handleChangeLanguage = event => {
		const selectLng = event.target.value
		i18n.changeLanguage(selectLng)
	}
	return (
		<>
			<div className='top-header'>
				<p>
					Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
				</p>
				<select onChange={handleChangeLanguage} defaultValue={i18n.language}>
					<option value='en'>EN</option>
					<option value='ru'>Rus</option>
					<option value='ky'>KGZ</option>
				</select>
			</div>
			<header className='header'>
				<nav className='navs container'>
					<div className='nav-bar'>
						<div className='logo'>
							<Link to='/'>{t('exclusive')}</Link>
						</div>
						<ul>
							<li>
								<Link to='/'>Home</Link>
							</li>
							<li>
								<Link to='/contact'>{t('contact')}</Link>
							</li>
							<li>
								<Link to='/about'>{t('about')}</Link>
							</li>
							<li>
								<Link to='/register'>Sign Up</Link>
							</li>
						</ul>
					</div>
					<div className='nav-bar-cart'>
						<div className='search'>
							<input type='text' placeholder='What are you looking for?' />
							<img src={searchSvg} alt='search' />
						</div>
						<div className='nav-bar-icon'>
							<Link to='/wishlist'>
								<img src={wishListSvg} alt='wishList' />
							</Link>
							<Link to='/cart'>
								<img src={cartSvg} alt='cart' />
							</Link>
							<div className='account-profile'>
								<img
									onClick={() => setOpenPopup(!openPopup)}
									className='account-avatar'
									alt='avatar svg'
									src={accountSvg}
								/>
								{openPopup && (
									<div className='account-menu'>
										<div className='drop-menu'>
											<div className='drop-item'>
												<img src={profileSvg} alt='profile icon' />
												<Link
													onClick={() => setOpenPopup(!openPopup)}
													to='/account'
												>
													Manage My Account
												</Link>
											</div>
											<div className='drop-item'>
												<img src={orderSvg} alt='order icon' />
												<Link>My Order</Link>
											</div>
											<div className='drop-item'>
												<img src={cancelSvg} alt='cancel icon' />
												<Link>My Cancellations</Link>
											</div>
											<div className='drop-item'>
												<img src={reviewsSvg} alt='profile icon' />
												<Link>My Reviews</Link>
											</div>
											<div className='drop-item'>
												<img src={logoutSvg} alt='profile icon' />
												<Link>Logout</Link>
											</div>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				</nav>
			</header>
		</>
	)
}

export default Header
