import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "../styles/preflight.css";
import "../styles/variables.css";
import "../styles/theme.css";

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();

	return <Component {...pageProps} key={router.asPath} />;
}
