// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export interface Project {
	id: number;
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
