import type { GetStaticProps, GetStaticPaths } from "next";
import type { Project } from "../../interfaces";
import { sampleProjectData } from "../../utils/data-fr";
import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";
import PageContent from "../../components/ProjectContent";
import { generateProjectImages } from "../../utils/imageUtils";

type Props = {
	item?: Project & { images?: string[] };
};

const ProjectDetailPage = ({ item }: Props) => {
	if (!item) return null;

	return (
		<Layout title={`projets > ${item.title}`} baseTitle="pierre">
			<PageTitle title={item.title} />
			<PageContent
				item={item}
				description={item.description}
				additionalInfo={item.additionalInfo}
				layout="column"
			/>
		</Layout>
	);
};

export default ProjectDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = sampleProjectData.map((project) => ({
		params: { slug: project.slug },
	}));

	return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const slug = params?.slug as string;
	const item = sampleProjectData.find((data) => data.slug === slug);

	if (!item) {
		return {
			notFound: true,
		};
	}

	const images = await generateProjectImages(item.slug);
	const imagePaths = images.map((img) => img.src);

	return {
		props: {
			item: {
				...item,
				images: imagePaths,
			},
		},
	};
};
