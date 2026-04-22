import { MainPageTest } from '../../components/MainPageTest/MainPageTest';
import { Recipe } from '../../components/Recipe/Recipe';
import { Recipes } from '../../components/Recipes/Recipes';
import { recipes } from '../../data/recipes';

export const MainPage = () => {
	return (
		<>
			<MainPageTest />
			<Recipes>
				{recipes.map((recipe) => {
					return <Recipe key={recipe.id} recipe={recipe} />;
				})}
			</Recipes>
		</>
	);
};
