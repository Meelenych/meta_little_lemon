import './CustomersSay.css';
import starIcon from '../../images/8fab66317d6c35dc211a165dbc3735e15466ae68.png';
import user1 from '../../images/08c5772c481233a30a46aeca552132053604e2a8.jpg';
import user2 from '../../images/3ca412176fe4306326b04a78b51fa148c49f99c1.jpg';
import user3 from '../../images/44dd2beb0c06094368ffbb7fa1843005cfdae174.jpg';
import user4 from '../../images/b64f988f077b50ffdab0afee9de4d701e4a9d5da.jpg';

export function CustomersSay() {
	return (
		<>
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
											Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur nam
											cupiditate similique soluta. Quos dolore aliquam commodi non minima
											labore?
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
											temporibus dolorem quod dolores consectetur ipsa debitis repellat sit
											maxime.
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
		</>
	);
}
