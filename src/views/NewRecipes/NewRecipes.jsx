import styles from './NewRecipes.module.css';
import { useState } from 'react';

export const NewRecipes = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');
	const [ingredients, setIngredients] = useState([]);
	const [ingredient, setIngredient] = useState([]);
	const [prepTime, setPrepTime] = useState('');
	const [portions, setPortions] = useState('');
	const [difficulty, setDifficulty] = useState('');
	const [tags, setTags] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleAddIngredientClick = () => {};

	return (
		<>
			<header className={styles['header-box']}>
				<h1>Nowy Przepis</h1>
			</header>
			<main className={styles['container']}>
				<form onSubmit={handleSubmit}>
					<div className={styles['bg-box']}>
						<label>Tytuł przepisu:</label>
						<input
							type="text"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							placeholder="Np. Spaghetti"
							required
						/>
					</div>
					<div className={styles['bg-box']}>
						<label htmlFor="description">Opis:</label>
						<textarea
							id="description"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							placeholder="Krótki opis przepisu..."
							rows={4}></textarea>
					</div>
					<div className={styles['bg-box']}>
						<label htmlFor="category">Kategoria:</label>
						<select
							id="category"
							value={category}
							onChange={(e) => setCategory(e.target.value)}
							required>
							<option value="" disabled>
								Wybierz kategorię
							</option>
							<option value="sniadanie">Śniadanie</option>
							<option value="obiad">Obiad</option>
							<option value="kolacja">Kolacja</option>
						</select>
					</div>
					<div className={styles['bg-box']}>
						<label htmlFor="">Składniki:</label>
						<input
							type="text"
							value={ingredients}
							onChange={(e) => setIngredients(e.target.value)}
							placeholder="Np. Makaron"
						/>
						<button onClick={handleAddIngredientClick}>Dodaj składnik</button>
					</div>
					<div className={styles['bg-box']}>
						<label htmlFor="">Sposób wykonania:</label>
					</div>
					<div className={`${styles['bg-box']} `}>
						<label>Dodatkowe informacje</label>
						<div>
							<label>Czas przygotowania (min):</label>
							<input
								type="number"
								value={prepTime}
								onChange={(e) => setPrepTime(e.target.value)}
								min="1"
							/>
						</div>
						<div>
							<label>Liczba porcji:</label>
							<input
								type="number"
								value={portions}
								onChange={(e) => setPortions(e.target.value)}
								min="1"
							/>
						</div>
						<div>
							<label>Poziom trudności:</label>
							<select
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

						<div className={`${styles['photo-section']}`}>
							<label>Zdjęcie:</label>
						</div>
						<div>
							<label>Tagi (oddzielone przecinkami):</label>
							<input
								type="text"
								value={tags}
								onChange={(e) => setTags(e.target.value)}
								placeholder="Np. bezglutenowe, szybki"
							/>
						</div>
					</div>
					<div className={styles['btn-box']}>
						<button className={styles['btn-cancel']}>Anuluj</button>
						<button type="submit" className={styles['btn-accept']}>
							Zapisz
						</button>
					</div>
				</form>
			</main>
		</>
	);
};
