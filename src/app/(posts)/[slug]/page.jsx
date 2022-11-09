import { NotionBlock } from "#components/NotionBlock";
import { notionQueryDb } from "#lib/notion";
import { notionListBlockChildren } from "src/app/lib/notion";

async function fetchPost(slug) {
  const post = await notionQueryDb({
    filter: {
      property: "slug",
      rich_text: {
        equals: slug,
      },
    },
  });
  const postId = post.results[0].id;
  return await notionListBlockChildren(postId);
}

const page = async ({ params }) => {
  const data = await fetchPost(params.slug);
  const blocks = data?.results || [];
  return (
    <div className="container blog block-gap:1">
      {blocks.map((block) => (
        <NotionBlock key={block.id} {...block} />
      ))}
    </div>
  );
};

export default page;
