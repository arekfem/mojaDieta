import styles from './Logo.module.css';
import LOGO_ICON from '../../assets/cookie.svg';

export const Logo = () => {
	return (
		<a href="/strona-glowna" className={styles['logo-name']}>
			<img className={styles['logo-icon']} src={LOGO_ICON} />
			moja<span className={styles['logo-name-color']}>DIETA</span>
		</a>
	);
};
