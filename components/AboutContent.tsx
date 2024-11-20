import PagePresentation from "./PagePresentation";
import PageSocial from "./PageSocial";
import { useLanguage } from "../contexts/LanguageContext";
import styles from "./AboutContent.module.css";

interface AboutContentProps {
	description: string;
	additionalInfo: string;
	showCV: boolean;
}

const AboutContent = ({
	description,
	additionalInfo,
	showCV,
}: AboutContentProps) => {
	const { language } = useLanguage();
	const cvFileName = language === "en" ? "cv_en.pdf" : "cv_fr.pdf";

	return (
		<div className={styles.container}>
			<PagePresentation
				description={description}
				additionalInfo={additionalInfo}
				layout="row"
				showCV={showCV}
				cvFile={cvFileName}
			/>
			<PageSocial />
		</div>
	);
};

export default AboutContent;
