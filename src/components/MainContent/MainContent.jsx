import styles from './MainContent.module.css';

export const MainContent = ({ children }) => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>{children}</div>
		</div>
	);
};
