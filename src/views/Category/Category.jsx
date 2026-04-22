import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { recipes } from '../../data/recipes';
import { Recipe } from '../../components/Recipe/Recipe';
import { Recipes } from '../../components/Recipes/Recipes';
import { Main } from '../../components/Main/Main';

export const Category = () => {
	const { category } = useParams();
	return (
		<>
			<Header>{category}</Header>
			<Main>
				<Recipes>
					{recipes
						.filter((recipe) => recipe.category === category)
						.map((recipe) => {
							return <Recipe key={recipe.id} recipe={recipe} />;
						})}
				</Recipes>
			</Main>
		</>
	);
};
