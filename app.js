const serverSettings = require("./data/serverSettings");

require("apostrophe")({
  shortName: "a3-pawpawshouse",
  baseUrl: serverSettings.baseUrl,
  modules: {
    // Apostrophe module configuration
    // *******************************
    //
    // NOTE: most configuration occurs in the respective modules' directories.
    // See modules/@apostrophecms/page/index.js for an example.
    //
    // Any modules that are not present by default in Apostrophe must at least
    // have a minimal configuration here to turn them on: `moduleName: {}`
    // ***********************************************************************
    // Enable search
    "@apostrophecms/search": {},
    // Sitemap apostrophecms/sitemap
    "@apostrophecms/sitemap": {},
    // Apostrophe SEO module
    "@apostrophecms/seo": {},
    // For Facebook's open-graph stuff
    "@apostrophecms/open-graph": {},
    // Add SEO global library
    "@apostrophecms/global": {
      options: {
        seoGoogleTagManager: true,
      },
    },
    // `className` options set custom CSS classes for Apostrophe core widgets.
    "@apostrophecms/rich-text-widget": {
      options: {
        className: "bp-rich-text",
      },
    },
    "@apostrophecms/image-widget": {
      options: {
        className: "bp-image-widget",
      },
    },
    "@apostrophecms/video-widget": {
      options: {
        className: "bp-video-widget",
      },
    },
    // `asset` supports the project's webpack build for client-side assets.
    asset: {},
    // The project's first custom page type.
    "default-page": {},
    // blog articles
    article: {},
    "article-page": {},
    // Profile page
    "about-page": {},
    // For prose type pages
    "letter-page": {},
    // Utility widgets
    "two-column-widget": {},
    "code-widget": {},
  },
});
