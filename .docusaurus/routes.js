
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/switchboard-docs/__docusaurus/debug',
    component: ComponentCreator('/switchboard-docs/__docusaurus/debug','869'),
    exact: true
  },
  {
    path: '/switchboard-docs/__docusaurus/debug/config',
    component: ComponentCreator('/switchboard-docs/__docusaurus/debug/config','7e9'),
    exact: true
  },
  {
    path: '/switchboard-docs/__docusaurus/debug/content',
    component: ComponentCreator('/switchboard-docs/__docusaurus/debug/content','c17'),
    exact: true
  },
  {
    path: '/switchboard-docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/switchboard-docs/__docusaurus/debug/globalData','7eb'),
    exact: true
  },
  {
    path: '/switchboard-docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/switchboard-docs/__docusaurus/debug/metadata','48d'),
    exact: true
  },
  {
    path: '/switchboard-docs/__docusaurus/debug/registry',
    component: ComponentCreator('/switchboard-docs/__docusaurus/debug/registry','d94'),
    exact: true
  },
  {
    path: '/switchboard-docs/__docusaurus/debug/routes',
    component: ComponentCreator('/switchboard-docs/__docusaurus/debug/routes','ef8'),
    exact: true
  },
  {
    path: '/switchboard-docs/blog',
    component: ComponentCreator('/switchboard-docs/blog','607'),
    exact: true
  },
  {
    path: '/switchboard-docs/blog/archive',
    component: ComponentCreator('/switchboard-docs/blog/archive','8ee'),
    exact: true
  },
  {
    path: '/switchboard-docs/blog/first-blog-post',
    component: ComponentCreator('/switchboard-docs/blog/first-blog-post','ba9'),
    exact: true
  },
  {
    path: '/switchboard-docs/blog/long-blog-post',
    component: ComponentCreator('/switchboard-docs/blog/long-blog-post','2aa'),
    exact: true
  },
  {
    path: '/switchboard-docs/blog/mdx-blog-post',
    component: ComponentCreator('/switchboard-docs/blog/mdx-blog-post','822'),
    exact: true
  },
  {
    path: '/switchboard-docs/blog/tags',
    component: ComponentCreator('/switchboard-docs/blog/tags','eb9'),
    exact: true
  },
  {
    path: '/switchboard-docs/blog/tags/docusaurus',
    component: ComponentCreator('/switchboard-docs/blog/tags/docusaurus','7d6'),
    exact: true
  },
  {
    path: '/switchboard-docs/blog/tags/facebook',
    component: ComponentCreator('/switchboard-docs/blog/tags/facebook','06c'),
    exact: true
  },
  {
    path: '/switchboard-docs/blog/tags/hello',
    component: ComponentCreator('/switchboard-docs/blog/tags/hello','f40'),
    exact: true
  },
  {
    path: '/switchboard-docs/blog/tags/hola',
    component: ComponentCreator('/switchboard-docs/blog/tags/hola','590'),
    exact: true
  },
  {
    path: '/switchboard-docs/blog/welcome',
    component: ComponentCreator('/switchboard-docs/blog/welcome','2d7'),
    exact: true
  },
  {
    path: '/switchboard-docs/markdown-page',
    component: ComponentCreator('/switchboard-docs/markdown-page','346'),
    exact: true
  },
  {
    path: '/switchboard-docs/docs',
    component: ComponentCreator('/switchboard-docs/docs','663'),
    routes: [
      {
        path: '/switchboard-docs/docs/building-new-switches',
        component: ComponentCreator('/switchboard-docs/docs/building-new-switches','548'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/switchboard-docs/docs/Deployments/AWS/deploying-to-aws',
        component: ComponentCreator('/switchboard-docs/docs/Deployments/AWS/deploying-to-aws','7c6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/switchboard-docs/docs/Deployments/AWS/manual-setup-for-aws',
        component: ComponentCreator('/switchboard-docs/docs/Deployments/AWS/manual-setup-for-aws','de1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/switchboard-docs/docs/Deployments/GCP/deploying-to-gcp',
        component: ComponentCreator('/switchboard-docs/docs/Deployments/GCP/deploying-to-gcp','116'),
        exact: true
      },
      {
        path: '/switchboard-docs/docs/Deployments/Shared/rate-limiting',
        component: ComponentCreator('/switchboard-docs/docs/Deployments/Shared/rate-limiting','183'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/switchboard-docs/docs/Deployments/Shared/setups',
        component: ComponentCreator('/switchboard-docs/docs/Deployments/Shared/setups','558'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/switchboard-docs/docs/getting-started',
        component: ComponentCreator('/switchboard-docs/docs/getting-started','aa5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/switchboard-docs/docs/Tutorials/how-to-build-word-count-switch-for-convictional-products',
        component: ComponentCreator('/switchboard-docs/docs/Tutorials/how-to-build-word-count-switch-for-convictional-products','3ed'),
        exact: true
      },
      {
        path: '/switchboard-docs/docs/Tutorials/setting-up-an-api-for-lambda',
        component: ComponentCreator('/switchboard-docs/docs/Tutorials/setting-up-an-api-for-lambda','1ea'),
        exact: true
      },
      {
        path: '/switchboard-docs/docs/Tutorials/setup-schedule-job-for-aws-lambda',
        component: ComponentCreator('/switchboard-docs/docs/Tutorials/setup-schedule-job-for-aws-lambda','97a'),
        exact: true
      }
    ]
  },
  {
    path: '/switchboard-docs/',
    component: ComponentCreator('/switchboard-docs/','5ae'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
