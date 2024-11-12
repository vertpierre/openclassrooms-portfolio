// biome-ignore lint: 
import { readdir, existsSync } from "fs";
// biome-ignore lint: 
import { join } from "path";

interface ImageData {
	src: string;
	alt: string;
	id: string;
}

export const getProjectImageCount = async (
	projectSlug: string,
): Promise<number> => {
	const projectDir = join(process.cwd(), "public", "images", projectSlug);

	try {
		if (!existsSync(projectDir)) return 0;

		return new Promise((resolve) => {
			readdir(projectDir, (err, files) => {
				if (err) resolve(0);
				const imageCount =
					files?.filter(
						(file) => file.startsWith(`${projectSlug}-`) && file.endsWith(".webp"),
					).length || 0;
				resolve(imageCount);
			});
		});
	} catch (error) {
		console.error(`Error reading directory for ${projectSlug}:`, error);
		return 0;
	}
};

export const generateProjectImages = async (
	projectSlug: string,
): Promise<ImageData[]> => {
	const count = await getProjectImageCount(projectSlug);

	return Array.from({ length: count }, (_, index) => {
		const imageNumber = index + 1;
		return {
			src: `/images/${projectSlug}/${projectSlug}-${imageNumber}.webp`,
			alt: `${projectSlug} image ${imageNumber}`,
			id: `${projectSlug}-${imageNumber}`,
		};
	});
};
