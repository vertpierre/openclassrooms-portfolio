import type { GetStaticProps, GetStaticPaths } from "next";
import type { Project } from "../../interfaces";
import { useLanguage } from "../../contexts/LanguageContext";
import {
	sampleProjectData as projectDataFr,
	navigationLabels as navFr,
} from "../../utils/data-fr";
import {
	sampleProjectData as projectDataEn,
	navigationLabels as navEn,
} from "../../utils/data-en";
import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";
import PageContent from "../../components/ProjectContent";
import { generateProjectImages } from "../../utils/imageUtils";
import { baseTitle } from "../../utils/data-common";

type Props = {
	item?: Project & { images?: { src: string; alt: string; id: string }[] };
};

const ProjectDetailPage = ({ item }: Props) => {
	const { language } = useLanguage();
	const projectData = language === "fr" ? projectDataFr : projectDataEn;
	const nav = language === "fr" ? navFr : navEn;

	if (!item) return null;

	// Find the corresponding project in the current language
	const currentItem = projectData.find((project) => project.slug === item.slug);

	// Merge the static props images with the translated content
	const translatedItem = currentItem
		? {
				...currentItem,
				images: item.images,
			}
		: item;

	return (
		<Layout
			title={`${nav.projects} > ${translatedItem.title}`}
			baseTitle={baseTitle}
		>
			<PageTitle title={translatedItem.title} />
			<PageContent
				item={translatedItem}
				description={translatedItem.description}
				additionalInfo={translatedItem.additionalInfo}
				layout="column"
			/>
		</Layout>
	);
};

export default ProjectDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = projectDataFr.map((project) => ({
		params: { slug: project.slug },
	}));

	return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const slug = params?.slug as string;
	const item = projectDataFr.find((data) => data.slug === slug);

	if (!item) {
		return {
			notFound: true,
		};
	}

	const images = await generateProjectImages(item.slug);

	const imageData = images.map((img, index) => ({
		src: img.src,
		alt: `${item.title} - Image ${index + 1}`,
		id: `${item.slug}-image-${index}`,
	}));

	return {
		props: {
			item: {
				...item,
				images: imageData,
			},
		},
	};
};
