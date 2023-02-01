import { Nav } from '../nav/Nav';
import logo from '../../images/Logo.svg';
import './header.css';

export function Header() {
	return (
		<div className='container'>
			<header>
				<a
					class='logoLink'
					href=''>
					<img
						class='logoImg'
						src={logo}
						alt='Little Lemon logo'
					/>
				</a>

				<Nav></Nav>
			</header>
		</div>
	);
}
