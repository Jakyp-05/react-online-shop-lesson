import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel'
import React, { useEffect, useState } from 'react'

import mainImage from '../../assets/image/Ihpone.png'
import Product from '../Product/Product'
import Button from '../UI/Button/Button'
import Timer from '../Timer/Timer'
import './Home.css'

const API = 'http://178.128.162.248:8070/api/v1/advertisement/ads/'

function Home({ item }) {
	const [product, setProduct] = useState([])

	useEffect(() => {
		const getProduct = async () => {
			try {
				const res = await axios.get(API)
				console.log(res.data.results)
				if (res.status === 200) {
					setProduct(res.data.results)
				}
			} catch (error) {
				console.log(error)
			}
		}
		getProduct()
	}, [])

	return (
		<div>
			<section className='home container'>
				<div className='home-sidebar'>
					<ul>
						<li>Woman’s Fashion</li>
						<li>Men’s Fashion</li>
						<li>Electronics</li>
						<li>Home & Lifestyle</li>
						<li>Medicine</li>
						<li>Sports & Outdoor</li>
						<li>Baby’s & Toys</li>
						<li>Groceries & Pets</li>
						<li>Health & Beauty</li>
					</ul>
				</div>
				<div className='home-carousel'>
					<Carousel>
						<Carousel.Item>
							{/* <ExampleCarouselImage text='First slide' /> */}
							<img src={mainImage} alt='main image' />
							<Carousel.Caption>
								<h3>First slide label</h3>
								<p>
									Nulla vitae elit libero, a pharetra augue mollis interdum.
								</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							{/* <ExampleCarouselImage text='Second slide' /> */}
							<img src={mainImage} alt='main image' />
							<Carousel.Caption>
								<h3>Second slide label</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							{/* <ExampleCarouselImage text='Third slide' /> */}
							<img src={mainImage} alt='main image' />
							<Carousel.Caption>
								<h3>Third slide label</h3>
								<p>
									Praesent commodo cursus magna, vel scelerisque nisl
									consectetur.
								</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</div>
			</section>
			<section className='home-product container'>
				<div className='timer'>
					<div className='timer-date'>
						<div className='date-title'>
							<div className='date-text'>
								<div className='line'></div>
								<h2>Today's</h2>
							</div>
							<h2>Flash Sales</h2>
						</div>
						<div className='date-hours'>
							<Timer />
						</div>
					</div>
				</div>
				<div className='products'>
					{product.map(item => (
						<Product key={item.id} item={item} />
					))}
				</div>
				<div className='buttonbek'>
					<Button title='View All Products' pd={48} />
				</div>
			</section>
		</div>
	)
}

export default Home
