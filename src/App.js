import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';

// import { ErrorBoundary } from './ErrorBoundary/ErrorBoundary';
import { Loader } from './components/loader/loader';
import { HomePage } from './pages/HomePage';
import { BookingPage } from './pages/BookingPage';
import { NotFoundPage } from './pages/NotFoundPage';
import './App.css';

function App() {
	return (
		<>
			<Suspense fallback={<Loader />}>
				{/* <ErrorBoundary> */}
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
				{/* </ErrorBoundary> */}
			</Suspense>
		</>
	);
}

export default App;
