import styles from './Button.module.css';

export const Button = ({
	children,
	type,
	disabled,
	onClick,
	buttonEditStyle,
	buttonDangerStyle,
}) => {
	const danger = buttonDangerStyle ? styles['btn-danger'] : '';
	const edit = buttonEditStyle ? styles['btn-edit'] : '';
	return (
		<button
			onClick={onClick}
			type={type}
			disabled={disabled}
			// className={styles.btn}>
			className={`${styles.btn} ${danger} ${edit}`}>
			{children}
		</button>
	);
};
