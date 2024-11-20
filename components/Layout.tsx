import type { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "./Layout.module.css";
import ThemeSwitcher from "./ThemeSwitcher";
import BackdropBlur from "./BackdropBlur";
import PageTransition from "./PageTransition";
import type { CSSProperties } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../contexts/LanguageContext";
import { navigationLabels as navFr } from "../utils/data-fr";
import { navigationLabels as navEn } from "../utils/data-en";
import { siteMetadata as metadataFr } from "../utils/data-fr";
import { siteMetadata as metadataEn } from "../utils/data-en";
import { commonMetadata } from "../utils/data-common";

interface Props {
	children?: ReactNode;
	title?: string;
	baseTitle?: string;
	description?: string;
}

const Layout = ({ children, title, baseTitle, description }: Props) => {
	const { language } = useLanguage();
	const nav = language === "fr" ? navFr : navEn;
	const metadata = language === "fr" ? metadataFr : metadataEn;
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
		if (
			title.toLowerCase().includes("about") ||
			title.toLowerCase().includes("à propos")
		) {
			return `${baseTitle} > ${nav.about}`;
		}
		return `${baseTitle} > ${title}`;
	};

	if (!isMounted) {
		return null;
	}

	const containerStyle = {
		"--scroll-pixels": scrollPixels,
	} as CSSProperties;

	const contentStyle = {} as CSSProperties;
	const pageDescription = description || metadata.description;

	const fullMetadata = {
		...commonMetadata,
		...metadata,
	};

	return (
		<div className={styles.container} style={containerStyle}>
			<BackdropBlur />
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>{formatTitle()}</title>
				<meta name="description" content={pageDescription} />
				<meta name="author" content={fullMetadata.author} />
				<meta name="keywords" content={metadata.keywords} />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta name="theme-color" content="#ffffff" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content={fullMetadata.siteUrl} />
				<meta property="og:title" content={formatTitle()} />
				<meta property="og:description" content={pageDescription} />
				<meta
					property="og:image"
					content={`${fullMetadata.siteUrl}/og-image.webp`}
				/>
				<meta property="og:site_name" content={fullMetadata.author} />
				<meta property="og:locale" content={metadata.locale} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:url" content={fullMetadata.siteUrl} />
				<meta name="twitter:title" content={formatTitle()} />
				<meta name="twitter:description" content={pageDescription} />
				<meta
					name="twitter:image"
					content={`${fullMetadata.siteUrl}/og-image.webp`}
				/>
				<link rel="canonical" href={fullMetadata.siteUrl} />
				<link
					rel="preload"
					href="/fonts/InterVariable.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/fonts/InterVariable-Italic.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/fonts/BIZUDPMincho-Regular.ttf"
					as="font"
					type="font/ttf"
					crossOrigin="anonymous"
				/>
				<meta name="robots" content="index, follow" />
				<meta name="googlebot" content="index, follow" />
				<meta name="format-detection" content="telephone=no" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />
				<meta name="apple-mobile-web-app-title" content={fullMetadata.author} />
			</Head>
			<header className={styles.header}>
				<nav className={styles.nav}>
					<Link href="/">{title === "pierre" ? "pierre roussel" : nav.home}</Link>
					<Link href="/about">{nav.about}</Link>
				</nav>
				<div className={styles.controls}>
					<LanguageSwitcher />
					<ThemeSwitcher />
				</div>
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
