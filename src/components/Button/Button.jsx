import styles from './Button.module.css';

export const Button = ({
	children,
	type,
	disabled,
	onClick,
	buttonCardStyle,
	buttonDetailsStyle,
}) => {
	const card = buttonCardStyle ? styles['btn-card'] : '';
	const details = buttonDetailsStyle ? styles['btn-details'] : '';
	return (
		<button
			onClick={onClick}
			type={type}
			disabled={disabled}
			// className={styles.btn}>
			className={`${styles.btn} ${card} ${details}`}>
			{children}
		</button>
	);
};
