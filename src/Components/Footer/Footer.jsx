import React from 'react'
import { Link } from 'react-router-dom'

import iconSvg from '../../assets/svg/icon-footer.svg'
import qrImage from '../../assets/svg/QR.svg'
import playImage from '../../assets/svg/play.svg'
import appStrorImage from '../../assets/svg/appStore.svg'
import instagramSvg from '../../assets/svg/instagram.svg'
import twitterSvg from '../../assets/svg/twiiter.svg'
import linkSvg from '../../assets/svg/link.svg'
import facebookSvg from '../../assets/svg/facebook.svg'
import messageSvg from "../../assets/svg/message.svg"

import './Footer.css'

function Footer() {
	return (
		<footer className='footer'>
			<div className='footer-container container'>
				<div className='footer-content'>
					<div className='footer-menu'>
						<h2 style={{fontWeight: "700"}}>Exclusive</h2>
						<div className='support-text'>
							<h2>Subscribe</h2>
						</div>
            <div className='support-text'>
              <p>Get 10% off your first order</p>
            </div>
            <div className='footer-message'>
              <input type='text' placeholder='Enter you email'/>
              <img src={messageSvg} alt='message'/>
            </div>
					</div>
					<div className='footer-menu'>
						<h2>Support</h2>
						<div className='support-text'>
							<p>
								111 Bijoy sarani, Dhaka,
								<br /> DH 1515, Bangladesh.
							</p>
							<p>exclusive@gmail.com</p>
							<p>+88015-88888-9999</p>
						</div>
					</div>
					<div className='footer-menu'>
						<h2>Account</h2>
						<div className='support-text'>
							<p>My Account</p>
							<p>Login / Register</p>
							<p>
								<Link to='/cart'>Cart</Link>
							</p>
							<p>
								<Link to='/wishlist'>Wishlist</Link>
							</p>
							<p>Shop</p>
						</div>
					</div>
					<div className='footer-menu'>
						<h2>Quick Link</h2>
						<div className='support-text'>
							<p>Privacy Policy</p>
							<p>Terms Of Use</p>
							<p>FAQ</p>
							<p>
								<Link to='/contact'>Contact</Link>
							</p>
						</div>
					</div>
					<div className='footer-menu'>
						<h2>Download App</h2>
						<div className='downland'>
							<div className='downland-text'>
								<p>Save $3 with App New User Only</p>
							</div>
							<div className='downland-icon'>
								<div className='icon-qr'>
									<img src={qrImage} alt='qr code' />
								</div>
								<div className='icon-play'>
									<img src={playImage} alt='play market' />
									<img src={appStrorImage} alt='app store' />
								</div>
							</div>
						</div>
						<div className='social-icon'>
							<img src={facebookSvg} alt='facebook image' />
							<img src={instagramSvg} alt='facebook image' />
							<img src={twitterSvg} alt='facebook image' />
							<img src={linkSvg} alt='facebook image' />
						</div>
					</div>
				</div>
				<div className='footer-ubdates'>
					<div className='footer-line'></div>
					<div className='footer-line-title'>
						<div className='footer-line-title-text'>
							<img
								style={{ width: '16px', height: '16px', opacity: '0.4' }}
								src={iconSvg}
								alt='icon svg'
							/>
							<p>Copyright Rimel 2022. All right reserved</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
