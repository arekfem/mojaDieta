import styles from './Nav.module.css';

import { useState } from 'react';
import { Hamburger } from '../Hamburger/Hamburger';
import { Logo } from '../Logo/Logo';
import { Menu } from '../Menu/Menu';

export const Nav = () => {
	const [isMenuShown, setIsMenuShown] = useState(false);

	return (
		<>
			<nav className={styles.nav}>
				<Logo />
				<Hamburger
					isMenuShown={isMenuShown}
					handleToggleMenuClick={() =>
						setIsMenuShown((prevState) => !prevState)
					}
				/>
				<Menu
					isMenuShown={isMenuShown}
					handleSubcategoryClick={() =>
						setIsMenuShown((prevState) => !prevState)
					}
				/>
			</nav>
		</>
	);
};
