import styles from "./PageTitle.module.css";

interface PageTitleProps {
	title: string;
}

const PageTitle = ({ title }: PageTitleProps) => (
	<section className={styles.pageTitle}>
		<h1>{title}</h1>
		<hr />
	</section>
);

export default PageTitle;
