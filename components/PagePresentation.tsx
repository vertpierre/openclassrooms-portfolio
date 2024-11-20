import Link from "next/link";
import { parseText } from "../utils/textUtils";
import styles from "./PagePresentation.module.css";

export interface PagePresentationProps {
	description: string;
	additionalInfo?: string;
	layout?: "row" | "column";
	showCV?: boolean;
}

const TextContent = ({ text }: { text: string }) => {
	const segments = parseText(text);

	return (
		<>
			{segments.map((segment) => {
				switch (segment.type) {
					case "link":
						return (
							<Link
								key={segment.id}
								href={segment.url}
								target="_blank"
								rel="noreferrer"
							>
								{segment.content}
							</Link>
						);
					case "linebreak":
						return <br key={segment.id} />;
					default:
						return <span key={segment.id}>{segment.content}</span>;
				}
			})}
		</>
	);
};

const PagePresentation = ({
	description,
	additionalInfo,
	layout = "column",
	showCV = false,
}: PagePresentationProps) => (
	<section className={`${styles.pagePresentation} ${styles[layout]}`}>
		<p>
			<TextContent text={description} />
		</p>
		{additionalInfo && (
			<p>
				<TextContent text={additionalInfo} />
				{showCV && (
					<Link href="/cv.pdf" target="_blank" rel="noreferrer">
						CV.
					</Link>
				)}
			</p>
		)}
	</section>
);

export default PagePresentation;
