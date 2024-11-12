import type { NextApiRequest, NextApiResponse } from "next";
import type { Project } from "../../../interfaces";
import { sampleProjectData } from "../../../utils/data-fr";

type ErrorResponse = {
	statusCode: number;
	message: string;
};

const handler = (
	_req: NextApiRequest,
	res: NextApiResponse<Project[] | ErrorResponse>,
) => {
	try {
		if (!Array.isArray(sampleProjectData)) {
			throw new Error("Cannot find project data");
		}

		res.status(200).json(sampleProjectData);
	} catch (err) {
		const error = err as Error;
		res.status(500).json({ statusCode: 500, message: error.message });
	}
};

export default handler;
