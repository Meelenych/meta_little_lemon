import React, { useState } from 'react';

export function BookingForm() {
	const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
	const reservationData = { date: '', time: '', guests: '', occasion: '' };

	const [date, setDate] = useState('');
	const [time, setTime] = useState('');
	const [guests, setGuests] = useState('');
	const [occasion, setOccasion] = useState('');

	const handleSubmit = event => {
		event.preventDefault();

		reservationData.date = date;
		reservationData.time = time;
		reservationData.guests = guests;
		reservationData.occasion = occasion;

		console.log('reservationData', reservationData);
	};

	return (
		<>
			<h1>Booking form</h1>

			<form onSubmit={handleSubmit}>
				<label htmlFor='res-date'>Choose date</label>
				<input
					type='date'
					id='res-date'
					value={date}
					onChange={e => setDate(e.target.value)}
				/>
				<label htmlFor='res-time'>Choose time</label>
				<select
					id='res-time '
					value={time}
					onChange={e => setTime(e.target.value)}>
					{availableTimes.map(time => (
						<option
							key={time}
							value={time}>
							{time}
						</option>
					))}
				</select>
				<label htmlFor='guests'>Number of guests</label>
				<input
					type='number'
					placeholder='1'
					min='1'
					max='10'
					id='guests'
					value={guests}
					onChange={e => setGuests(e.target.value)}
				/>
				<label htmlFor='occasion'>Occasion</label>
				<select
					id='occasion'
					value={occasion}
					onChange={e => setOccasion(e.target.value)}>
					<option>Birthday</option>
					<option>Anniversary</option>
				</select>
				<input
					type='submit'
					value='Make Your reservation'
				/>
			</form>
		</>
	);
}
