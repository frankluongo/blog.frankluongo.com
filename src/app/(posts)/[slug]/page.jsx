import { NotionBlock } from "#components/NotionBlock";
import { notionQueryDb } from "#lib/notion";
import { notionListBlockChildren } from "src/app/lib/notion";

async function fetchBlock({ id }) {
  const children = await notionListBlockChildren(id);
  return { id, children };
}

async function fetchPost(slug) {
  const post = await notionQueryDb({
    filter: {
      property: "slug",
      rich_text: {
        equals: slug,
      },
    },
  });
  const postId = post[0].id;
  const allBlocks = await notionListBlockChildren(postId);
  const blocksWithChildren = await Promise.all(
    allBlocks.filter((block) => block.has_children).map(fetchBlock)
  );
  const blocks = allBlocks.map((block) => {
    // Add child blocks if the block should contain children but none exists
    if (block.has_children && !block[block.type].children) {
      block[block.type].children = blocksWithChildren.find(
        (childBlock) => childBlock.id === block.id
      )?.children;
    }
    return block;
  });

  return { page, blocks, revalidate: 1 };
}

const page = async ({ params }) => {
  const { blocks } = await fetchPost(params.slug);

  return (
    <div className="container blog block-gap:1">
      {blocks.map((block) => (
        <NotionBlock key={block.id} {...block} />
      ))}
    </div>
  );
};

export default page;
