import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import matter from "gray-matter";
import fs from "fs-extra";

const markdownProcessor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype)
  .use(rehypeSanitize)
  .use(rehypeStringify);

export type MarkdownFile = {
  frontmatter: Record<string, any>;
  content: string;
};

export const getFrontmatter = async (text: string) => matter(text).data;

export const processText = async (text: string): Promise<MarkdownFile> => {
  const { data, content } = matter(text);
  const processedFile = await markdownProcessor.process(content);
  return {
    frontmatter: data,
    content: String(processedFile),
  };
};

const readFile = async (path: string) => await fs.readFile(path, "utf-8");

export const getFileFrontmatter = async (path: string) =>
  getFrontmatter(await readFile(path));

export const processFile = async (path: string) => {
  const file = await readFile(path);
  return processText(file);
};
