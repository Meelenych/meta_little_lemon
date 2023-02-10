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

	const updateTimes = reservationData => {
		console.log('times updated');
		console.log('reservationData', reservationData);
		return availableTimes;
	};

	const initializeTimes = () => {
		console.log('times initialized');
		return availableTimes;
	};

	return (
		<>
			<Header></Header>
			<BookingForm
				availableTimes={availableTimes}
				updateTimes={updateTimes}></BookingForm>
			<Footer></Footer>
		</>
	);
}
