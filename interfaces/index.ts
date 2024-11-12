export interface Project {
	id: string;
	title: string;
	slug: string;
	tools: string[];
	technologies: string[];
	duration: {
		start: string;
		end: string;
	};
	description: string;
	additionalInfo: string;
	images?: {
		src: string;
		alt: string;
		id: string;
	}[];
}

export interface AboutData {
	name: string;
	introduction: string;
	description: string;
	additionalInfo: string;
}
