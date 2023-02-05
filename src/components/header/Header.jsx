import { NavLink } from 'react-router-dom';

import { Nav } from '../nav/Nav';
import logo from '../../images/Logo.svg';
import './header.css';

export function Header() {
	return (
		<div className='container'>
			<header>
				<NavLink
					to='/'
					className='logoLink'>
					<img
						className='logoImg'
						src={logo}
						alt='Little Lemon logo'
					/>
				</NavLink>

				<Nav></Nav>
			</header>
		</div>
	);
}
