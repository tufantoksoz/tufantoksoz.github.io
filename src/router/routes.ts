import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'test', component: () => import('pages/testPage.vue') },
      { path: 'testPost', component: () => import('pages/posts/testPost.vue') },
      {
        path: 'adrasan-suluada-boat-tour',
        component: () => import('pages/posts/adrasanSuluadaBoatTour.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
