import { NavLink } from 'react-router-dom';

import './nav.css';

export function Nav() {
	return (
		<>
			<nav>
				<ul className='navList'>
					<li>
						<NavLink to='/'>Home</NavLink>
					</li>
					<li>
						<a href=''>About</a>
					</li>
					<li>
						<a href=''>Menu</a>
					</li>
					<li>
						<NavLink to='/booking'>Reservations</NavLink>
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
