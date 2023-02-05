import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';

import { Loader } from './components/loader/loader';
import { HomePage } from './pages/HomePage';
import { BookingPage } from './pages/BookingPage';
import { NotFoundPage } from './pages/NotFoundPage';
import './App.css';

function App() {
	return (
		<>
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route
						path='/'
						element={<HomePage />}></Route>
					<Route
						path='/booking'
						element={<BookingPage />}></Route>
					<Route
						path='*'
						element={<NotFoundPage />}></Route>
				</Routes>
			</Suspense>
		</>
	);
}

export default App;
