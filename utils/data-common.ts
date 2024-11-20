import type { CommonMetadata } from "../interfaces";

export const commonMetadata: CommonMetadata = {
	baseTitle: "pierre",
	siteUrl: "https://dev.vertpierre.com",
	author: "Pierre Roussel",
};

// Add this export for easier access to baseTitle
export const baseTitle = commonMetadata.baseTitle;
