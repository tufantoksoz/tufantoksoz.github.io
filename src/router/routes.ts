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
        component: () =>
          import('src/pages/tours/kemer/adrasanSuluadaBoatTour.vue'),
      },
      {
        path: 'goynuk-canyon-tour',
        name: 'goynukCanyonTour',
        component: () => import('src/pages/tours/kemer/goynukCanyonTour.vue'),
      },
      {
        path: 'tazi-canyon-four-pack-tour',
        name: 'taziCanyonFourPackTour',
        component: () =>
          import('src/pages/tours/kemer/taziCanyon4PackTour.vue'),
      },
      {
        path: 'antalya-city-tour',
        name: 'antalyaCityTour',
        component: () => import('src/pages/tours/kemer/antalyaCityTour.vue'),
      },
      {
        path: 'demre-myra-kekova-tour',
        name: 'demreMyraKekovaTour',
        component: () =>
          import('src/pages/tours/kemer/demreMyraKekovaTour.vue'),
      },
      {
        path: 'pamukkale-tour-from-kemer',
        name: 'pamukkaleTourFromKemer',
        component: () =>
          import('src/pages/tours/kemer/pamukkaleTourFromKemer.vue'),
      },
      {
        path: 'yacht-tour-from-kemer',
        name: 'yachtTourFromKemer',
        component: () => import('src/pages/tours/kemer/yachtTour.vue'),
      },
      {
        path: 'turkish-bath',
        name: 'turkishBath',
        component: () => import('src/pages/tours/kemer/turkishBath.vue'),
      },
      {
        path: 'tahtali-jeep-safari',
        name: 'tahtaliJeepSafari',
        component: () => import('src/pages/tours/kemer/tahtaliJeepSafari.vue'),
      },
      {
        path: 'kemer-diving-tour',
        name: 'kemerDivingTour',
        component: () => import('src/pages/tours/kemer/kemerDiving.vue'),
      },
      {
        path: 'olympos-tour',
        name: 'olymposTour',
        component: () => import('src/pages/tours/kemer/olymposTour.vue'),
      },
      {
        path: 'sulu-cehennem-adasi-tour',
        name: 'suluCehennemAdasiTour',
        component: () =>
          import('src/pages/tours/kemer/suluCehennemAdasiTour.vue'),
      },
      {
        path: 'kemer-atv-safari',
        name: 'kemerAtvSafari',
        component: () => import('src/pages/tours/kemer/kemerAtvSafari.vue'),
      },
      {
        path: 'kemer-snorkel-diving',
        name: 'kemerSnorkelDiving',
        component: () => import('src/pages/tours/kemer/kemerSnorkelDiving.vue'),
      },
      {
        path: 'fishing-in-ulupinar',
        name: 'fishingInUlupinar',
        component: () => import('src/pages/tours/kemer/fishingInUlupinar.vue'),
      },
      {
        path: 'kemer-horse-riding',
        name: 'kemerHorseRiding',
        component: () => import('src/pages/tours/kemer/kemerHorseRiding.vue'),
      },
      {
        path: 'dolphin-tour',
        name: 'dolphinTour',
        component: () => import('src/pages/tours/kemer/dolphinTour.vue'),
      },
      {
        path: 'dolusu-park-tour',
        name: 'dolusuParkTour',
        component: () => import('src/pages/tours/kemer/dolusuParkTour.vue'),
      },
      {
        path: 'tahtali-teleferik-tour',
        name: 'tahtaliTeleferikTour',
        component: () =>
          import('src/pages/tours/kemer/tahtaliTeleferikTour.vue'),
      },
      {
        path: 'sea-fishing-tour',
        name: 'seaFishingTour',
        component: () => import('src/pages/tours/kemer/seaFishingTour.vue'),
      },
      {
        path: 'two-day-cappadocia-tour-all-inclusive',
        name: 'ikiGunlukKapadokyaTuruHerseyDahil',
        component: () =>
          import('src/pages/tours/kemer/ikiGunlukKapadokyaTuruHerseyDahil.vue'),
      },
      {
        path: 'adrasan-yamac-parasutu-turu',
        name: 'adrasanYamacParasutu',
        component: () =>
          import('src/pages/tours/kemer/adrasanYamacParasutu.vue'),
      },
      {
        path: 'pamukkale-sicak-hava-balonu-turu',
        name: 'pamukkaleSicakHavaBalonu',
        component: () =>
          import('src/pages/tours/kemer/pamukkaleSicakHavaBalonu.vue'),
      },
      {
        path: 'kemerden-istanbul-turu',
        name: 'kemerdenIstanbulTuru',
        component: () =>
          import('src/pages/tours/kemer/kemerdenIstanbulTuru.vue'),
      },
      {
        path: 'tahtali-yamac-parasutu',
        name: 'tahtaliYamacParasutu',
        component: () =>
          import('src/pages/tours/kemer/tahtaliYamacParasutu.vue'),
      },
      {
        path: 'kemerden-akvaryum-turu',
        name: 'kemerdenAkvarayumTuru',
        component: () =>
          import('src/pages/tours/kemer/kemerdenAkvaryumTuru.vue'),
      },
      {
        path: 'land-of-legends-tour',
        name: 'kemerdenLandOfLegends',
        component: () =>
          import('src/pages/tours/kemer/kemerdenLandOfLegends.vue'),
      },
      {
        path: 'dino-park-tour',
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
