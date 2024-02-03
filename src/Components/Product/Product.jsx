import React from 'react'
import { useDispatch } from 'react-redux'

import likeSvg from '../../assets/svg/wishList.svg'
import seeSvg from '../../assets/svg/view.svg'
import Star from '../../assets/svg/star'
import './Product.css'

import { addCart } from '../../redux/Cart/cartSlice'

function Product({ item }) {
	const dispatch = useDispatch()

	const addToCart = product => {
		dispatch(addCart(product))
	}

	return (
		<div className='product-item'>
			<div className='product-image'>
				<div className='main-image'>
					<img src={item.image} alt='item title' />
				</div>
				<div className='product-discount'>40%</div>
				<div className='icons'>
					<div className='icon'>
						<img src={likeSvg} alt='like svg' />
					</div>
					<div className='icon'>
						<img src={seeSvg} alt='see like' />
					</div>
				</div>
				<button onClick={() => addToCart(item)} className='product-btn'>
					Add To Cart
				</button>
			</div>
			<div className='product-ditail'>
				<p className='product-title'>{item.name}</p>
				<div className='prices'>
					<p className='discount-ptice'>{item.price}</p>
					<p className='price'>{item.currency}</p>
				</div>
				<div className='datail-rating'>
					<div className='stars'>
						{[1, 2, 3, 4, 5].map((star, index) => (
							<Star key={index} fill={star <= 4 ? '#FFAD33' : 'gray'} />
						))}
						<p>({item.views_count})</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Product
