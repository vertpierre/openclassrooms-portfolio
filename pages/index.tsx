import Layout from "../components/Layout";
import type { GetStaticProps } from "next";

import type { Project } from "../interfaces";
import { useLanguage } from "../contexts/LanguageContext";
import {
	aboutData as aboutDataFr,
	sampleProjectData as projectDataFr,
} from "../utils/data-fr";
import {
	aboutData as aboutDataEn,
	sampleProjectData as projectDataEn,
} from "../utils/data-en";
import List from "../components/List";

type Props = {
	items: Project[];
};

const IndexPage = ({ items }: Props) => {
	const { language } = useLanguage();
	const aboutData = language === "fr" ? aboutDataFr : aboutDataEn;
	const projectData = language === "fr" ? projectDataFr : projectDataEn;

	return (
		<Layout title="pierre" baseTitle="pierre">
			<h1>{aboutData.introduction}</h1>
			<List items={projectData} />
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const items: Project[] = projectDataFr;
	return { props: { items } };
};

export default IndexPage;
