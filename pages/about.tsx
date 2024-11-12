import Layout from "../components/Layout";
import AboutContent from "../components/AboutContent";
import { aboutData } from "../utils/data-fr";
import PageTitle from "../components/PageTitle";

const AboutPage = () => (
	<Layout title="à propos" baseTitle="pierre">
		<PageTitle title={aboutData.name} />
		<AboutContent
			description={aboutData.description}
			additionalInfo={aboutData.additionalInfo}
			showCV={true}
		/>
	</Layout>
);

export default AboutPage;
