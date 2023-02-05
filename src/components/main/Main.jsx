import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import { Loader } from '../../components/loader/loader';
import { HomePage } from '../../pages/HomePage';
import { BookingPage } from '../../pages/BookingPage';

import './main.css';
import deliveryIcon from '../../images/bike-delivery-icon.svg';
import starIcon from '../../images/8fab66317d6c35dc211a165dbc3735e15466ae68.png';
import user1 from '../../images/08c5772c481233a30a46aeca552132053604e2a8.jpg';
import user2 from '../../images/3ca412176fe4306326b04a78b51fa148c49f99c1.jpg';
import user3 from '../../images/44dd2beb0c06094368ffbb7fa1843005cfdae174.jpg';
import user4 from '../../images/b64f988f077b50ffdab0afee9de4d701e4a9d5da.jpg';
import owners1 from '../../images/Mario and Adrian A.jpg';
import owners2 from '../../images/Mario and Adrian b.jpg';

export function Main() {
	return (
		<>
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route
						path='/'
						element={<HomePage />}></Route>
					<Route
						path='/booking'
						element={<BookingPage />}></Route>
				</Routes>
			</Suspense>

			<main>
				<section className='hero'>
					<div className='container'>
						<div className='heroWrapper'>
							<div className='heroLeft'>
								<h1 className='heroHeading'>Little Lemon</h1>
								<p className='heroSubHeading'>Chicago</p>
								<p className='heroText'>
									We are a family owned Mediterranean restaurant, focused on traditional
									recipes served with a modern twist.
								</p>
								<button
									type='button'
									className='button heroButton'>
									Reserve a table
								</button>
							</div>
							<div className='heroRight'>
								<div className='heroImageWrapper'></div>
							</div>
						</div>
					</div>
				</section>
				<section className='specials'>
					<div className='container'>
						<div className='specialsHeadingWrapper'>
							<h2 className='specialsHeading'>This week specials!</h2>
							<button
								type='button'
								className='button specialsButton'>
								Online menu
							</button>
						</div>
						<ul className='specialsCardsWrapper'>
							<li className='specialsCard'>
								<article>
									<div className='specialsCardImage specialsCardImageOne'></div>
									<div className='specialsCardInfo'>
										<div className='specialsCardHeading'>
											<h3>Greek Salad</h3>
											<p>$12.99</p>
										</div>
										<div className='specialsCardTextWrapper'>
											<p className='specialsCardText'>
												The famous Greek salad of crispy lettuce, peppers, olives and our
												Chicago style feta cheese, garnished with crunchy garlic and
												rosemary croutons.
											</p>
											<a
												href=''
												className='specialsCardDelivery'>
												<span>Order a delivery</span>
												<img
													src={deliveryIcon}
													alt='delivery icon'
													width='20'
												/>
											</a>
										</div>
									</div>
								</article>
							</li>
							<li className='specialsCard'>
								<article>
									<div className='specialsCardImage specialsCardImageTwo'></div>
									<div className='specialsCardInfo'>
										<div className='specialsCardHeading'>
											<h3>Bruschetta</h3>
											<p>$5.99</p>
										</div>
										<div className='specialsCardTextWrapper'>
											<p className='specialsCardText'>
												Our Bruschetta is made from grilled bread that has been smeared with
												garlic and seasoned with salt and olive oil.
											</p>
											<a
												href=''
												className='specialsCardDelivery'>
												<span>Order a delivery</span>
												<img
													src={deliveryIcon}
													alt='delivery icon'
													width='20'
												/>
											</a>
										</div>
									</div>
								</article>
							</li>
							<li className='specialsCard'>
								<article>
									<div className='specialsCardImage specialsCardImageThree'></div>
									<div className='specialsCardInfo'>
										<div className='specialsCardHeading'>
											<h3>Lemon dessert</h3>
											<p>$5.00</p>
										</div>
										<div className='specialsCardTextWrapper'>
											{' '}
											<p className='specialsCardText'>
												This comos straight from grandma’s recipe book, every last
												ingredient has been sourced and is as authentic as can be imagined.
											</p>
											<a
												href=''
												className='specialsCardDelivery'>
												<span>Order a delivery</span>
												<img
													src={deliveryIcon}
													alt='delivery icon'
													width='20'
												/>
											</a>
										</div>
									</div>
								</article>
							</li>
						</ul>
					</div>
				</section>
				<section className='testimonials'>
					<div className='container'>
						<h2 className='testimonialsHeading'>Testimonials</h2>
						<div className='testimonialsWrapper'>
							<ul className='testimonialsList'>
								<li className='testimonialsItem'>
									<div className='testimonialsCardWrapper'>
										<div className='testimonialsRating'>
											<img
												src={starIcon}
												alt='starIcon'
											/>
											<img
												src={starIcon}
												alt='starIcon'
											/>
										</div>
										<div className='testimonialsProfile'>
											<img
												className='testimonialsProfileImage'
												src={user1}
												alt=''
											/>
											<p className='testimonialsProfileName'>Tina Carpenter</p>
										</div>
										<div className='testimonialsText'>
											<p>
												Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
												nam cupiditate similique soluta. Quos dolore aliquam commodi non
												minima labore?
											</p>
										</div>
									</div>
								</li>

								<li className='testimonialsItem'>
									<div className='testimonialsCardWrapper'>
										<div className='testimonialsRating'>
											<img
												src={starIcon}
												alt='starIcon'
											/>{' '}
											<img
												src={starIcon}
												alt='starIcon'
											/>
											<img
												src={starIcon}
												alt='starIcon'
											/>
											<img
												src={starIcon}
												alt='starIcon'
											/>
											<img
												src={starIcon}
												alt='starIcon'
											/>
										</div>
										<div className='testimonialsProfile'>
											<img
												className='testimonialsProfileImage'
												src={user2}
												alt=''
											/>
											<p className='testimonialsProfileName'>Josh Wiseman</p>
										</div>
										<div className='testimonialsText'>
											<p>
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quas
												sapiente, nam atque perspiciatis earum assumenda adipisci voluptatum
												placeat, vitae nulla facere nemo doloribus sunt quam temporibus
												dolorem quod dolores consectetur ipsa debitis repellat sit maxime.
												Maiores ex consectetur, accusantium impedit officia praesentium,
												dolor commodi amet inventore natus laborum consequatur.
											</p>
										</div>
									</div>
								</li>

								<li className='testimonialsItem'>
									<div className='testimonialsCardWrapper'>
										<div className='testimonialsRating'>
											<img
												src={starIcon}
												alt='starIcon'
											/>
											<img
												src={starIcon}
												alt='starIcon'
											/>
											<img
												src={starIcon}
												alt='starIcon'
											/>
											<img
												src={starIcon}
												alt='starIcon'
											/>
										</div>
										<div className='testimonialsProfile'>
											<img
												className='testimonialsProfileImage'
												src={user3}
												alt=''
											/>
											<p className='testimonialsProfileName'>Gabriella Thornton</p>
										</div>
										<div className='testimonialsText'>
											<p>
												Unde, quas sapiente, nam atque perspiciatis earum assumenda adipisci
												voluptatum placeat, vitae nulla facere nemo doloribus sunt quam
												temporibus dolorem quod dolores consectetur ipsa debitis repellat
												sit maxime.
											</p>
										</div>
									</div>
								</li>

								<li className='testimonialsItem'>
									<div className='testimonialsCardWrapper'>
										<div className='testimonialsRating'>
											<img
												src={starIcon}
												alt='starIcon'
											/>
											<img
												src={starIcon}
												alt='starIcon'
											/>
											<img
												src={starIcon}
												alt='starIcon'
											/>
										</div>
										<div className='testimonialsProfile'>
											<img
												className='testimonialsProfileImage'
												src={user4}
												alt=''
											/>
											<p className='testimonialsProfileName'>Lu Kang</p>
										</div>
										<div className='testimonialsText'>
											<p>
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim
												assumenda ullam iste iusto sequi animi nihil hic architecto possimus
												non tempore, adipisci sed aspernatur temporibus voluptatum labore
												placeat unde repellat iure tenetur maiores voluptas ea. Fugiat
												architecto ipsa quaerat.
											</p>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</section>
				<section className='about'>
					<div className='container'>
						<div className='aboutWrapper'>
							<div className='aboutLeft'>
								<h1 className='aboutHeading'>Little Lemon</h1>
								<p className='aboutSubHeading'>Chicago</p>
								<p className='aboutText'>
									We are a family owned Mediterranean restaurant, focused on traditional
									recipes served with a modern twist.
								</p>
								<p className='aboutText'>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
									voluptatibus at culpa recusandae. Maiores labore aliquam quis odit
									aperiam debitis.
								</p>
								<p className='aboutText'>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
									consequatur ab a voluptate adipisci fuga ea delectus explicabo quaerat
									velit odit ipsam pariatur, omnis ipsa esse autem. Porro, nam ducimus!
								</p>
							</div>
							<div className='aboutRight'>
								<img
									className='aboutImage aboutImageTop'
									src={owners1}
									alt=''
								/>
								<img
									className='aboutImage aboutImageBottom'
									src={owners2}
									alt=''
								/>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
