import { useState } from 'react';
import styles from './MainPageTest.module.css';
import { NavLink } from 'react-router-dom';

export const MainPageTest = () => {
	const [search, setSearch] = useState('');
	return (
		<>
			<h1 className={styles.title}>Witaj!</h1>
			<div className={styles['search-container']}>
				<input
					type="text"
					id="search"
					placeholder="Szukaj po tytule, opisie lub tagach... 🔍"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className={styles['search-input']}
				/>
			</div>
			<NavLink to={'/nowy-przepis'} className={styles.link}>
				+ Dodaj nowy przepis
			</NavLink>
		</>
	);
};
