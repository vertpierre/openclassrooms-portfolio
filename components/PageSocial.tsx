import Link from "next/link";
import styles from "./PageSocial.module.css";

const PageSocial = () => (
	<section className={styles.pageSocial}>
		<ul className={styles.pageSocialList}>
			<li>
				<Link
					href="https://www.instagram.com/vert.pierre"
					target="_blank"
					rel="noreferrer"
				>
					instagram
				</Link>
			</li>
			<li>
				<Link
					href="https://threads.net/@vert.pierre"
					target="_blank"
					rel="noreferrer"
				>
					threads
				</Link>
			</li>
			<li>
				<Link href="https://x.com/vert__pierre" target="_blank" rel="noreferrer">
					x
				</Link>
			</li>
			<li>
				<Link
					href="https://www.vimeo.com/pierrers"
					target="_blank"
					rel="noreferrer"
				>
					vimeo
				</Link>
			</li>
			<li>
				<Link href="https://github.com/vertpierre" target="_blank" rel="noreferrer">
					github
				</Link>
			</li>
			<li>
				<Link
					href="https://www.linkedin.com/in/vertpierre/"
					target="_blank"
					rel="noreferrer"
				>
					linkedin
				</Link>
			</li>
		</ul>
	</section>
);

export default PageSocial;
