import type { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "./Layout.module.css";
import ThemeSwitcher from "./ThemeSwitcher";
import BackdropBlur from "./BackdropBlur";
import PageTransition from "./PageTransition";
import type { CSSProperties } from "react";

interface Props {
	children?: ReactNode;
	title?: string;
	baseTitle?: string;
}

const Layout = ({
	children,
	title = "pierre",
	baseTitle = "pierre",
}: Props) => {
	const [scrollPixels, setScrollPixels] = useState(0);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			setScrollPixels(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const formatTitle = () => {
		if (title === baseTitle) return baseTitle;
		return `${baseTitle} > ${title}`;
	};

	if (!isMounted) {
		return null;
	}

	const containerStyle = {
		"--scroll-pixels": scrollPixels,
	} as CSSProperties;

	const contentStyle = {} as CSSProperties;

	return (
		<div className={styles.container} style={containerStyle}>
			<BackdropBlur />
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="robots" content="index, follow" />
				<link rel="canonical" href="https://dev.vertpierre.com" />
				<title>{formatTitle()}</title>
				<meta
					name="description"
					content="Portfolio de Pierre Roussel, développeur web et graphiste."
				/>
				<meta property="og:title" content="Pierre Roussel" />
				<meta
					property="og:description"
					content="Portfolio de Pierre Roussel, développeur web et graphiste."
				/>
				<meta
					property="og:image"
					content="https://dev.vertpierre.com/public/image.webp"
				/>
				<meta property="og:url" content="https://dev.vertpierre.com" />
				<meta property="og:type" content="website" />
			</Head>
			<header className={styles.header}>
				<nav className={styles.nav}>
					<Link href="/">{title === "pierre" ? "pierre roussel" : "accueil"}</Link>
					<Link href="/about">à propos</Link>
				</nav>
				<ThemeSwitcher />
			</header>
			<PageTransition>
				<div className={styles.content} style={contentStyle}>
					{children}
				</div>
			</PageTransition>
		</div>
	);
};

export default Layout;
