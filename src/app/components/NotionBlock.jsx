import { Block } from "./Block";
import { NotionCode } from "./NotionCode";
import { NotionHeading } from "./NotionHeading";
import { NotionListItem } from "./NotionListItem";
import { NotionParagraph } from "./NotionParagraph";
import { NotionTable } from "./NotionTable";

const views = {
  // bulleted_list_item: NotionListItem,
  code: NotionCode,
  heading_1: NotionHeading,
  heading_2: NotionHeading,
  heading_3: NotionHeading,
  paragraph: NotionParagraph,
  table: NotionTable,
};

export const NotionBlock = (props) => {
  const { type } = props;
  const RenderedBlock = views[type] || Block;
  return <RenderedBlock {...props} />;
};
