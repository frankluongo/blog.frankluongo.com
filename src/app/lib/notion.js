import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_KEY });
const dbId = process.env.NOTION_DATABASE_ID;

export async function notionQueryDb(input = {}) {
  try {
    const res = await notion.databases.query({
      database_id: dbId,
      ...input,
    });
    return res;
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
  try {
    const res = await notion.blocks.children.list({
      block_id: id,
      page_size: 200,
    });
    return res;
  } catch (e) {
    console.error(e);
  }
}
