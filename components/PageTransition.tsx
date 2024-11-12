import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./PageTransition.module.css";

type Props = {
	children: ReactNode;
};

const PageTransition = ({ children }: Props) => {
	const [isVisible, setIsVisible] = useState(false);
	const router = useRouter();

	useEffect(() => {
		setIsVisible(true);

		const handleRouteChange = () => {
			setIsVisible(false);
		};

		router.events.on("routeChangeStart", handleRouteChange);

		return () => {
			router.events.off("routeChangeStart", handleRouteChange);
		};
	}, [router]);

	return (
		<div
			className={`${styles.pageTransition} ${isVisible ? styles.visible : ""}`}
		>
			{children}
		</div>
	);
};

export default PageTransition;
