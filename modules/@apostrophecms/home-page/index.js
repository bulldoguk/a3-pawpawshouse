module.exports = {
  fields: {
    add: {
      bodycontent: {
        label: "bodycontent",
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
  },
};
