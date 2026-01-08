import styles from './Nav.module.css';
import LOGO_ICON from '../../assets/cookie.svg';
import { useState } from 'react';
import { MAINMENU } from '../../constants/menu';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
	const [isMenuShown, setIsMenuShown] = useState(false);

	const handleToggleMenuClick = () => {
		setIsMenuShown((prevState) => !prevState);
	};

	const toggleClassCheck = isMenuShown ? styles['is-active'] : '';
	const toggleMenuShown = isMenuShown ? styles['menu-active'] : '';

	const handleSubcategoryClick = () => {
		setIsMenuShown((prevState) => !prevState);
	};

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

				<div className={`${styles['nav-menu']} ${toggleMenuShown}`}>
					<div className={styles['nav-menu-container']}>
						{MAINMENU.map((category) => {
							return (
								<div key={category.id} className={styles.categories}>
									<div className={styles['category-box']}>
										<p className={styles.category}>{category.menuName}</p>
										<div className={styles.line}></div>
									</div>
									{category.subcategories.map((subcategory) => {
										return (
											<NavLink
												key={subcategory.path}
												to={subcategory.path}
												onClick={handleSubcategoryClick}>
												{({ isActive }) => {
													return (
														<p
															className={`${styles.subcategory} ${
																isActive ? styles.active : ''
															}`}>
															<img
																src={subcategory.icon}
																className={styles['nav-img']}
															/>
															{subcategory.menuName}
														</p>
													);
												}}
											</NavLink>
										);
									})}
								</div>
							);
						})}
					</div>
				</div>
			</nav>
		</>
	);
};
