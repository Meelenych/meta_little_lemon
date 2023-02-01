import { Nav } from '../nav/Nav';
import logo from '../../images/Logo.png';
import './footer.css';

export function Footer() {
	return (
		<>
			<div className='container'>
				<footer>
					<div className='logoWrapper'>
						<img
							src={logo}
							alt='Little Lemon logo'
						/>
					</div>
					<div className='navWrapper'>
						<h3>Doormat navigation</h3>
						<Nav></Nav>
					</div>
					<div className='contactsWrapper'>
						<h3>Contact information</h3>
						<ul>
							<li>
								<span>Address: </span>
								<address>Park Avenue 153, Chicago, 10005, USA</address>
							</li>
							<li>
								<span>Phone: </span>
								<a href='tel:+16238848484'>+16238848484</a>
							</li>
							<li>
								<span>E-mail: </span>
								<a href='mailto:little_lemon@gmail.com'>little_lemon@gmail.com</a>
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
