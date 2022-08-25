import { resolve } from "node:path";
import { env } from "$env/dynamic/private";

export const POSTS_FOLDER_PATH = resolve(
  env.NODE_ENV === "production" ? "posts" : "devPosts"
);
