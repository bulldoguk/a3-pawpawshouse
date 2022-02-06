module.exports = {
  fields: {
    add: {
      maintitle: {
        label: "Main Title",
        type: "string",
        help: "Main page title",
      },
      shorttitle: {
        label: "Short Title",
        type: "string",
        help: "Short version of main title - mainly for mobile",
      },
      tagline: {
        label: "Tag Line",
        type: "string",
        help: "Tag line for your nav bar",
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
    group: {
      basics: {
        label: "Basics",
        fields: ["maintitle", "shorttitle", "tagline", "logo"],
      },
    },
  },
};
