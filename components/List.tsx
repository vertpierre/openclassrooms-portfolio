import type { Project } from "../interfaces";
import ListItem from "./ListItem";
import MasonryGrid from "./MasonryGrid";

type Props = {
	items: Project[];
};

const List = ({ items }: Props) => {
	const reversedItems = [...items].reverse();

	return (
		<MasonryGrid>
			{reversedItems.map((item) => (
				<ListItem key={item.id} data={item} />
			))}
		</MasonryGrid>
	);
};

export default List;
