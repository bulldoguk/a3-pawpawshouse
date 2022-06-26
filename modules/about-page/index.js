module.exports = {
  extend: "@apostrophecms/page-type",
  fields: {
    add: {
      bodyContent: {
        type: "area",
        label: "Body content",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {},
            "@apostrophecms/image": {},
            "two-column": {},
            code: {},
          },
        },
      },
    },
  },
};
