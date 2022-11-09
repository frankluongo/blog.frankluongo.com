import { notionParser } from "#lib/notionParser";
import { ExternalLink } from "./ExternalLink";

import { silkaMonoRegular } from "../fonts/fonts";
import { silkaRegular } from "../fonts/fonts";

const NotionText = ({ classes, text, isCode, href }) => {
  if (href) return <ExternalLink href={href}>{text}</ExternalLink>;

  const className = `${classes} ${isCode ? silkaMonoRegular.className : ""}`;

  const Tag = isCode ? "code" : "span";
  return <Tag className={className}>{text}</Tag>;
};

export const NotionParagraph = (props) => {
  const { contents } = notionParser.getContent(props, props.type);

  if (!contents?.length) return <div className="spacer">&nbsp;</div>;

  return (
    <p className={silkaRegular.className}>
      {contents.map((content, i) => (
        <NotionText key={i} {...content} />
      ))}
    </p>
  );
};
