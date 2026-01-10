import styles from './Menu.module.css';
import { MAINMENU } from '../../constants/menu';
import { NavLink } from 'react-router-dom';

export const Menu = ({ isMenuShown, handleSubcategoryClick }) => {
	const toggleMenuShown = isMenuShown ? styles['menu-active'] : '';
	return (
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
	);
};
