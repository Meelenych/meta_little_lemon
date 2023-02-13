import React, { useState, useReducer } from 'react';

import { Header } from '../components/header/Header';
import { BookingForm } from '../components/bookingForm/BookingForm';
import { Footer } from '../components/footer/Footer';

export function BookingPage() {
	const [bookingData, setBookingData] = useState({});

	const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

	const updateResData = reservationData => {
		console.log('res', reservationData);
		setBookingData({ ...reservationData });
	};

	const initializeTimes = () => {
		console.log('times initialized');
		return availableTimes;
	};

	const updateTimes = times => {};

	const timesReducer = (state = initializeTimes, action) => {
		if (action.type === 'update_times') {
			const newState = [...state];
			newState.splice(state.indexOf(bookingData.time), 1);
			return newState;
		}
		throw Error('Unknown action.');
	};

	const [updatedTimes, dispatch] = useReducer(timesReducer, availableTimes);

	return (
		<>
			<Header></Header>
			<BookingForm
				availableTimes={updatedTimes}
				updateResData={updateResData}
				dispatch={dispatch}></BookingForm>
			<Footer></Footer>
		</>
	);
}
