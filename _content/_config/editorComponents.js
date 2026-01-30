const multilineToInline = (multi) => {
  return multi?.replace(/\n/g, "\\n")?.replace(/"/g, '\\"');
};
const inlineToMultiline = (inline) => {
  return inline?.replace(/\\n/g, "\n")?.replace(/\\"/g, '"');
};

export const pageHeader = {
  id: "pageHeader",
  label: "Page Header",
  // icon: "lunch_dining",
  fields: [
    {
      name: "image",
      label: "Image",
      widget: "image",
      required: true,
    },
    {
      name: "content",
      label: "Content",
      widget: "markdown",
      required: true,
    },
  ],
  pattern:
    /^{% partialWrapper "page-header\.njk", { image: "(?<image>.*?)" } %}(?<content>.*?){% endpartialWrapper %}$/ms,
  fromBlock: function (match) {
    return {
      image: match?.groups?.image,
      content: match?.groups?.content,
    };
  },
  toBlock: function ({ image, content }) {
    return `{% partialWrapper "page-header.njk", { image: "${image}" } %}
${content}
{% endpartialWrapper %}`;
  },
  toPreview: function (data) {
    return `TEST`;
  },
};
