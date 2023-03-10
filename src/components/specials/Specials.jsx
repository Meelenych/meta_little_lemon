import './Specials.css';
import deliveryIcon from '../../images/bike-delivery-icon.svg';

export function Specials() {
	return (
		<>
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
											Chicago style feta cheese, garnished with crunchy garlic and rosemary
											croutons.
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
											This comos straight from grandma???s recipe book, every last ingredient
											has been sourced and is as authentic as can be imagined.
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
		</>
	);
}
