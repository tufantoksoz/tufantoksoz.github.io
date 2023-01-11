import { RouteRecordRaw } from 'vue-router';
import MainLayout from 'layouts/MainLayout.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: 'test',
        component: () => import('pages/testPage.vue'),
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('pages/ContactPage.vue'),
      },
      {
        path: 'ostrov-suluada-iz-kemera',
        name: 'adrasanSuluadaBoatTour',
        component: () =>
          import('src/pages/tours/kemer/adrasanSuluadaBoatTour.vue'),
      },
      {
        path: 'kanyon-goynuk-v-kemere',
        name: 'goynukCanyonTour',
        component: () => import('src/pages/tours/kemer/goynukCanyonTour.vue'),
      },
      {
        path: 'kanyon-tazi-iz-kemera',
        name: 'taziCanyonFourPackTour',
        component: () =>
          import('src/pages/tours/kemer/taziCanyon4PackTour.vue'),
      },
      {
        path: 'ekskursiya-po-antalii-iz-kemera',
        name: 'antalyaCityTour',
        component: () => import('src/pages/tours/kemer/antalyaCityTour.vue'),
      },
      {
        path: 'demre-mira-kekova-iz-kemera',
        name: 'demreMyraKekovaTour',
        component: () =>
          import('src/pages/tours/kemer/demreMyraKekovaTour.vue'),
      },
      {
        path: 'pamukkale-iz-kemera',
        name: 'pamukkaleTourFromKemer',
        component: () =>
          import('src/pages/tours/kemer/pamukkaleTourFromKemer.vue'),
      },
      {
        path: 'progulka-na-yachte-v-kemere',
        name: 'yachtTourFromKemer',
        component: () => import('src/pages/tours/kemer/yachtTour.vue'),
      },
      {
        path: 'tureckaya-banya-v-kemere',
        name: 'turkishBath',
        component: () => import('src/pages/tours/kemer/turkishBath.vue'),
      },
      {
        path: 'dzhip-safari-v-kemere',
        name: 'tahtaliJeepSafari',
        component: () => import('src/pages/tours/kemer/tahtaliJeepSafari.vue'),
      },
      {
        path: 'dayving-v-kemere',
        name: 'kemerDivingTour',
        component: () => import('src/pages/tours/kemer/kemerDiving.vue'),
      },
      {
        path: 'ekskursiya-v-olimpos-iz-kemera',
        name: 'olymposTour',
        component: () => import('src/pages/tours/kemer/olymposTour.vue'),
      },
      {
        path: 'ostrov-suluada-na-zakate',
        name: 'suluCehennemAdasiTour',
        component: () =>
          import('src/pages/tours/kemer/suluCehennemAdasiTour.vue'),
      },
      {
        path: 'kvadro-safari-v-kemere',
        name: 'kemerAtvSafari',
        component: () => import('src/pages/tours/kemer/kemerAtvSafari.vue'),
      },
      {
        path: 'snorkling-v-kemere',
        name: 'kemerSnorkelDiving',
        component: () => import('src/pages/tours/kemer/kemerSnorkelDiving.vue'),
      },
      {
        path: 'ribalka-v-ulupinare',
        name: 'fishingInUlupinar',
        component: () => import('src/pages/tours/kemer/fishingInUlupinar.vue'),
      },
      {
        path: 'progulka-na-loshadyakh-v-kemere',
        name: 'kemerHorseRiding',
        component: () => import('src/pages/tours/kemer/kemerHorseRiding.vue'),
      },
      {
        path: 'delfinariy-v-kemere',
        name: 'dolphinTour',
        component: () => import('src/pages/tours/kemer/dolphinTour.vue'),
      },
      {
        path: 'akvapark-dolusu-v-kemere',
        name: 'dolusuParkTour',
        component: () => import('src/pages/tours/kemer/dolusuParkTour.vue'),
      },
      {
        path: 'kanatnaya-doroga-v-kemere',
        name: 'tahtaliTeleferikTour',
        component: () =>
          import('src/pages/tours/kemer/tahtaliTeleferikTour.vue'),
      },
      {
        path: 'morskaya-ribalka-v-kemere',
        name: 'seaFishingTour',
        component: () => import('src/pages/tours/kemer/seaFishingTour.vue'),
      },
      {
        path: 'ekskursiya-v-kappadokiyu-iz-kemera',
        name: 'ikiGunlukKapadokyaTuruHerseyDahil',
        component: () =>
          import('src/pages/tours/kemer/ikiGunlukKapadokyaTuruHerseyDahil.vue'),
      },
      {
        path: 'paragliding-v-adrasane',
        name: 'adrasanYamacParasutu',
        component: () =>
          import('src/pages/tours/kemer/adrasanYamacParasutu.vue'),
      },
      {
        path: 'polet-na-vozdushniy-share-v-pamukkale',
        name: 'pamukkaleSicakHavaBalonu',
        component: () =>
          import('src/pages/tours/kemer/pamukkaleSicakHavaBalonu.vue'),
      },
      {
        path: 'ekskursiya-v-stambul',
        name: 'kemerdenIstanbulTuru',
        component: () =>
          import('src/pages/tours/kemer/kemerdenIstanbulTuru.vue'),
      },
      {
        path: 'paragliding-v-kemere',
        name: 'tahtaliYamacParasutu',
        component: () =>
          import('src/pages/tours/kemer/tahtaliYamacParasutu.vue'),
      },
      {
        path: 'akvarium-iz-kemera',
        name: 'kemerdenAkvarayumTuru',
        component: () =>
          import('src/pages/tours/kemer/kemerdenAkvaryumTuru.vue'),
      },
      {
        path: 'the-land-of-legends-iz-kemera',
        name: 'kemerdenLandOfLegends',
        component: () =>
          import('src/pages/tours/kemer/kemerdenLandOfLegends.vue'),
      },
      {
        path: 'dinopark-v-kemere',
        name: 'kemerDinoParkTour',
        component: () => import('src/pages/tours/kemer/kemerDinoPark.vue'),
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
        path: 'side',
        name: 'side',
        component: () => import('pages/category/antalya/SideCategory.vue'),
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
