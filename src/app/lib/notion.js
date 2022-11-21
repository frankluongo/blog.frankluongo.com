import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_KEY });
const dbId = process.env.NOTION_DATABASE_ID;

export async function notionQueryDb(input = {}) {
  try {
    const res = await notion.databases.query({
      database_id: dbId,
      filter: {
        property: "published",
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: "created",
          direction: "descending",
        },
      ],
      ...input,
    });
    return res?.results || [];
  } catch (e) {
    console.error(e);
  }
}

export async function notionRetrieveDb(input = {}) {
  try {
    const res = await notion.databases.retrieve({
      database_id: dbId,
      ...input,
    });
    return res;
  } catch (e) {
    console.error(e);
  }
}

export async function notionListBlockChildren(id) {
  const blocks = [];
  let cursor;
  while (true) {
    try {
      const res = await notion.blocks.children.list({
        start_cursor: cursor,
        block_id: id,
        page_size: 200,
      });
      blocks.push(...res.results);
      if (!res.next_cursor) break;
      cursor = res.next_cursor;
    } catch (e) {
      console.error(e);
      break;
    }
  }
  return blocks;
}
