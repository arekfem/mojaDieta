import styles from './Nav.module.css';
import LOGO_ICON from '../../assets/cookie.svg';
import { useState } from 'react';
export const Nav = () => {
	const [isMenuShown, setIsMenuShown] = useState(false);

	const handleToggleMenuClick = () => {
		setIsMenuShown((prevState) => !prevState);
	};

	const toggleClassCheck = isMenuShown ? styles['is-active'] : null;

	return (
		<>
			<nav className={styles.nav}>
				<a href="/strona-glowna" className={styles['logo-name']}>
					<img className={styles['logo-icon']} src={LOGO_ICON} />
					moja<span className={styles['logo-name-color']}>DIETA</span>
				</a>
				<button
					className={`${styles.hamburger} ${styles['hamburger--3dy']} ${toggleClassCheck}`}
					type="button"
					onClick={handleToggleMenuClick}>
					<span className={styles['hamburger-box']}>
						<span className={styles['hamburger-inner']}></span>
					</span>
				</button>
			</nav>
		</>
	);
};
