import { notionParser } from "#lib/notionParser";
import { InternalLink } from "./InternalLink";

export const Post = ({ post }) => {
  const slug = notionParser.getUrl(post);
  const title = notionParser.getRawTitle(post);

  if (!slug || !title) return null;

  return <InternalLink href={slug}>{title}</InternalLink>;
};
