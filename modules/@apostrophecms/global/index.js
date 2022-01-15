module.exports = {
  fields: {
    add: {
      maintitle: {
        label: "Main Title",
        type: "string",
        help: "Main page title",
      },
      logo: {
        label: "Main logo",
        help: "Logo used for main nav bar and favicon",
        type: "area",
        options: {
          max: 1,
          widgets: {
            "@apostrophecms/image": {},
          },
        },
      },
    },
  },
};
