import { notionParser } from "#lib/notionParser";

import { silkaMonoRegular } from "../fonts/fonts";

export const NotionCode = (props) => {
  const { content } = notionParser.getContent(props, props.type);
  return (
    <pre lang={props.code.language} className={silkaMonoRegular.className}>
      {content}
    </pre>
  );
};
