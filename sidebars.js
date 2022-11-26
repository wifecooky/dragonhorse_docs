/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  sidebar: [
    'products',
    {
      type: 'category',
      label: 'テント・タープ類',
      link: {
        type: 'generated-index',
        description: 'All Tent & Tarp',
        slug: '/tents',
      },
      items: ['tents/tarp'],
    },
    {
      type: 'category',
      label: 'クッカー類',
      link: {
        type: 'generated-index',
        description: 'All Cooker',
        slug: '/cookers',
      },
      items: ['cookers/cooker'],
    },
    {
      type: 'category',
      label: 'テーブル類',
      link: {
        type: 'generated-index',
        description: 'All Table',
        slug: '/tables',
      },
      items: ['tables/table'],
    },
    'about',
    'faq',
  ],
};

module.exports = sidebars;
