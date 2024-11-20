import type { Project } from "../interfaces";
import { useLanguage } from "../contexts/LanguageContext";
import { projectLabels as projectLabelsFr } from "../utils/data-fr";
import { projectLabels as projectLabelsEn } from "../utils/data-en";
import styles from "./ListDetail.module.css";

type ListDetailProps = {
	item: Project;
};

const ListDetail = ({ item: project }: ListDetailProps) => {
	const { language } = useLanguage();
	const labels = language === "fr" ? projectLabelsFr : projectLabelsEn;

	return (
		<section className={styles.listDetail}>
			<div className={styles.listDetailItem}>
				<h3>{labels.tools}</h3>
				<p>{project.tools.join(", ")}</p>
			</div>
			<hr />
			<div className={styles.listDetailItem}>
				<h3>{labels.technologies}</h3>
				<p>{project.technologies.join(", ")}</p>
			</div>
			<hr />
			<div className={styles.listDetailItem}>
				<h3>{labels.duration}</h3>
				<div className={styles.listDetailDate}>
					<p>{project.duration.start}</p>
					<p>{project.duration.end}</p>
				</div>
			</div>
			<hr />
		</section>
	);
};

export default ListDetail;
