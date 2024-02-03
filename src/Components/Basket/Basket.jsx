import React from 'react'

import topSvg from '../../assets/svg/top.svg'
import bottomSvg from '../../assets/svg/bottom.svg'

import './Basket.css'
import { useSelector } from 'react-redux'

function Basket() {
	const cart = useSelector(state => state.cart.carts)

	console.log(cart)
	return (
		<div className='basket container'>
			<div className='basket-top'>
				<table>
					<thead>
						<tr>
							<th>Product</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>Subtotal</th>
						</tr>
					</thead>
					<tbody>
						{cart.map(data => (
							<tr key={data.id}>
								<td>
									<img className='cart-image' src='' alt='' />
									<span>title</span>
								</td>
								<td>price</td>
								<td className='box'>
									<div className='quantity'>
										<p>1</p>
										<div className='quantity-count'>
											<img src={topSvg} alt='top image' />
											<img src={bottomSvg} alt='bottom image' />
										</div>
									</div>
								</td>
								<td>$</td>
							</tr>
						))}
					</tbody>
				</table>
				<div className='basket-button'></div>
			</div>
			<div className='basket-main'></div>
		</div>
	)
}

export default Basket
