import styles from './Header.module.css';

export const Header = ({ children }) => {
	return (
		<header className={styles['header-box']}>
			<h1>{children}</h1>
		</header>
	);
};
