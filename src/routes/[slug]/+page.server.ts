import { join } from "node:path";
import fs from "fs-extra";
import { error } from "@sveltejs/kit";
import { processFile } from "$lib/markdown";
import { POSTS_FOLDER_PATH } from "$lib/constants.server";

export const load: import("./$types").PageServerLoad = async ({ params }) => {
  const filePath = `${join(POSTS_FOLDER_PATH, params.slug)}.md`;
  const exists = await fs.pathExists(filePath);
  if (!exists) {
    throw error(404, "Post not found");
  }

  const processedFile = await processFile(filePath);
  return { ...processedFile, _seo: { title: processedFile.frontmatter.title } };
};
