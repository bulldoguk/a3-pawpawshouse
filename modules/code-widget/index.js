// modules/two-column-widget/index.js
module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Code block",
  },
  // 👇 The widget type's field schema
  fields: {
    add: {
      myCodeBlock: {
        type: "area",
        label: "Code goes here",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {},
          },
        },
      },
    },
  },
};
