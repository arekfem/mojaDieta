import './styles/theme.css';
import './styles/global.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Modernization } from './components/Modernization/Modernization';
import { NewRecipes } from './views/NewRecipes/NewRecipes.jsx';
import { MainPage } from './views/MainPage/MainPage.jsx';
import { Favourites } from './views/Favourites/Favourites.jsx';
import { Category } from './views/Category/Category.jsx';

const router = createBrowserRouter([
	{
		path: '',
		element: <App />,
		children: [
			{
				path: 'strona-glowna',
				element: <MainPage />,
			},
			{
				path: 'nowy-przepis',
				element: <NewRecipes />,
			},
			{
				path: 'ulubione',
				element: <Favourites />,
			},
			{
				path: 'statystyki',
				element: <Modernization />,
				// element: <Statistics />,
			},
			{
				path: 'posilki/:category',
				element: <Category />,
			},
			{
				path: 'posilki/:category/:mealId',
				element: <Modernization />,
				// element: <MealDetails />,
			},
			{
				path: 'ustawienia',
				element: <Modernization />,
				// element: <Settings />,
			},
			{
				path: 'profil',
				element: <Modernization />,
				// element: <Profile />,
			},
		],
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
