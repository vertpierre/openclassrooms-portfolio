import Layout from "../components/Layout";
import AboutContent from "../components/AboutContent";
import { useLanguage } from "../contexts/LanguageContext";
import {
	aboutData as aboutDataFr,
	navigationLabels as navFr,
} from "../utils/data-fr";
import {
	aboutData as aboutDataEn,
	navigationLabels as navEn,
} from "../utils/data-en";
import { baseTitle } from "../utils/data-common";
import PageTitle from "../components/PageTitle";

const AboutPage = () => {
	const { language } = useLanguage();
	const aboutData = language === "fr" ? aboutDataFr : aboutDataEn;
	const nav = language === "fr" ? navFr : navEn;

	return (
		<Layout title={nav.about} baseTitle={baseTitle}>
			<PageTitle title={aboutData.name} />
			<AboutContent
				description={aboutData.description}
				additionalInfo={aboutData.additionalInfo}
				showCV={true}
			/>
		</Layout>
	);
};

export default AboutPage;
