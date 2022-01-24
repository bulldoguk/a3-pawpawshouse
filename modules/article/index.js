const dayjs = require('dayjs');

const filters = require('./filters');
const queries = require('./queries');

module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'bdArticle:label',
    pluralLabel: 'bdArticle:pluralLabel',
    sort: { title: 1 },
    i18n: {
      ns: 'bdArticle',
      browser: true
    }
  },
  columns: {
  },
  fields: {
    add: {
      bodycontent: {
        label: 'bdArticle:content',
        type: 'area',
        options: {
          widgets: {
            "@apostrophecms/image": {},
            "@apostrophecms/video": {},
            "@apostrophecms/rich-text": {},
            "@apostrophecms/oembed": {},
            "two-column": {},
          },
        },
      }
    },
    group: {
      basics: {
        fields: [
          'title',
          'bodycontent',
        ]
      },
    }
  },
  handlers(self, options) {
  },
  methods(self, options) {
  },
  filters,
  queries
};
