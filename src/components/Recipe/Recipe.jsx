import { Button } from '../Button/Button';
import styles from './Recipe.module.css';

export const Recipe = ({
	recipe: {
		name,
		category,
		totalTime,
		servings,
		level,
		ingredients,
		photos,
		alt,
		descriptions,
		tags,
	},
}) => {
	return (
		<div className={styles['recipe-card']}>
			<div className={styles['recipe-card-front']}>
				<img src={photos[0]} alt={alt} />
				<div className={styles['recipe-card-content']}>
					<h2>{name}</h2>
					<p>{descriptions}</p>
					<div className={styles['recipe-meta']}>
						<span>🍴 Porcje: {servings}</span>
						<span>🕓 {totalTime} min</span>
						<span>📊 {level}</span>
						<span>🏷️ {category}</span>
					</div>
					<div className={styles['recipe-tags']}>
						<span className={styles['tag-pill']}>#{tags[0]}</span>
						<span className={styles['tag-pill']}>#{tags[1]}</span>
					</div>
				</div>
			</div>
			<div className={styles['recipe-card-back']}>
				<h2>{name}</h2>
				<p>{descriptions}</p>
				<h3>Składniki</h3>
				<p>Liczba składników: {ingredients.length}</p>
				<div className={styles['ingredients-box']}>
					<ul>
						<li>{ingredients[0]}</li>
						<li>{ingredients[1]}</li>
						<li>{ingredients[2]}</li>
					</ul>
				</div>
				<div className={styles['btn-box']}>
					<Button>🔍</Button>
					<Button buttonEditStyle={true}>✍🏻</Button>
					<Button buttonDangerStyle={true}>🗑️</Button>
					<Button>Dodaj do ulubionych</Button>
				</div>
			</div>
		</div>
	);
};
