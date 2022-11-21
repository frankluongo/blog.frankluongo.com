import { notionQueryDb } from "./lib/notion";

import { NotionHeading } from "#components/NotionHeading";
import { Post } from "#components/Post";

async function fetchPosts() {
  return await notionQueryDb();
}

export default async function Home() {
  const mockHeading = {
    type: "heading_1",
    heading_1: { rich_text: [{ text: { content: "Welcome to the blog!" } }] },
  };
  const posts = await fetchPosts();
  return (
    <div className="container blog">
      <NotionHeading {...mockHeading} />
      <ul className="block-gap:2">
        {posts.map((post, i) => (
          <li key={`${post?.id}-${i}`}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
