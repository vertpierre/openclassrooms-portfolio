import styles from "./BackdropBlur.module.css";

const BackdropBlur = () => {
	return (
		<div className={styles.container}>
			{[...Array(16)].map((_, index) => (
				<div
					key={crypto.randomUUID()}
					className={styles.blur}
					style={
						{
							"--index": index,
						} as React.CSSProperties
					}
				/>
			))}
		</div>
	);
};

export default BackdropBlur;
