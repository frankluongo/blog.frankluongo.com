import Link from "next/link";
import { Fragment } from "react";
import { TextBlock } from "./TextBlock";

const renderNestedList = (block) => {
  const { type } = block;
  const value = block[type];
  if (!value) return null;

  const isNumberedList = value.children[0].type === "numbered_list_item";

  if (isNumberedList) {
    return (
      <ol>
        {value.children.map((block) => (
          <Block key={block.id} block={block} />
        ))}
      </ol>
    );
  }
  return (
    <ul>
      {value.children.map((block) => (
        <Block key={block.id} block={block} />
      ))}
    </ul>
  );
};

export const Block = (block) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case "bulleted_list_item":
      return (
        <li>
          <TextBlock text={value.rich_text} />
          {/* {value.children && renderNestedList(block)} */}
        </li>
      );
    case "numbered_list_item":
      return (
        <li>
          {value.rich_text}
          {value.children && renderNestedList(block)}
        </li>
      );
    case "to_do":
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
            {value.rich_text}
          </label>
        </div>
      );
    case "toggle":
      return (
        <details>
          <summary>{value.rich_text}</summary>
          {value.children?.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        </details>
      );
    case "child_page":
      return <p>{value.title}</p>;
    case "image":
      const src =
        value.type === "external" ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0]?.plain_text : "";
      return (
        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={caption} />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      );
    case "divider":
      return <hr key={id} />;
    case "quote":
      return <blockquote key={id}>{value.rich_text[0].plain_text}</blockquote>;
    case "code":
      const codeCaption = value.caption ? value.caption[0]?.plain_text : "";
      if (value.language === "plain text") {
        return (
          <figure>
            <figcaption>&quot;raw&quot;</figcaption>
            <pre color="blue" block key={id}>
              {value.rich_text[0].plain_text}
            </pre>
            {codeCaption && <figcaption>{codeCaption}</figcaption>}
          </figure>
        );
      } else {
        return (
          <figure>
            <figcaption>{value.language}</figcaption>
            <pre color="blue" language={value.language}>
              {value.rich_text.length > 0
                ? value.rich_text[0][value.rich_text[0].type].content
                : "// no code entered here"}
            </pre>
            {codeCaption && <figcaption>{codeCaption}</figcaption>}
          </figure>
        );
      }

    case "file":
      const src_file =
        value.type === "external" ? value.external.url : value.file.url;
      const splitSourceArray = src_file.split("/");
      const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
      const caption_file = value.caption ? value.caption[0]?.plain_text : "";
      return (
        <figure>
          <div className={styles.file}>
            📎{" "}
            <Link href={src_file} passHref>
              {lastElementInArray.split("?")[0]}
            </Link>
          </div>
          {caption_file && <figcaption>{caption_file}</figcaption>}
        </figure>
      );
    case "bookmark":
      const href = value.url;
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.bookmark}
        >
          {href}
        </a>
      );
    default:
      return `❌ Unsupported block (${
        type === "unsupported" ? "unsupported by Notion API" : type
      })`;
  }
};
