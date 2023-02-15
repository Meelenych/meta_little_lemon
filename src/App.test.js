import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test('renders booking link', () => {
	render(
		<Router>
			<App />
		</Router>,
	);
	const linkElement = screen.getByText(/Reservations/i);
	expect(linkElement).toBeInTheDocument();
});
