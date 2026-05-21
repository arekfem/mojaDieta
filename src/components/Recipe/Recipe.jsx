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
				<img
					src={photos[0]}
					alt={alt}
				/>
				<div className={styles['recipe-card-content']}>
					<h2>{name}</h2>
					<p>{descriptions}</p>
					<div className={styles['recipe-meta']}>
						<span>
							<i class='fa-solid fa-utensils'></i> Porcje: {servings}
						</span>
						<span>
							<i class='fa-solid fa-clock'></i> {totalTime} min
						</span>
						<span>
							<i class='fa-solid fa-chart-simple'></i> {level}
						</span>
						<span>
							<i class='fa-solid fa-tag'></i> {category}
						</span>
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
				<h3>Składniki ({ingredients.length}): </h3>
				<div className={styles['ingredients-box']}>
					<ul>
						<li>{ingredients[0]}</li>
						<li>{ingredients[1]}</li>
						<li>{ingredients[2]}</li>
					</ul>
				</div>
				<div className={styles['btn-box']}>
					<Button buttonDetailsStyle={true}>Sprawdź szczegóły</Button>
					<div className={styles['btns-bottom']}>
						<Button buttonCardStyle>
							<i class='fa-solid fa-heart'></i> Dodaj do ulubionych
						</Button>
						<Button buttonCardStyle={true}>
							<i class='fa-solid fa-pencil'></i> Edytuj
						</Button>
						<Button buttonCardStyle>
							<i class='fa-solid fa-trash-can'></i> Usuń
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
