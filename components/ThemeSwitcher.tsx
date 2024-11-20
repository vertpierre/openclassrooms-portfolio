import { useEffect, useState, useCallback } from "react";
import styles from "./ThemeSwitcher.module.css";

const ThemeSwitcher = () => {
	const [isDark, setIsDark] = useState(false);
	const [hue, setHue] = useState(232);
	const [hueInvert, setHueInvert] = useState(52);
	const [saturation, setSaturation] = useState(0);
	const [luminosityLight, setLuminosityLight] = useState(90);
	const [luminosityDark, setLuminosityDark] = useState(10);

	const createRandomNumber = (min: number, max: number) => {
		return Math.round(Math.random() * (max - min) + min);
	};

	const updateThemeColors = useCallback(
		(
			newHue: number,
			newHueInvert: number,
			newSaturation: number,
			newLuminosityLight: number,
			newLuminosityDark: number,
			newIsDark: boolean,
		) => {
			document.documentElement.style.setProperty(
				"--color-primary",
				`hsl(${newIsDark ? newHue : newHueInvert}, ${newSaturation}%, ${
					newIsDark ? newLuminosityLight : newLuminosityDark
				}%)`,
			);
			document.documentElement.style.setProperty(
				"--color-primary-dimmed",
				`hsla(${newIsDark ? newHue : newHueInvert}, ${newSaturation}%, ${
					newIsDark ? newLuminosityLight : newLuminosityDark
				}%, 0.2)`,
			);
			document.documentElement.style.setProperty(
				"--color-secondary",
				`hsl(${newIsDark ? newHueInvert : newHue}, ${newSaturation}%, ${
					newIsDark ? newLuminosityDark : newLuminosityLight
				}%)`,
			);

			// Save to localStorage
			localStorage.setItem(
				"theme",
				JSON.stringify({
					isDark: newIsDark,
					hue: newHue,
					hueInvert: newHueInvert,
					saturation: newSaturation,
					luminosityLight: newLuminosityLight,
					luminosityDark: newLuminosityDark,
				}),
			);
		},
		[],
	);

	const toggleDarkMode = () => {
		const newIsDark = !isDark;
		setIsDark(newIsDark);
		updateThemeColors(
			hue,
			hueInvert,
			saturation,
			luminosityLight,
			luminosityDark,
			newIsDark,
		);
	};

	const changeRandomColor = () => {
		const newHue = createRandomNumber(0, 360);
		const newHueInvert = (newHue + 180) % 360;
		setHue(newHue);
		setHueInvert(newHueInvert);
		setSaturation(100);
		updateThemeColors(
			newHue,
			newHueInvert,
			100,
			luminosityLight,
			luminosityDark,
			isDark,
		);
	};

	const toggleColorMode = () => {
		const newSaturation = saturation === 0 ? 100 : 0;
		setSaturation(newSaturation);
		updateThemeColors(
			hue,
			hueInvert,
			newSaturation,
			luminosityLight,
			luminosityDark,
			isDark,
		);
	};

	useEffect(() => {
		// Load theme from localStorage or use default values
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
			const theme = JSON.parse(savedTheme);
			setIsDark(theme.isDark);
			setHue(theme.hue);
			setHueInvert(theme.hueInvert);
			setSaturation(theme.saturation);
			setLuminosityLight(theme.luminosityLight);
			setLuminosityDark(theme.luminosityDark);
			updateThemeColors(
				theme.hue,
				theme.hueInvert,
				theme.saturation,
				theme.luminosityLight,
				theme.luminosityDark,
				theme.isDark,
			);
		} else {
			// If no saved theme, apply default grayscale theme
			updateThemeColors(
				hue,
				hueInvert,
				0,
				luminosityLight,
				luminosityDark,
				isDark,
			);
		}
	}, [
		updateThemeColors,
		hue,
		hueInvert,
		luminosityLight,
		luminosityDark,
		isDark,
	]);

	return (
		<div className={styles.container}>
			<button
				type="button"
				onClick={toggleDarkMode}
				className={`${styles.themeButton} ${styles.toggleDarkMode}`}
				aria-label="Toggle dark mode"
			/>
			<button
				type="button"
				onClick={toggleColorMode}
				className={`${styles.themeButton} ${styles.toggleColorMode}`}
				aria-label="Toggle grayscale mode"
			/>
			<button
				type="button"
				onClick={changeRandomColor}
				className={`${styles.themeButton} ${styles.changeRandomColor}`}
				aria-label="Change color theme"
			/>
		</div>
	);
};

export default ThemeSwitcher;
