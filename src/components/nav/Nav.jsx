import logo from '../../images/Logo.svg';
import './nav.css';

export function Nav() {
	return (
		<>
			<nav>
				<a href=''>
					<img
						src={logo}
						alt='Little Lemon logo'
					/>
				</a>
				<ul className='navList'>
					<li>
						<a href=''>Home</a>
					</li>
					<li>
						<a href=''>About</a>
					</li>
					<li>
						<a href=''>Menu</a>
					</li>
					<li>
						<a href=''>Reservations</a>
					</li>
					<li>
						<a href=''>Order online</a>
					</li>
					<li>
						<a href=''>Login</a>
					</li>
				</ul>
			</nav>
		</>
	);
}