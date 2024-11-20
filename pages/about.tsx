import Layout from "../components/Layout";
import AboutContent from "../components/AboutContent";
import { useLanguage } from "../contexts/LanguageContext";
import { aboutData as aboutDataFr } from "../utils/data-fr";
import { aboutData as aboutDataEn } from "../utils/data-en";
import PageTitle from "../components/PageTitle";

const AboutPage = () => {
	const { language } = useLanguage();
	const aboutData = language === "fr" ? aboutDataFr : aboutDataEn;

	return (
		<Layout title="à propos" baseTitle="pierre">
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
