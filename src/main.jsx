import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage/HomePage';
import Logement from './pages/Logement/Logement';
import About from './pages/About/About';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '../main.scss';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
		errorElement: <ErrorPage />,
	},
	{
		path: 'logements/:locationID',
		element: <Logement />,
	},
	{
		path: 'about',
		element: <About />,
	},
	{
		path: 'not_found',
		element: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
