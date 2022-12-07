import { RouteRecordRaw } from 'vue-router';
import MainLayout from 'layouts/MainLayout.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => MainLayout,
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'test', component: () => import('pages/testPage.vue') },
      {
        path: 'adrasan-suluada-boat-tour',
        component: () => import('pages/posts/adrasanSuluadaBoatTour.vue'),
      },
    ],
  },
  // {
  //   path: '/antalya',
  //   component: MainLayout,
  //   children: [
  //     {
  //       path: '',
  //       name: 'antalya',
  //       component: () => import('pages/category/antalya/AntalyaCategory.vue'),
  //     },
  //     {
  //       path: 'belek',
  //       name: 'belek',
  //       component: () => import('pages/category/antalya/BelekCategory.vue'),
  //     },
  //     {
  //       path: 'kemer',
  //       name: 'kemer',
  //       component: () => import('pages/category/antalya/KemerCategory.vue'),
  //     },
  //     {
  //       path: 'alanya',
  //       name: 'alanya',
  //       component: () => import('pages/category/antalya/AlanyaCategory.vue'),
  //     },
  //     {
  //       path: 'manavgat',
  //       name: 'manavgat',
  //       component: () => import('pages/category/antalya/ManavgatCategory.vue'),
  //     },
  //     {
  //       path: 'side',
  //       name: 'side',
  //       component: () => import('pages/category/antalya/SideCategory.vue'),
  //     },
  //     {
  //       path: 'adrasan',
  //       name: 'adrasan',
  //       component: () => import('pages/category/antalya/AdrasanCategory.vue'),
  //     },
  //   ],
  // },

  // Always leave this as last one, but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
