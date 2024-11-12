import PagePresentation from "./PagePresentation";
import PageSocial from "./PageSocial";
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
}: AboutContentProps) => (
	<div className={styles.container}>
		<PagePresentation
			description={description}
			additionalInfo={additionalInfo}
			layout="row"
			showCV={showCV}
		/>
		<PageSocial />
	</div>
);

export default AboutContent;
