import styles from './Hamburger.module.css';

export const Hamburger = ({ isMenuShown, handleToggleMenuClick }) => {
	const toggleClassCheck = isMenuShown ? styles['is-active'] : '';

	return (
		<button
			className={`${styles.hamburger} ${styles['hamburger--3dy']} ${toggleClassCheck}`}
			type="button"
			onClick={handleToggleMenuClick}>
			<span className={styles['hamburger-box']}>
				<span className={styles['hamburger-inner']}></span>
			</span>
		</button>
	);
};
