import './CallToActions.css';

export function CalllToAction() {
	return (
		<>
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
		</>
	);
}
