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

        <q-btn
          class="q-mr-md"
          unelevated
          size="19px"
          :icon="flagIcon()"
          dense
          stretch
        >
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup @click="onItemClick('ru')">
                <q-item-section avatar>
                  <q-img src="src/assets/russia.png" no-spinner />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Russian</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick('en-US')">
                <q-item-section avatar>
                  <q-img src="src/assets/united-states.png" no-spinner />
                </q-item-section>
                <q-item-section>
                  <q-item-label>English</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>

        <q-tabs class="desktop-only" shrink stretch indicator-color="red">
          <q-route-tab
            :to="{ path: '/' }"
            :label="$t('home')"
            class="text-grey-9"
          />

          <QMenuHover>
            <template #default="{ activatorAttr, menuAttr }">
              <q-btn v-bind="activatorAttr" flat :label="$t('excursions')">
                <q-menu v-bind="menuAttr" auto-close fit>
                  <q-list class="my-text-font">
                    <q-item clickable :to="{ name: 'antalya' }">
                      <q-item-section>Antalya</q-item-section>
                    </q-item>

                    <q-item clickable :to="{ name: 'belek' }">
                      <q-item-section>Belek</q-item-section>
                    </q-item>

                    <q-item clickable :to="{ name: 'kemer' }">
                      <q-item-section>Kemer</q-item-section>
                    </q-item>

                    <q-item clickable :to="{ name: 'alanya' }">
                      <q-item-section>Alanya</q-item-section>
                    </q-item>

                    <q-item clickable :to="{ name: 'manavgat' }">
                      <q-item-section>Manavgat</q-item-section>
                    </q-item>

                    <q-item clickable :to="{ name: 'side' }">
                      <q-item-section>Side</q-item-section>
                    </q-item>

                    <q-item clickable :to="{ name: 'adrasan' }">
                      <q-item-section>Adrasan</q-item-section>
                    </q-item>
                  </q-list></q-menu
                >
              </q-btn>
            </template>
          </QMenuHover>

          <q-route-tab
            :to="{ name: 'contact' }"
            :label="$t('contact')"
            class="text-grey-9"
          />
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
          <q-item clickable v-ripple to="/">
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>
            <q-item-section> {{ $t('home') }} </q-item-section>
          </q-item>

          <q-separator size="1.5px" />

          <q-expansion-item icon="tour" :label="$t('excursions')">
            <q-list class="my-text-font" separator>
              <q-item clickable :to="{ name: 'antalya' }">
                <q-item-section>Antalya</q-item-section>
              </q-item>

              <q-item clickable :to="{ name: 'belek' }">
                <q-item-section>Belek</q-item-section>
              </q-item>

              <q-item clickable :to="{ name: 'kemer' }">
                <q-item-section>Kemer</q-item-section>
              </q-item>

              <q-item clickable :to="{ name: 'alanya' }">
                <q-item-section>Alanya</q-item-section>
              </q-item>

              <q-item clickable :to="{ name: 'manavgat' }">
                <q-item-section>Manavgat</q-item-section>
              </q-item>

              <q-item clickable :to="{ name: 'side' }">
                <q-item-section>Side</q-item-section>
              </q-item>

              <q-item clickable :to="{ name: 'adrasan' }">
                <q-item-section>Adrasan</q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>

          <q-item clickable v-ripple :to="{ name: 'contact' }">
            <q-item-section avatar>
              <q-icon name="call" />
            </q-item-section>
            <q-item-section> {{ $t('contact') }} </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Sticky Button Start -->
    <q-page-sticky class="z-top" position="bottom-right" :offset="[18, 50]">
      <q-btn padding="0px" size="32px" round :icon="wpPath" />
    </q-page-sticky>

    <q-page-sticky class="z-top" position="bottom-right" :offset="[18, 115]">
      <q-btn padding="0px" size="32px" round :icon="viberPath" />
    </q-page-sticky>
    <!-- Sticky Button End -->

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
import MenuHover from 'components/MenuHover.vue';
import viberLogo from 'assets/contact-icons/viber.svg';
import wpLogo from 'assets/contact-icons/whatsapp.svg';
import russianFlag from 'assets/russia.png';
import unitedStatesFlag from 'assets/united-states.png';
import { useI18n } from 'vue-i18n';

export default {
  components: { QMenuHover: MenuHover },
  setup() {
    const leftDrawerOpen = ref(false);

    const viberPath = 'img:' + viberLogo;
    const wpPath = 'img:' + wpLogo;

    const { locale } = useI18n({ useScope: 'global' });

    const flagIcon = () => {
      if (locale.value === 'ru') return 'img:' + russianFlag;

      return 'img:' + unitedStatesFlag;
    };

    function onItemClick(langCode) {
      if (locale.value !== langCode) locale.value = langCode;
    }

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      viberPath,
      wpPath,

      locale,
      localeOptions: [
        { value: 'en-US', label: 'English' },
        { value: 'ru', label: 'Russian' },
      ],
      onItemClick,
      flagIcon,
    };
  },
};
</script>
