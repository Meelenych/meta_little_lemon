import { Nav } from '../nav/Nav';
import logo from '../../images/Logo.png';
import './footer.css';

export function Footer() {
	return (
		<>
			<div className='container'>
				<footer>
					<div className='logoWrapper'>
						<a href=''>
							<img
								src={logo}
								alt='Little Lemon logo'
							/>
						</a>
					</div>
					<div className='navWrapper'>
						<h3>Doormat navigation</h3>

						<Nav></Nav>
					</div>
					<div className='contactsWrapper'>
						<h3>Contact information</h3>
						<ul>
							<li>
								<p>
									Address: <address>Park Avenue 153, Chicago, 10005, USA</address>
								</p>
							</li>
							<li>
								<p>
									Tel.: <a href='tel:+16238848484'>+16238848484</a>
								</p>
							</li>
							<li>
								<p>
									E-mail:{' '}
									<a href='mailto:little_lemon@gmail.com'>little_lemon@gmail.com</a>
								</p>
							</li>
						</ul>
					</div>
					<div className='socialsWrapper'>
						<h3>Social media links</h3>
						<ul>
							<li>
								<a href=''>Instagram</a>
							</li>
							<li>
								<a href=''>Facebook</a>
							</li>
							<li>
								<a href=''>Twitter</a>
							</li>
						</ul>
					</div>
				</footer>
			</div>
		</>
	);
}
