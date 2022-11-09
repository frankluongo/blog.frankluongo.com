export const notionParser = {
  getContent(data, type) {
    const item = data?.[type]?.rich_text;
    if (!item.length) return { content: "", href: null };
    const txt = item[0] || {};
    return {
      content: txt?.text?.content || "",
      href: txt?.href || null,
      contents: item.map(this.parseText),
    };
  },
  getRawTitle(data) {
    return data?.properties?.name?.title?.[0]?.plain_text || null;
  },
  getUrl(data) {
    return `/${data?.properties?.slug?.rich_text?.[0]?.plain_text}` || null;
  },
  parseText(item) {
    function parseAnnotations(obj) {
      if (!obj) return "";
      return Object.entries(obj)
        .filter(([_, val]) => val)
        .map(([key, val]) => (typeof val === "boolean" ? key : `${key}-${val}`))
        .join(" ");
    }

    return {
      classes: parseAnnotations(item?.annotations),
      text: item.text.content,
      link: item.text.link,
      href: item.href,
      isCode: item?.annotations?.code,
    };
  },
};
