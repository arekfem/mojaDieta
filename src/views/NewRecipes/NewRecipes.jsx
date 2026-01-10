import { Header } from '../../components/Header/Header';
import { Main } from '../../components/Main/Main';
import { Form } from '../../components/Form/Form';

export const NewRecipes = () => {
	return (
		<>
			<Header>Nowy Przepis</Header>
			<Main>
				<Form />
			</Main>
		</>
	);
};
