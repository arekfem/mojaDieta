import { useContext } from 'react';
import { Header } from '../../components/Header/Header';
import { Main } from '../../components/Main/Main';
import { FavouriteMealsContext } from '../../context/FavouriteMealsContext';
import { Recipes } from '../../components/Recipes/Recipes';

export const Favourites = () => {
	const favouritesMeals = useContext(FavouriteMealsContext);
	return (
		<>
			<Header>Ulubione przepisy</Header>
			<Main>
				{favouritesMeals ? (
					<Recipes></Recipes>
				) : (
					<p>Brak ulubionych przepisów</p>
				)}
			</Main>
		</>
	);
};
