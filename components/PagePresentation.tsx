import Link from "next/link";
import styles from "./PagePresentation.module.css";

export interface PagePresentationProps {
	description: string;
	additionalInfo: string;
	layout?: "row" | "column";
	showCV?: boolean;
}

const PagePresentation = ({
	description,
	additionalInfo,
	layout = "column",
	showCV = false,
}: PagePresentationProps) => (
	<section className={`${styles.pagePresentation} ${styles[layout]}`}>
		<p>{description}</p>
		<p>
			{additionalInfo}
			{showCV && (
				<Link href="/cv.pdf" target="_blank" rel="noreferrer">
					CV.
				</Link>
			)}
		</p>
	</section>
);

export default PagePresentation;
