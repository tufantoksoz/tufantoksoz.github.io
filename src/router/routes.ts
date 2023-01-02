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
      {
        path: 'kemer-atv-safari',
        name: 'kemerAtvSafari',
        component: () => import('pages/tours/kemerAtvSafari.vue'),
      },
      {
        path: 'kemer-snorkel-diving',
        name: 'kemerSnorkelDiving',
        component: () => import('pages/tours/kemerSnorkelDiving.vue'),
      },
      {
        path: 'fishing-in-ulupinar',
        name: 'fishingInUlupinar',
        component: () => import('pages/tours/fishingInUlupinar.vue'),
      },
      {
        path: 'kemer-horse-riding',
        name: 'kemerHorseRiding',
        component: () => import('pages/tours/kemerHorseRiding.vue'),
      },
      {
        path: 'dolphin-tour',
        name: 'dolphinTour',
        component: () => import('pages/tours/dolphinTour.vue'),
      },
      {
        path: 'dolusu-park-tour',
        name: 'dolusuParkTour',
        component: () => import('pages/tours/dolusuParkTour.vue'),
      },
      {
        path: 'tahtali-teleferik-tour',
        name: 'tahtaliTeleferikTour',
        component: () => import('pages/tours/tahtaliTeleferikTour.vue'),
      },
      {
        path: 'sea-fishing-tour',
        name: 'seaFishingTour',
        component: () => import('pages/tours/seaFishingTour.vue'),
      },
      {
        path: 'two-day-cappadocia-tour-all-inclusive',
        name: 'ikiGunlukKapadokyaTuruHerseyDahil',
        component: () =>
          import('pages/tours/ikiGunlukKapadokyaTuruHerseyDahil.vue'),
      },
      {
        path: 'adrasan-yamac-parasutu-turu',
        name: 'adrasanYamacParasutu',
        component: () => import('pages/tours/adrasanYamacParasutu.vue'),
      },
      {
        path: 'pamukkale-sicak-hava-balonu-turu',
        name: 'pamukkaleSicakHavaBalonu',
        component: () => import('pages/tours/pamukkaleSicakHavaBalonu.vue'),
      },
      {
        path: 'kemerden-istanbul-turu',
        name: 'kemerdenIstanbulTuru',
        component: () => import('pages/tours/kemerdenIstanbulTuru.vue'),
      },
      {
        path: 'tahtali-yamac-parasutu',
        name: 'tahtaliYamacParasutu',
        component: () => import('pages/tours/tahtaliYamacParasutu.vue'),
      },
      {
        path: 'kemerden-akvaryum-turu',
        name: 'kemerdenAkvarayumTuru',
        component: () => import('pages/tours/kemerdenAkvaryumTuru.vue'),
      },
      {
        path: 'land-of-legends-tour',
        name: 'kemerdenLandOfLegends',
        component: () => import('pages/tours/kemerdenLandOfLegends.vue'),
      },
      {
        path: 'dino-park-tour',
        name: 'kemerDinoParkTour',
        component: () => import('pages/tours/kemerDinoPark.vue'),
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
