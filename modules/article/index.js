const dayjs = require("dayjs");

const filters = require("./filters");
const queries = require("./queries");

module.exports = {
  extend: "@apostrophecms/piece-type",
  options: {
    label: "bdArticle:label",
    pluralLabel: "bdArticle:pluralLabel",
    sort: { createdAt: -1 },
    i18n: {
      ns: "bdArticle",
      browser: true,
    },
  },
  columns: {},
  fields: {
    add: {
      bodycontent: {
        label: "bdArticle:content",
        type: "area",
        options: {
          widgets: {
            "@apostrophecms/image": {},
            "@apostrophecms/video": {},
            "@apostrophecms/rich-text": {},
            "@apostrophecms/oembed": {},
            "two-column": {},
            code: {},
          },
        },
      },
    },
    group: {
      basics: {
        fields: ["title", "bodycontent"],
      },
    },
  },
  handlers(self, options) {},
  methods(self, options) {},
  filters,
  queries,
  components(self) {
    return {
      // Returning the five most recently created articles.
      async latest(req, data) {
        const articles = await self
          .find(req)
          .sort({ createdAt: data.sort || 1 })
          .limit(data.max || 5)
          .toArray();
        return {
          articles,
        };
      },
    };
  },
};
