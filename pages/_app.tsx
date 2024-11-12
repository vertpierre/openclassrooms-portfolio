import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "../styles/preflight.css";
import "../styles/variables.css";
import "../styles/theme.css";

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();

	return <Component {...pageProps} key={router.asPath} />;
}

export default MyApp;
