// modules/two-column-widget/index.js
module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Two column",
  },
  // 👇 The widget type's field schema
  fields: {
    add: {
      reverse: {
        type: 'select',
        label: 'Reverse',
        def: false,
        choices: [
          { label: 'Normal', value: false },
          { label: 'Reverse', value: true }
        ]
      },
      // 👇 The first column area
      columnOne: {
        type: "area",
        label: "Column One",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {},
            "@apostrophecms/image": {},
            "two-column": {},
            code: {},
          },
        },
      },
      // 👇 The second column area
      columnTwo: {
        type: "area",
        label: "Column Two",
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
