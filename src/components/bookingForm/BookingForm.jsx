import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './BookingForm.css';

export function BookingForm(props) {
	const reservationData = {
		date: '',
		time: '',
		guests: '',
		resType: '',
		comments: '',
		occasion: '',
	};

	const [date, setDate] = useState('');
	const [time, setTime] = useState('');
	const [guests, setGuests] = useState('');
	const [reservationType, setReservationType] = useState('indoor');
	const [comments, setComments] = useState('');
	const [occasion, setOccasion] = useState('');

	const handleSubmit = event => {
		event.preventDefault();

		reservationData.date = date;
		reservationData.time = time;
		reservationData.guests = guests;
		reservationData.resType = reservationType;
		reservationData.comments = comments;
		reservationData.occasion = occasion;

		props.updateResData(reservationData);
		props.dispatch({ type: 'update_times' });
	};

	return (
		<>
			<section className='resFormWrapper'>
				<div className='container'>
					<h1 className='resFormHeading'>Table reservation</h1>

					<form
						onSubmit={handleSubmit}
						className='resForm'>
						<div className='resGroupWrapper'>
							<div className='dateWrapper'>
								<label htmlFor='res-date'>Choose date</label>
								<input
									type='date'
									id='res-date'
									value={date}
									onChange={e => setDate(e.target.value)}
								/>
							</div>
							<div className='timeWrapper'>
								<label htmlFor='res-time'>Choose time</label>
								<select
									id='res-time '
									onChange={e => setTime(e.target.value)}>
									{props.availableTimes.length !== 0 ? (
										props.availableTimes.map(time => (
											<option
												key={time}
												value={time}>
												{time}
											</option>
										))
									) : (
										<option>No time available</option>
									)}
								</select>
							</div>
						</div>
						<div className='resGroupWrapper'>
							<div className='guestsWrapper'>
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
							</div>
							<div className='occasionWrapper'>
								<label htmlFor='occasion'>Select occasion</label>
								<select
									id='occasion'
									value={occasion}
									onChange={e => setOccasion(e.target.value)}>
									<option>Birthday</option>
									<option>Engagement</option>
									<option>Anniversary</option>
									<option>Promotion</option>
								</select>
							</div>
						</div>
						<p className='resTypeLabel'>Reservation type</p>
						<div className='resTypeWrapper'>
							<div>
								<label htmlFor='indoor'>Indoor</label>
								<input
									type='radio'
									id='indoor'
									value='indoor'
									checked={reservationType === 'indoor'}
									onChange={e => setReservationType(e.target.value)}
								/>
							</div>
							<div>
								<label htmlFor='outdoor'>Outdoor</label>
								<input
									type='radio'
									id='outdoor'
									value='outdoor'
									checked={reservationType === 'outdoor'}
									onChange={e => setReservationType(e.target.value)}
								/>
							</div>
						</div>

						<label htmlFor='comments'>Comments</label>
						<textarea
							id='comments'
							placeholder='Leave your comment here...'
							maxLength='400'
							value={comments}
							onChange={e => setComments(e.target.value)}
						/>
						<div className='buttonsWrapper'>
							<button
								type='button'
								className='buttonCancel'>
								<NavLink to='/'>Cancel</NavLink>
							</button>

							<button
								type='submit'
								className='buttonReserve'>
								Confirm
							</button>
						</div>
					</form>
				</div>
			</section>
		</>
	);
}
