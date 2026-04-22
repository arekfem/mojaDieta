import styles from './Recipes.module.css';

export const Recipes = ({ children }) => {
	return <div className={styles.recipes}>{children}</div>;
};
