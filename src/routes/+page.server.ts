import { POSTS_FOLDER_PATH } from "$lib/constants.server";
import { processFile } from "$lib/markdown";
import fs from "fs-extra";
import { join } from "node:path";
//@ts-ignore
import excerpts from "excerpts";

export const load: import("./$types").PageServerLoad<{
  posts: Record<string, any>[];
}> = async () => {
  const files = (await fs.readdir(POSTS_FOLDER_PATH)).filter((f) =>
    f.endsWith(".md")
  );
  const frontmatter = await Promise.all(
    files.map(async (file): Promise<Record<string, any>> => {
      const absoluteFilePath = join(POSTS_FOLDER_PATH, file);
      const processedFile = await processFile(absoluteFilePath);
      return {
        // Put it before the rest of the frontmatter to allow it to be overriden
        excerpt: excerpts(processedFile.content, { words: 15 }),
        ...processedFile.frontmatter,
        slug: file.replace(/.md$/, ""),
      };
    })
  );
  const sorted = frontmatter.sort((a, b) =>
    (a?.date as Date) > (b?.date as Date) ? -1 : 1
  );
  return { posts: sorted };
};
