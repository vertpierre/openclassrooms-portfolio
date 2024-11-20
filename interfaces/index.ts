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
	links?: {
		text: string;
		url: string;
	}[];
}

export interface AboutData {
	name: string;
	introduction: string;
	description: string;
	additionalInfo: string;
}

export interface NavigationLabels {
	home: string;
	about: string;
	projects: string;
}

export interface ProjectLabels {
	tools: string;
	technologies: string;
	duration: string;
}

export interface CommonMetadata {
	baseTitle: string;
	siteUrl: string;
	author: string;
}

export interface SiteMetadata extends CommonMetadata {
	title: string;
	description: string;
	locale: string;
	keywords: string;
}
