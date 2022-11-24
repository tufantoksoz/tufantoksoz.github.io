<template>
  <q-layout view="hHh LpR fff">
    <q-header reveal elevated class="bg-white text-primary" height-hint="98">
      <q-toolbar>
        <q-btn
          class="mobile-only"
          dense
          flat
          round
          icon="menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title
          class="text-center"
          style="font-family: Arial, Helvetica, sans-serif; font-weight: 600"
        >
          Excursions Office
        </q-toolbar-title>

        <q-tabs class="desktop-only" shrink stretch>
          <q-route-tab :to="toHome" label="Home" class="text-grey-9" />

          <q-route-tab
            :to="toExcursions"
            label="Excursions"
            class="text-grey-9"
          />

          <!-- <q-btn-dropdown auto-close stretch flat label="EXCURSIONSSSS">
            <q-list>
              <q-item clickable @click="tab = 'belek'">
                <q-item-section>Belek</q-item-section>
              </q-item>

              <q-item clickable @click="tab = 'kemer'">
                <q-item-section>Kemer</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown> -->

          <q-route-tab :to="toContact" label="Contact" class="text-grey-9" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-drawer
      class="mobile-only"
      v-model="leftDrawerOpen"
      side="left"
      overlay
      behavior="mobile"
      bordered
    >
      <q-scroll-area class="fit">
        <q-list>
          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item clickable v-ripple :to="menuItem.to">
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.separator" />
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div>Excursions Office</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const leftDrawerOpen = ref(false);

    const toHome = '/';
    const toExcursions = '/test';
    const toContact = '/test';

    const menuList = [
      {
        icon: 'home',
        label: 'Home',
        separator: true,
        to: '/',
      },
      {
        icon: 'tour',
        label: 'Excursions',
        separator: false,
        to: '/test',
      },
      {
        icon: 'call',
        label: 'Contact',
        separator: false,
        to: '/test',
      },
    ];

    return {
      toExcursions,
      toContact,
      toHome,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      menuList,
    };
  },
};
</script>
