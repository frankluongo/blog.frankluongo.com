import { silkaBold } from "../fonts/fonts";
import { notionParser } from "#lib/notionParser";

export const NotionHeading = (props) => {
  const size = props.type.split("_")[1];
  const Tag = `h${size}`;

  const { content } = notionParser.getContent(props, props.type);
  return <Tag className={silkaBold.className}>{content}</Tag>;
};
