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
    {
      type: 'category',
      label: 'Getting started',
      items: [
        {
          type: 'category',
          label: 'INTRODUCTION',
          items: [
            'getting-started/introduction/overview',
            'getting-started/introduction/problem-solution',
            'getting-started/introduction/value-proposition',
            'getting-started/introduction/target-audience',
          ],
        },
        {
          type: 'category',
          label: 'TOKENOMICS',
          items: [
            'getting-started/tokenomics/whats-hype-based-betting',
            'getting-started/tokenomics/token-hype',
            'getting-started/tokenomics/stake',
            'getting-started/tokenomics/yield-farming',
            'getting-started/tokenomics/oracle',
          ],
        },
        {
          type: 'category',
          label: 'ARCHITECTURE',
          items: [
            'getting-started/architecture/smart-contracts',
            'getting-started/architecture/backend',
            'getting-started/architecture/frontend',
          ],
        },
        {
          type: 'category',
          label: 'ROADMAP',
          items: [
            'getting-started/roadmap/v1',
            'getting-started/roadmap/v2',
            'getting-started/roadmap/v3',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
