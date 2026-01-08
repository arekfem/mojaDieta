import './styles/theme.css';
import './styles/global.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Modernization } from './components/Modernization/Modernization';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: 'strona-glowna',
				element: <Modernization />,
			},
			{
				path: 'nowy-przepis',
				element: <Modernization />,
				// element: <NewMeal />,
			},

			{
				path: 'ulubione',
				element: <Modernization />,
				// element: <Favourites />,
			},
			{
				path: 'statystyki',
				element: <Modernization />,
			},
			{
				path: 'posilki/:category',
				element: <Modernization />,
				// element: <MainContent />,
			},
			{
				path: 'posilki/:category/:mealId',
				element: <Modernization />,
				// element: <MealDetails />,
			},

			{
				path: 'ustawienia',
				element: <Modernization />,
			},
			{
				path: 'profil',
				element: <Modernization />,
			},
		],
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
