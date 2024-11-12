import Link from "next/link";
import Image from "next/image";
import type { Project } from "../interfaces";
import styles from "./ListItem.module.css";

type Props = {
	data: Project;
};

const ListItem = ({ data }: Props) => {
	const imagePath = `/images/${data.slug}/${data.slug}-1.webp`;

	return (
		<Link href={`/projects/${data.slug}`} className={styles.card}>
			<div className={styles.aspectRatioBox}>
				<Image
					src={imagePath}
					alt={`${data.title} preview`}
					className={styles.image}
					fill
					sizes="(max-width: 800px) 100vw, (max-width: 1200px) 50vw, 35vw"
					priority={false}
				/>
				<div className={styles.overlay}>
					<h2 className={styles.title}>{data.title}</h2>
				</div>
			</div>
		</Link>
	);
};

export default ListItem;
