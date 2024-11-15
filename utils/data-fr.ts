import type { Project, AboutData } from "../interfaces";

export const aboutData: AboutData = {
	name: "Pierre Roussel",
	introduction:
		"Hello, je suis Développeur et Designer. Diplômé en graphisme et en motion à Gobelins, puis en développement web, je crée des sites web dynamiques en dialogue avec le design graphique.",
	description:
		"Diplômé en Design Graphique & Numérique, en Motion Design à Gobelins, puis d'une formation en Développement Web frontend et backend. Je m'intéresse autant aux supports imprimés qu'aux médias numérique, avec la conception de sites web et une approche du design graphique en dialogue avec le numérique.",
	additionalInfo:
		"Je porte aussi, dans ma pratique, un grand intérêt à la culture du web, aux logiciels libres, aux nouveaux outils et supports [IA, design génératif, AR, …]. Vous pouvez retrouver plus d'informations sur mes réseaux ci-dessous ou voir mon ",
};

export const sampleProjectData: Project[] = [
	{
		id: "1",
		title: "Journées Portes Ouvertes",
		slug: "journees-portes-ouvertes",
		tools: ["html", "css", "javascript"],
		technologies: ["frontend", "identité visuelle"],
		duration: {
			start: "4 jours",
			end: "février 2021",
		},
		description:
			"Ce site web a été créé à l'occasion des Journées portes ouvertes des sections DNMADE et DSAA du Lycée Jacques Prévert à Boulogne.",
		additionalInfo:
			"Projet collaboratif réalisé en 5 jours avec Louanne Fournier et Élisa Gandon. Interface épurée basée sur une couleur unique pour mettre en avant les visuels. Collaboration via Git. Le site sert toujours de base pour les portes ouvertes du DNMADE.",
		images: [],
	},
	{
		id: "2",
		title: "Projet MADE",
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
			start: "février 2022",
			end: "juin 2022",
		},
		description:
			"Le projet MADE est un projet visant à créer un dispositif graphique, portant sur des réflexions ou des sujets abordées lors du mémoire sur le logiciel libre.",
		additionalInfo:
			"Workshop et site web dédié aux outils de création libre, visant à améliorer leur compréhension et présentation. Création d'une identité visuelle et supports de médiation. Premier workshop réalisé autour du motion design.",
		images: [],
	},
	{
		id: "3",
		title: "Play with Dina",
		slug: "play-with-dina",
		tools: ["html", "css", "javascript", "anime.js"],
		technologies: ["frontend", "typographie", "design"],
		duration: {
			start: "1 mois",
			end: "août 2023",
		},
		description:
			"Conception d'une application web pour la présentation d'une nouvelle typographie développée par le studio baldinger-vuhuu.",
		additionalInfo:
			"Application web interactive permettant d'explorer les glyphes de la typographie Dina Chaumont Display de manière dynamique. Intégration de motion design avec Anime.js pour créer une expérience utilisateur immersive.",
		images: [],
	},
	{
		id: "4",
		title: "Le Grand Garçon",
		slug: "le-grand-garcon",
		tools: ["html", "css", "javascript", "php"],
		technologies: ["frontend", "design", "backend", "CMS"],
		duration: {
			start: "1 mois",
			end: "septembre 2023",
		},
		description:
			"Conception du design et développement frontend et backend d'un site portfolio pour Le Grand Garçon.",
		additionalInfo:
			"Développement d'un CMS léger en PHP pour un site portfolio mettant en avant le travail de Michaël Isler. Système de mise à jour simplifié basé sur un dossier d'images et un fichier texte.",
		images: [],
	},
	{
		id: "5",
		title: "Sophie Bluel",
		slug: "sophie-bluel",
		tools: ["html", "css", "javascript"],
		technologies: ["frontend", "API REST", "authentification"],
		duration: {
			start: "1 mois",
			end: "mai 2024",
		},
		description:
			"Création d'une page web dynamique pour le site de l'architecte d'intérieur Sophie Bluel, incluant la gestion des événements utilisateurs et la manipulation du DOM.",
		additionalInfo:
			"Site développé en JavaScript Vanilla avec gestion des événements utilisateurs et manipulation du DOM. Intégration d'une API REST, système d'authentification et modale d'upload, le tout en respectant les normes d'accessibilité.",
		images: [],
	},
	{
		id: "6",
		title: "Kasa",
		slug: "kasa",
		tools: ["react", "react-router", "html", "css", "javascript", "sass"],
		technologies: ["frontend", "routing"],
		duration: {
			start: "1 mois",
			end: "juillet 2024",
		},
		description:
			"Développement d'une application web de location immobilière moderne et réactive avec React et React Router, basée sur des maquettes fournies.",
		additionalInfo:
			"Application React avec React Router et animations CSS/SASS. Focus sur les composants réutilisables et l'architecture de routage. Utilisation de données JSON simulées pour une expérience utilisateur fluide.",
		images: [],
	},
	{
		id: "7",
		title: "Mon Vieux Grimoire",
		slug: "mon-vieux-grimoire",
		tools: ["react", "node.js", "express", "mongodb", "mongoose"],
		technologies: ["frontend", "API REST", "backend", "authentification"],
		duration: {
			start: "août 2024",
			end: "octobre 2024",
		},
		description:
			"Développement du backend et frontend d'un site de notation de livres pour une chaîne de librairies lilloise, incluant un système d'authentification et une gestion optimisée des images.",
		additionalInfo:
			"API REST avec Express et MongoDB, système CRUD complet pour la gestion des livres et notations. Architecture MVC, optimisation des images et sécurité des données selon les principes du Green Code.",
		images: [],
	},
];
