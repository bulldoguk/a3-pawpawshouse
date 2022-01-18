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
      // Colors
      navBGColor: {
        label: "Nav background color",
        help: "Tailwindcss color for nav background",
        type: "string",
      },
      navTextColor: {
        label: "Nav text background color",
        help: "Tailwindcss color for nav text",
        type: "string",
      },
      iconBGColor: {
        label: "Icon background color",
        help: "Tailwindcss color for nav icon",
        type: "string",
      },
      footerBGColor: {
        label: "Nav background color",
        help: "Tailwindcss color for nav background",
        type: "string",
      },
      footerTextColor: {
        label: "Nav text background color",
        help: "Tailwindcss color for nav text",
        type: "string",
      },
    },
    group: {
      basics: {
        label: "Basics",
        fields: ["maintitle", "shorttitle", "tagline", "logo"],
      },
      headerColors: {
        label: "Header Colors",
        fields: ["navBGColor", "iconBGColor", "navTextColor"],
      },
      footerColors: {
        label: "Footer Colors",
        fields: ["footerBGColor", "footerTextColor"],
      },
    },
  },
};
