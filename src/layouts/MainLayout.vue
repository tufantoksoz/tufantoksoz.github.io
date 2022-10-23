<template>
  <q-layout view="hHh LpR fff">
    <q-header reveal elevated class="bg-white text-primary" height-hint="98">
      <q-toolbar inset>
        <q-toolbar-title> Excursions Office </q-toolbar-title>

        <q-tabs class="desktop-only" shrink stretch>
          <q-route-tab :to="toExcursions" label="Excursions" />
          <q-route-tab :to="toContact" label="Contact" />
        </q-tabs>
      </q-toolbar>

      <q-tabs class="mobile-only" shrink stretch>
        <q-route-tab :to="toExcursions" label="Excursions" />
        <q-route-tab :to="toContact" label="Contact" />
      </q-tabs>
    </q-header>

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
export default {
  setup() {
    const toExcursions = '/';
    const toContact = '/test';

    return { toExcursions, toContact };
  },
};
</script>
