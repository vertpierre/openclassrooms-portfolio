import type { Project } from "../interfaces";
import styles from "./ListDetail.module.css";

type ListDetailProps = {
	item: Project;
};

const ListDetail = ({ item: project }: ListDetailProps) => (
	<section className={styles.listDetail}>
		<div className={styles.listDetailItem}>
			<h3>Outils</h3>
			<p>{project.tools.join(", ")}</p>
		</div>
		<hr />
		<div className={styles.listDetailItem}>
			<h3>Technologies</h3>
			<p>{project.technologies.join(", ")}</p>
		</div>
		<hr />
		<div className={styles.listDetailItem}>
			<h3>Durée</h3>
			<div className={styles.listDetailDate}>
				<p>{project.duration.start}</p>
				<p>{project.duration.end}</p>
			</div>
		</div>
		<hr />
	</section>
);

export default ListDetail;
