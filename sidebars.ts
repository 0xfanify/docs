import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'INTRODUCTION',
      items: [
        'introduction/problem-solution',
        'introduction/value-proposition',
        'introduction/target-audience',
      ],
    },
    {
      type: 'category',
      label: 'TOKENOMICS',
      items: [
        'tokenomics/whats-hype-based-betting',
        'tokenomics/how-to-calculate-dds',
        'tokenomics/token-hype',
        'tokenomics/stake',
        'tokenomics/yield-farming',
        'tokenomics/oracle',
      ],
    },
    {
      type: 'category',
      label: 'ARCHITECTURE',
      items: [
        'architecture/smart-contracts',
        'architecture/backend',
        'architecture/frontend',
      ],
    },
    {
      type: 'category',
      label: 'ROADMAP',
      items: [
        'roadmap/v1',
        'roadmap/v2',
        'roadmap/v3',
      ],
    },
  ],
};

export default sidebars;
