import { NotionCode } from "./NotionCode";
import { NotionError } from "./NotionError";
import { NotionHeading } from "./NotionHeading";
import { NotionParagraph } from "./NotionParagraph";

const views = {
  code: NotionCode,
  heading_1: NotionHeading,
  heading_2: NotionHeading,
  heading_3: NotionHeading,
  paragraph: NotionParagraph,
};

export const NotionBlock = (props) => {
  const { type } = props;
  const Block = views[type] || NotionError;
  return <Block {...props} />;
};
