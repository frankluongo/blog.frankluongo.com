export const TextBlock = ({ text }) => {
  if (!text) return null;

  return text.map((value) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    return (
      <span
        className={[
          bold ? "bold" : "",
          code ? "code" : "",
          italic ? "italic" : "",
          strikethrough ? "strikethrough" : "",
          underline ? "underline" : "",
        ].join(" ")}
        style={color !== "default" ? { color } : {}}
        key={value.id}
      >
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    );
  });
};
