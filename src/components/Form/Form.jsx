import { useState } from 'react';
import styles from './Form.module.css';

export const Form = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');
	const [ingredients, setIngredients] = useState([]);
	const [ingredientValue, setIngredientValue] = useState('');
	// const [stepsPreparation, setStepsPreparation] = useState([]);
	const [stepPreparationValue, setStepPreparationValue] = useState('');
	const [prepTime, setPrepTime] = useState('');
	const [portions, setPortions] = useState('');
	const [difficulty, setDifficulty] = useState('');
	const [tags, setTags] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const addIngredient = () => {
		setIngredients((prevIngredients) => [
			...prevIngredients,
			{
				name: ingredientValue,
				id: Math.random(),
			},
		]);
		setIngredientValue('');
	};

	// const editIngredient = () => {};

	const deleteIngredient = (id) => {
		setIngredients((prevIngredients) =>
			prevIngredients.filter((ingredient) => ingredient.id !== id)
		);
	};

	// const addStepsPrep = () => {
	// 	setStepsPreparation((prepSteps) => [
	// 		...prepSteps,
	// 		{
	// 			stepPrep: stepPreparationValue,
	// 			id: Math.random(),
	// 		},
	// 	]);
	// 	setStepPreparationValue('');
	// };

	return (
		<form onSubmit={handleSubmit} className={styles['form-wrapper']}>
			<div className={styles['backbround-box']}>
				<label htmlFor="title">Tytuł przepisu:</label>
				<input
					id="title"
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder="Np. Spaghetti"
				/>
			</div>
			<div className={styles['backbround-box']}>
				<label htmlFor="description">Opis:</label>
				<textarea
					id="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					placeholder="Krótki opis przepisu..."
					rows={4}></textarea>
			</div>
			<div className={styles['backbround-box']}>
				<label htmlFor="category">Kategoria:</label>
				<select
					id="category"
					value={category}
					onChange={(e) => setCategory(e.target.value)}>
					<option value="" disabled>
						Wybierz kategorię
					</option>
					<option value="sniadanie">Śniadanie</option>
					<option value="obiad">Obiad</option>
					<option value="kolacja">Kolacja</option>
				</select>
			</div>
			<div className={styles['backbround-box']}>
				<label htmlFor="ingredients">Składniki:</label>
				{ingredients && (
					<ul>
						{ingredients.map(({ name, id }) => (
							<li key={id} className={styles.ingredient}>
								{name}
								<div className={styles['tools']}>
									{/* <button
										className={styles['edit-ingredient']}
										onClick={editIngredient}>
										EDIT
									</button> */}
									<button
										className={styles['delete-btn']}
										onClick={() => deleteIngredient(id)}>
										X
									</button>
								</div>
							</li>
						))}
					</ul>
				)}
				<input
					id="ingredients"
					type="text"
					value={ingredientValue}
					onChange={(e) => setIngredientValue(e.target.value)}
					placeholder="Nowy składnik"
				/>
				<button
					className={styles['btn-accept']}
					onClick={addIngredient}
					disabled={!ingredientValue}>
					Dodaj składnik
				</button>
			</div>
			<div className={styles['backbround-box']}>
				<label htmlFor="stepsPreparation">Sposób wykonania:</label>
				{/* {stepsPreparation && (
					<ol>
						{stepsPreparation.map(({ stepPrep, id }) => (
							<li key={id} className={styles.ingredient}>
								{stepPrep}
								<div className={styles['tools']}>
									<button
										className={styles['delete-btn']}
										// onClick={() => deleteIngredient(id)}
									>
										X
									</button>
								</div>
							</li>
						))}
					</ol>
				)}
				<input
					id="stepsPreparation"
					type="text"
					value={stepPreparationValue}
					onChange={(e) => setStepPreparationValue(e.target.value)}
					placeholder="Etap w przyogtowaniu"
				/>
				<button
					className={styles['btn-accept']}
					onClick={addStepsPrep}
					disabled={!stepPreparationValue}>
					Dodaj etap
				</button> */}
				<textarea
					id="stepsPreparation"
					value={stepPreparationValue}
					onChange={(e) => setStepPreparationValue(e.target.value)}
					placeholder="Szczegółowy opis sposobu wykonania"
					rows={4}
				/>
			</div>
			<h2>Dodatkowe informacje</h2>
			<div className={`${styles['backbround-box']} `}>
				<label htmlFor="prepTime">Czas przygotowania (min):</label>
				<input
					id="prepTime"
					type="number"
					value={prepTime}
					onChange={(e) => setPrepTime(e.target.value)}
					min="1"
				/>
			</div>
			<div className={`${styles['backbround-box']} `}>
				<label htmlFor="portion">Liczba porcji:</label>
				<input
					id="portion"
					type="number"
					value={portions}
					onChange={(e) => setPortions(e.target.value)}
					min="1"
				/>
			</div>
			<div className={`${styles['backbround-box']} `}>
				<label htmlFor="difficulty">Poziom trudności:</label>
				<select
					id="difficulty"
					value={difficulty}
					onChange={(e) => setDifficulty(e.target.value)}>
					<option value="" disabled>
						Wybierz poziom
					</option>
					<option value="latwy">Łatwy</option>
					<option value="sredni">Średni</option>
					<option value="zaawansowany">Zaawansowany</option>
				</select>
			</div>
			<div className={`${styles['backbround-box']} `}>
				<label htmlFor="tags">Tagi (oddzielone przecinkami):</label>
				<input
					id="tags"
					type="text"
					value={tags}
					onChange={(e) => setTags(e.target.value)}
					placeholder="Np. bezglutenowe, szybki"
				/>
			</div>
			<div className={styles['btn-box']}>
				<button className={styles['btn-cancel']}>Anuluj</button>
				<button
					type="submit"
					className={styles['btn-accept']}
					disabled={!title}>
					Zapisz
				</button>
			</div>
		</form>
	);
};
