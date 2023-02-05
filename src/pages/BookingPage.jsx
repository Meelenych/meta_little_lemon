import React, { useState } from 'react';

import { Header } from '../components/header/Header';
import { BookingForm } from '../components/bookingForm/BookingForm';
import { Footer } from '../components/footer/Footer';

export function BookingPage() {
	const [availableTimes, setAvailableTimes] = useState([
		'17:00',
		'18:00',
		'19:00',
		'20:00',
		'21:00',
		'22:00',
	]);

	return (
		<>
			<Header></Header>
			<BookingForm availableTimes={availableTimes}></BookingForm>
			<Footer></Footer>
		</>
	);
}
