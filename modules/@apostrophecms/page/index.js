// This configures the @apostrophecms/pages module to add a "home" page type to the
// pages menu

module.exports = {
  options: {
    types: [
      {
        name: "default-page",
        label: "Default",
      },
      {
        name: "@apostrophecms/home-page",
        label: "Home",
      },
      {
        name: "article-page",
        label: "Articles",
      },
    ],
    park: [
      {
        parkedId: "searchPageId",
        title: "Search",
        slug: "/search",
        type: "@apostrophecms/search",
        label: "Search",
        orphan: true,
      },
    ],
  },
};
