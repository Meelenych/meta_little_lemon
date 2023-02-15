import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { BookingForm } from './BookingForm';

test('Renders the BookingForm heading', () => {
	render(
		<Router>
			<BookingForm />
		</Router>,
	);
	const headingElement = screen.getByText('Book Now');
	expect(headingElement).toBeInTheDocument();
});
