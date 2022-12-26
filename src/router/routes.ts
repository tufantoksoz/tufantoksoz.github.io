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
        component: () => import('pages/tours/adrasanSuluadaBoatTour.vue'),
      },
      {
        path: 'goynuk-canyon-tour',
        name: 'goynukCanyonTour',
        component: () => import('pages/tours/goynukCanyonTour.vue'),
      },
      {
        path: 'tazi-canyon-four-pack-tour',
        name: 'taziCanyonFourPackTour',
        component: () => import('pages/tours/taziCanyon4PackTour.vue'),
      },
      {
        path: 'antalya-city-tour',
        name: 'antalyaCityTour',
        component: () => import('pages/tours/antalyaCityTour.vue'),
      },
      {
        path: 'demre-myra-kekova-tour',
        name: 'demreMyraKekovaTour',
        component: () => import('pages/tours/demreMyraKekovaTour.vue'),
      },
      {
        path: 'pamukkale-tour-from-kemer',
        name: 'pamukkaleTourFromKemer',
        component: () => import('pages/tours/pamukkaleTourFromKemer.vue'),
      },
      {
        path: 'yacht-tour-from-kemer',
        name: 'yachtTourFromKemer',
        component: () => import('pages/tours/yachtTour.vue'),
      },
      {
        path: 'turkish-bath',
        name: 'turkishBath',
        component: () => import('pages/tours/turkishBath.vue'),
      },
      {
        path: 'tahtali-jeep-safari',
        name: 'tahtaliJeepSafari',
        component: () => import('pages/tours/tahtaliJeepSafari.vue'),
      },
      {
        path: 'kemer-diving',
        name: 'kemerDiving',
        component: () => import('pages/tours/kemerDiving.vue'),
      },
      {
        path: 'olympos-tour',
        name: 'olymposTour',
        component: () => import('pages/tours/olymposTour.vue'),
      },
      {
        path: 'sulu-cehennem-adasi-tour',
        name: 'suluCehennemAdasiTour',
        component: () => import('pages/tours/suluCehennemAdasiTour.vue'),
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
