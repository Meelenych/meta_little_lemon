import './main.css';
import deliveryIcon from '../../images/bike-delivery-icon.svg';
import starIcon from '../../images/8fab66317d6c35dc211a165dbc3735e15466ae68.png';
import user1 from '../../images/08c5772c481233a30a46aeca552132053604e2a8.jpg';
import user2 from '../../images/3ca412176fe4306326b04a78b51fa148c49f99c1.jpg';
import user3 from '../../images/44dd2beb0c06094368ffbb7fa1843005cfdae174.jpg';
import user4 from '../../images/b64f988f077b50ffdab0afee9de4d701e4a9d5da.jpg';

export function Main() {
	return (
		<>
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
											<p>Rating</p>
											<div>
												<img
													src={starIcon}
													alt='starIcon'
												/>
											</div>
										</div>
										<div className='testimonialsProfile'>
											<img
												src={user1}
												alt=''
											/>
											<p>Name</p>
										</div>
										<div className='testimonialsText'>
											<p>Review text</p>
										</div>
									</div>
								</li>

								<li className='testimonialsItem'>
									<div className='testimonialsCardWrapper'>
										<div className='testimonialsRating'>
											<p>Rating</p>
											<div>
												<img
													src={starIcon}
													alt='starIcon'
												/>
											</div>
										</div>
										<div className='testimonialsProfile'>
											<img
												src={user2}
												alt=''
											/>
											<p>Name</p>
										</div>
										<div className='testimonialsText'>
											<p>Review text</p>
										</div>
									</div>
								</li>

								<li className='testimonialsItem'>
									<div className='testimonialsCardWrapper'>
										<div className='testimonialsRating'>
											<p>Rating</p>
											<div>
												<img
													src={starIcon}
													alt='starIcon'
												/>
											</div>
										</div>
										<div className='testimonialsProfile'>
											<img
												src={user3}
												alt=''
											/>
											<p>Name</p>
										</div>
										<div className='testimonialsText'>
											<p>Review text</p>
										</div>
									</div>
								</li>

								<li className='testimonialsItem'>
									<div className='testimonialsCardWrapper'>
										<div className='testimonialsRating'>
											<p>Rating</p>
											<div>
												<img
													src={starIcon}
													alt='starIcon'
												/>
											</div>
										</div>
										<div className='testimonialsProfile'>
											<img
												src={user4}
												alt=''
											/>
											<p>Name</p>
										</div>
										<div className='testimonialsText'>
											<p>Review text</p>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</section>
				<section className='about'></section>
			</main>
		</>
	);
}
