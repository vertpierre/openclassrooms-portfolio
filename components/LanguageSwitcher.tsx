import { useLanguage } from "../contexts/LanguageContext";
import styles from "./LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
	const { language, toggleLanguage } = useLanguage();

	return (
		<button
			type="button"
			onClick={toggleLanguage}
			className={styles.languageButton}
			aria-label="Toggle language"
		>
			{language.toUpperCase()}
		</button>
	);
};

export default LanguageSwitcher;
