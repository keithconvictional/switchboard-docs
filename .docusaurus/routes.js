
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','520'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post','6c7'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post','f06'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post','bee'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','ddf'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','ede'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','4c2'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','752'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','bfa'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','738'),
    routes: [
      {
        path: '/docs/building-new-switches',
        component: ComponentCreator('/docs/building-new-switches','aa1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Deployments/AWS/deploying-to-aws',
        component: ComponentCreator('/docs/Deployments/AWS/deploying-to-aws','766'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Deployments/AWS/manual-setup-for-aws',
        component: ComponentCreator('/docs/Deployments/AWS/manual-setup-for-aws','f78'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Deployments/GCP/deploying-to-gcp',
        component: ComponentCreator('/docs/Deployments/GCP/deploying-to-gcp','392'),
        exact: true
      },
      {
        path: '/docs/Deployments/Shared/rate-limiting',
        component: ComponentCreator('/docs/Deployments/Shared/rate-limiting','176'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Deployments/Shared/setups',
        component: ComponentCreator('/docs/Deployments/Shared/setups','5bb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/getting-started',
        component: ComponentCreator('/docs/getting-started','a24'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
