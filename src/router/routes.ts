import { RouteRecordRaw } from 'vue-router';
import MainLayout from 'layouts/MainLayout.vue';
import IndexPage from 'pages/IndexPage.vue';
import testPage from 'pages/testPage.vue';
import AdrasanSuluada from 'pages/posts/adrasanSuluadaBoatTour.vue';
import AntalyaCategory from 'pages/category/antalya/AntalyaCategory.vue';
import BelekCategory from 'pages/category/antalya/BelekCategory.vue';
import KemerCategory from 'pages/category/antalya/KemerCategory.vue';
import AlanyaCategory from 'pages/category/antalya/AlanyaCategory.vue';
import ManavgatCategory from 'pages/category/antalya/ManavgatCategory.vue';
import SideCategory from 'pages/category/antalya/SideCategory.vue';
import AdrasanCategory from 'pages/category/antalya/AdrasanCategory.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => MainLayout,
    children: [
      { path: '', component: IndexPage },
      { path: 'test', component: testPage },
      {
        path: 'adrasan-suluada-boat-tour',
        component: AdrasanSuluada,
      },
    ],
  },

  {
    path: '/antalya',
    component: MainLayout,
    children: [
      { path: '', name: 'antalya', component: AntalyaCategory },
      { path: 'belek', name: 'belek', component: BelekCategory },
      { path: 'kemer', name: 'kemer', component: KemerCategory },
      { path: 'alanya', name: 'alanya', component: AlanyaCategory },
      { path: 'manavgat', name: 'manavgat', component: ManavgatCategory },
      { path: 'side', name: 'side', component: SideCategory },
      { path: 'adrasan', name: 'adrasan', component: AdrasanCategory },
    ],
  },

  // Always leave this as last one, but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
