import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import styles from "./MasonryGrid.module.css";

type Props = {
	children: ReactNode[];
};

const MasonryGrid = ({ children }: Props) => {
	const [columns, setColumns] = useState(3);

	// Update columns based on window width
	useEffect(() => {
		const updateColumns = () => {
			if (window.innerWidth <= 800) {
				setColumns(1);
			} else if (window.innerWidth <= 1200) {
				setColumns(2);
			} else {
				setColumns(3);
			}
		};

		// Set initial columns
		updateColumns();

		// Add resize listener
		window.addEventListener("resize", updateColumns);
		return () => window.removeEventListener("resize", updateColumns);
	}, []);

	// Create column arrays based on current column count
	const columnWrapper: { [key: number]: ReactNode[] } = {};
	for (let i = 0; i < columns; i++) {
		columnWrapper[i] = [];
	}

	// Distribute children across columns
	for (let i = 0; i < children.length; i++) {
		const columnIndex = i % columns;
		columnWrapper[columnIndex].push(children[i]);
	}

	return (
		<div className={styles.grid}>
			{Array.from({ length: columns }).map((_, index) => (
				<div
					// Using column number and its content length as key for better uniqueness
					key={`column-${index}-${columnWrapper[index].length}`}
					className={styles.column}
				>
					{columnWrapper[index]}
				</div>
			))}
		</div>
	);
};

export default MasonryGrid;
