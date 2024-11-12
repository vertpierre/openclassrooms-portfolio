import PagePresentation, {
	type PagePresentationProps,
} from "./PagePresentation";
import ListDetail from "./ListDetail";
import Slider from "./Slider";
import styles from "./ProjectContent.module.css";
import type { Project } from "../interfaces";

interface PageContentProps extends PagePresentationProps {
	showCV?: boolean;
	item?: Project;
}

const PageContent = ({
	description,
	additionalInfo,
	layout = "column",
	showCV,
	item,
}: PageContentProps) => {
	const images = item?.images || [];

	return (
		<div className={styles.container}>
			<div className={styles.presentation}>
				<ListDetail item={item} />
				<PagePresentation
					description={description}
					additionalInfo={additionalInfo}
					layout={layout}
					showCV={showCV}
				/>
			</div>
			<div className={styles.slider}>
				<Slider images={images} />
			</div>
		</div>
	);
};

export default PageContent;
