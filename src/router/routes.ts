import { RouteRecordRaw } from 'vue-router';
import MainLayout from 'layouts/MainLayout.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('pages/ContactPage.vue'),
      },
      {
        path: 'adrasan-suluada-boat-tour',
        name: 'adrasanSuluadaBoatTour',
        component: () => import('pages/posts/adrasanSuluadaBoatTour.vue'),
      },
      {
        path: 'goynuk-canyon-tour',
        name: 'goynukCanyonTour',
        component: () => import('pages/posts/goynukCanyonTour.vue'),
      },
      {
        path: 'kemer-tekne-tour',
        name: 'kemerTekneTour',
        component: () => import('pages/posts/kemerTekneTour.vue'),
      },
      {
        path: 'kemer-snoker-dalis-tour',
        name: 'kemerSnokerDalisTour',
        component: () => import('pages/posts/kemerSnokerDalis.vue'),
      },
      {
        path: 'kemer-dalis-tour',
        name: 'kemerDalisTour',
        component: () => import('pages/posts/kemerDalis.vue'),
      },
      {
        path: 'kemer-yunus-tour',
        name: 'kemerYunusTour',
        component: () => import('pages/posts/kemerYunusTour.vue'),
      },
      {
        path: 'kemer-buggy-tour',
        name: 'kemerBuggyTour',
        component: () => import('pages/posts/kemerBuggyTour.vue'),
      },
      {
        path: 'kemer-gun-batimi-suluada-tour',
        name: 'kemerGunBatimiSuluadaTour',
        component: () => import('pages/posts/kemerGunBatimiSuluada.vue'),
      },
      {
        path: 'ulupinar-balik-tutma-tour',
        name: 'uluPinarBalikTutma',
        component: () => import('pages/posts/ulupinarBalikTutma.vue'),
      },
      {
        path: 'olimpos-yanartas-ulupinar-tour',
        name: 'olimposYanartas',
        component: () => import('pages/posts/olimposYanartasUlupinar.vue'),
      },
      {
        path: 'demre-kekova-tour',
        name: 'demre-kekova',
        component: () => import('pages/posts/demreKekovaTour.vue'),
      },
      {
        path: 'antayla-city-tour',
        name: 'antalya-city',
        component: () => import('pages/posts/antalyaSehirTuru.vue'),
      },
    ],
  },
  {
    path: '/antalya',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'antalya',
        component: () => import('pages/category/antalya/AntalyaCategory.vue'),
      },
      {
        path: 'belek',
        name: 'belek',
        component: () => import('pages/category/antalya/BelekCategory.vue'),
      },
      {
        path: 'kemer',
        name: 'kemer',
        component: () => import('pages/category/antalya/KemerCategory.vue'),
      },
      {
        path: 'alanya',
        name: 'alanya',
        component: () => import('pages/category/antalya/AlanyaCategory.vue'),
      },
      {
        path: 'manavgat',
        name: 'manavgat',
        component: () => import('pages/category/antalya/ManavgatCategory.vue'),
      },
      {
        path: 'side',
        name: 'side',
        component: () => import('pages/category/antalya/SideCategory.vue'),
      },
      {
        path: 'adrasan',
        name: 'adrasan',
        component: () => import('pages/category/antalya/AdrasanCategory.vue'),
      },
    ],
  },

  // Always leave this as last one, but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
