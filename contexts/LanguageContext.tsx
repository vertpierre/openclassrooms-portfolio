import {
	createContext,
	useContext,
	useState,
	useEffect,
	type ReactNode,
} from "react";

interface LanguageContextType {
	language: "en" | "fr";
	toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
);

function getBrowserLanguage(): "en" | "fr" {
	if (typeof window === "undefined") return "fr"; // Default for SSR

	// Get browser language
	const browserLang = navigator.language.toLowerCase().split("-")[0];

	// Check if browser language is supported, default to 'fr' if not
	return browserLang === "en" ? "en" : "fr";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [language, setLanguage] = useState<"en" | "fr">("fr"); // Default initial state
	const [isInitialized, setIsInitialized] = useState(false);

	useEffect(() => {
		// Only run this once on component mount
		if (!isInitialized) {
			// First check localStorage
			const savedLanguage = localStorage.getItem("language");

			if (savedLanguage === "en" || savedLanguage === "fr") {
				setLanguage(savedLanguage);
			} else {
				// If no saved preference, use browser language
				const browserLang = getBrowserLanguage();
				setLanguage(browserLang);
				localStorage.setItem("language", browserLang);
			}

			setIsInitialized(true);
		}
	}, [isInitialized]);

	const toggleLanguage = () => {
		const newLanguage = language === "fr" ? "en" : "fr";
		setLanguage(newLanguage);
		localStorage.setItem("language", newLanguage);
	};

	return (
		<LanguageContext.Provider value={{ language, toggleLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage() {
	const context = useContext(LanguageContext);
	if (context === undefined) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
}
