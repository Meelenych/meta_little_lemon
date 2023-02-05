import { Nav } from '../nav/Nav';
import logo from '../../images/Logo.svg';
import './header.css';

export function Header() {
	return (
		<div className='container'>
			<header>
				<a
					className='logoLink'
					href=''>
					<img
						className='logoImg'
						src={logo}
						alt='Little Lemon logo'
					/>
				</a>

				<Nav></Nav>
			</header>
		</div>
	);
}
