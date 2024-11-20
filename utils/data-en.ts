import type {
	Project,
	AboutData,
	NavigationLabels,
	ProjectLabels,
} from "../interfaces";

export const navigationLabels: NavigationLabels = {
	home: "home",
	about: "about",
};

export const aboutData: AboutData = {
	name: "Pierre Roussel",
	introduction:
		"Hello, I'm a Developer and Designer. Graduated in graphic design and motion at Gobelins, then in web development, I create dynamic websites in dialogue with graphic design.",
	description:
		"Graduated in Graphic & Digital Design, Motion Design at Gobelins, then trained in frontend and backend Web Development. I'm interested in both print media and digital media, with website design and a graphic design approach in dialogue with digital.",
	additionalInfo:
		"In my practice, I also have a great interest in web culture, open source software, new tools and media [AI, generative design, AR, ...]. You can find more information on my social networks below or see my ",
};

export const projectLabels: ProjectLabels = {
	tools: "Tools",
	technologies: "Technologies",
	duration: "Duration",
};

export const sampleProjectData: Project[] = [
	{
		id: "1",
		title: "Open House Days",
		slug: "journees-portes-ouvertes",
		tools: ["html", "css", "javascript"],
		technologies: ["frontend", "visual identity"],
		duration: {
			start: "4 days",
			end: "february 2021",
		},
		description:
			"This website was created for the Open House Days of the DNMADE and DSAA sections at Lycée Jacques Prévert in Boulogne.",
		additionalInfo:
			"Collaborative project completed in 5 days with Louanne Fournier and Élisa Gandon. Minimalist interface based on a single color to highlight visuals. Collaboration via Git. The site still serves as a base for DNMADE open houses.\n\n[visit github page](https://github.com/vertpierre/jpo_dnmade_prevert), [visit website](https://vertpierre.com/websites/jpo_dnmade_prevert/)",
		images: [],
	},
	{
		id: "2",
		title: "Project MADE",
		slug: "projet-made",
		tools: [
			"scribus",
			"krita",
			"blender",
			"html",
			"css",
			"javascript",
			"php",
			"paged.js",
		],
		technologies: ["frontend", "backend", "workshop", "motion design", "design"],
		duration: {
			start: "february 2022",
			end: "june 2022",
		},
		description:
			"Project MADE is a project aimed at creating a graphic device, focusing on reflections and subjects discussed in the thesis on free software.",
		additionalInfo:
			"Workshop and website dedicated to free creation tools, aimed at improving their understanding and presentation. Creation of visual identity and mediation materials. First workshop conducted around motion design.\n\n[visit github page](https://github.com/vertpierre/projet_made), [visit website](https://vertpierre.com/websites/projet_made/)",
		images: [],
	},
	{
		id: "3",
		title: "Play with Dina",
		slug: "play-with-dina",
		tools: ["html", "css", "javascript", "anime.js"],
		technologies: ["frontend", "typography", "design"],
		duration: {
			start: "1 month",
			end: "august 2023",
		},
		description:
			"Design of a web application for the presentation of a new typeface developed by baldinger-vuhuu studio.",
		additionalInfo:
			"Interactive web application allowing dynamic exploration of Dina Chaumont Display typeface glyphs. Integration of interactive motion design with Anime.js to create an immersive user experience.\n\n[visit website](https://play-with-dina.bvhtype.com/)",
		images: [],
	},
	{
		id: "4",
		title: "Le Grand Garçon",
		slug: "le-grand-garcon",
		tools: ["html", "css", "javascript", "php"],
		technologies: ["frontend", "design", "backend", "CMS"],
		duration: {
			start: "1 month",
			end: "september 2023",
		},
		description:
			"Design and frontend/backend development of a portfolio website for Le Grand Garçon.",
		additionalInfo:
			"Development of a lightweight PHP CMS for a portfolio site showcasing Michaël Isler's work. Simplified update system based on an image folder and a text file with custom markup.\n\n[visit website](https://legrandgarcon.com/)",
		images: [],
	},
	{
		id: "5",
		title: "Sophie Bluel",
		slug: "sophie-bluel",
		tools: ["html", "css", "javascript"],
		technologies: ["frontend", "REST API", "authentication"],
		duration: {
			start: "1 month",
			end: "may 2024",
		},
		description:
			"Creation of a dynamic web page for interior designer Sophie Bluel's website, including user interaction management with a REST API.",
		additionalInfo:
			"Site developed in Vanilla JavaScript with user event handling and DOM manipulation. REST API integration, authentication system and upload modal, all while respecting accessibility standards.\n\n[visit github page](https://github.com/vertpierre/openclassrooms-portfolio-architecte-sophie-bluel)",
		images: [],
	},
	{
		id: "6",
		title: "Kasa",
		slug: "kasa",
		tools: ["react", "react-router", "html", "css", "javascript", "sass"],
		technologies: ["frontend", "routing"],
		duration: {
			start: "1 month",
			end: "july 2024",
		},
		description:
			"Development of a modern and responsive real estate rental web application with React and React Router, based on provided mockups and API.",
		additionalInfo:
			"React application with React Router and SASS animations. Focus on reusable components and optimized routing architecture with error handling.\n\n[visit github page](https://github.com/vertpierre/openclassrooms-kasa/), [visit website](https://openclassrooms-kasa-vertpierre.vercel.app/)",
		images: [],
	},
	{
		id: "7",
		title: "Mon Vieux Grimoire",
		slug: "mon-vieux-grimoire",
		tools: [
			"react",
			"node",
			"express",
			"mongodb",
			"mongoose",
			"sharp",
			"multer",
			"bcrypt",
			"jwt",
		],
		technologies: ["frontend", "backend", "REST API", "authentication"],
		duration: {
			start: "august 2024",
			end: "october 2024",
		},
		description:
			"Backend and frontend development of a book rating site for a Lille bookstore chain, including authentication system and optimized data management.",
		additionalInfo:
			"REST API with Express and MongoDB, complete CRUD system for book and rating management. Secure system for account creation, authentication, and book upload. MVC architecture, image and data optimization following Green Code principles.\n\n[visit github page (frontend)](https://github.com/vertpierre/openclassrooms-frontend-book-rating/), [visit github page (backend)](https://github.com/vertpierre/openclassrooms-backend-book-rating/)",
		images: [],
	},
];
