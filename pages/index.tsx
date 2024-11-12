import Layout from "../components/Layout";
import type { GetStaticProps } from "next";

import type { Project } from "../interfaces";
import { aboutData, sampleProjectData } from "../utils/data-fr";
import List from "../components/List";

type Props = {
	items: Project[];
};

const IndexPage = ({ items }: Props) => (
	<Layout title="pierre" baseTitle="pierre">
		<h1>{aboutData.introduction}</h1>
		<List items={items} />
	</Layout>
);

export const getStaticProps: GetStaticProps = async () => {
	const items: Project[] = sampleProjectData;
	return { props: { items } };
};

export default IndexPage;
