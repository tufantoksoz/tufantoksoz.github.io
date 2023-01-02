<template>
  <q-layout view="hHh LpR fff">
    <q-header reveal elevated class="bg-white text-primary">
      <q-toolbar>
        <div class="row q-gutter-sm headerInfoMobile text-no-wrap">
          <div class="col-auto">
            <q-icon color="dark q-mr-sm" size="20px" name="phone" />
            <span class="text-dark">
              {{ $t('contactInfo.phone') }}
            </span>
          </div>

          <div class="col-auto">
            <q-icon
              color="dark q-mr-sm"
              size="20px"
              name="fa-regular fa-envelope"
            />
            <span class="text-dark">{{ $t('contactInfo.email') }}</span>
          </div>
        </div>
      </q-toolbar>

      <q-separator />

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

        <!-- <q-btn
          class="q-mr-md"
          unelevated
          size="20px"
          :icon="flagIcon()"
          dense
          stretch
        >
          <q-menu>
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick('ru')">
                <q-item-section avatar>
                  <q-img
                    src="~assets/flags/russia.png"
                    width="32px"
                    no-spinner
                  />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Russian</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick('en-US')">
                <q-item-section avatar>
                  <q-img
                    src="~assets/flags/united-states.png"
                    width="32px"
                    no-spinner
                  />
                </q-item-section>
                <q-item-section>
                  <q-item-label>English</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn> -->

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
                      <q-item-section>{{ $t('antalya') }}</q-item-section>
                    </q-item>

                    <q-item clickable :to="{ name: 'belek' }">
                      <q-item-section>{{ $t('belek') }}</q-item-section>
                    </q-item>

                    <q-item clickable :to="{ name: 'kemer' }">
                      <q-item-section>{{ $t('kemer') }}</q-item-section>
                    </q-item>

                    <q-item clickable :to="{ name: 'alanya' }">
                      <q-item-section>{{ $t('alanya') }}</q-item-section>
                    </q-item>

                    <q-item clickable :to="{ name: 'side' }">
                      <q-item-section>{{ $t('side') }}</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
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
                <q-item-section>{{ $t('antalya') }}</q-item-section>
              </q-item>

              <q-item clickable :to="{ name: 'belek' }">
                <q-item-section>{{ $t('belek') }}</q-item-section>
              </q-item>

              <q-item clickable :to="{ name: 'kemer' }">
                <q-item-section>{{ $t('kemer') }}</q-item-section>
              </q-item>

              <q-item clickable :to="{ name: 'alanya' }">
                <q-item-section>{{ $t('alanya') }}</q-item-section>
              </q-item>

              <q-item clickable :to="{ name: 'side' }">
                <q-item-section>{{ $t('side') }}</q-item-section>
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

    <!-- Footer Section Start -->
    <q-footer elevated class="bg-dark text-white">
      <div class="row justify-center q-ma-md">
        <div class="col-md-2 col-sm-4 col-xs-12 q-ma-md">
          <div class="row q-mb-md my-title-font-bold">
            <span class="footerTitle">{{ $t('footer.contact') }}</span>
          </div>

          <div class="row q-mb-md">
            <q-icon class="q-mr-md" size="20px" name="phone" />
            <span>{{ $t('contactInfo.phone') }}</span>
          </div>

          <div class="row q-mb-md">
            <q-icon class="q-mr-md" size="20px" name="fa-brands fa-whatsapp" />
            <span class="my-text-font">{{ $t('contactInfo.whatsapp') }}</span>
          </div>

          <div class="row">
            <q-icon class="q-mr-md" size="20px" name="fa-regular fa-envelope" />
            <span class="my-text-font">{{ $t('contactInfo.email') }}</span>
          </div>
        </div>

        <q-separator vertical dark inset />

        <div class="col-md-2 col-sm-4 col-xs-12 q-ma-md">
          <div class="row my-title-font-bold">
            <span class="footerTitle q-mb-md">{{ $t('footer.support') }}</span>
          </div>
          <div class="row q-mb-md">
            <span
              class="cursor-pointer my-text-font"
              @click="$router.push({ name: 'contact' })"
              >{{ $t('footer.contact') }}
            </span>
          </div>

          <div class="row q-mb-md">
            <span
              class="cursor-pointer my-text-font"
              @click="$router.push({ name: 'about' })"
              >{{ $t('footer.aboutUs') }}
            </span>
          </div>

          <div class="row q-mb-md">
            <span
              class="cursor-pointer my-text-font"
              @click="$router.push({ name: 'faq' })"
              >{{ $t('footer.faq') }}
            </span>
          </div>
        </div>

        <q-separator v-if="$q.screen.width > 1024" vertical dark inset />

        <div class="col-md-2 col-sm-4 col-xs-12 q-ma-md my-title-font-bold">
          <div class="row q-mb-md">
            <span class="footerTitle">{{ $t('footer.destinations') }}</span>
          </div>
          <div class="row q-mb-md">
            <span
              class="cursor-pointer my-text-font"
              @click="$router.push({ name: 'belek' })"
              >{{ $t('footer.belek') }}</span
            >
          </div>

          <div class="row q-mb-md">
            <span
              class="cursor-pointer my-text-font"
              @click="$router.push({ name: 'kemer' })"
              >{{ $t('footer.kemer') }}</span
            >
          </div>

          <div class="row q-mb-md">
            <span
              class="cursor-pointer my-text-font"
              @click="$router.push({ name: 'side' })"
              >{{ $t('footer.side') }}</span
            >
          </div>

          <div class="row q-mb-md">
            <span
              class="cursor-pointer my-text-font"
              @click="$router.push({ name: 'alanya' })"
              >{{ $t('footer.alanya') }}</span
            >
          </div>
        </div>

        <q-separator vertical dark inset />

        <div class="col-md-2 col-sm-4 col-xs-12 q-ma-md my-title-font-bold">
          <div class="row q-mb-md">
            <span class="footerTitle text-no-wrap">{{
              $t('footer.followUsOnSocialMedia')
            }}</span>
          </div>

          <div class="row q-mb-md q-gutter-md">
            <q-btn
              round
              padding="0px"
              size="16px"
              icon="fa-brands fa-instagram"
              href="https://www.instagram.com/"
              target="_blank"
            />

            <q-btn
              round
              padding="0px"
              size="16px"
              icon="fa-brands fa-youtube"
              href="https://www.youtube.com/"
              target="_blank"
            />

            <q-btn
              round
              padding="0px"
              size="16px"
              icon="fa-brands fa-twitter"
              href="https://twitter.com/"
              target="_blank"
            />

            <q-btn
              round
              padding="0px"
              size="16px"
              icon="fa-brands fa-tiktok"
              href="https://www.tiktok.com/"
              target="_blank"
            />
          </div>
        </div>
      </div>
      <q-separator dark />

      <div class="row q-ma-md">
        <span> Copyright © 2022 - {{ currentYear }} Excursions Office</span>
      </div>
    </q-footer>
    <!-- Footer Section End -->
  </q-layout>
</template>

<script>
import { ref } from 'vue';
import MenuHover from 'components/MenuHover.vue';
import viberLogo from 'assets/contact-icons/viber.svg';
import wpLogo from 'assets/contact-icons/whatsapp.svg';
// import russianFlag from 'assets/flags/russia.png';
// import unitedStatesFlag from 'assets/flags/united-states.png';
// import { useI18n } from 'vue-i18n';

export default {
  components: { QMenuHover: MenuHover },
  setup() {
    const currentYear = ref(new Date().getFullYear());

    const leftDrawerOpen = ref(false);

    const viberPath = 'img:' + viberLogo;
    const wpPath = 'img:' + wpLogo;

    // const { locale } = useI18n({ useScope: 'global' });

    // const flagIcon = () => {
    //   if (locale.value === 'ru') return 'img:' + russianFlag;

    //   return 'img:' + unitedStatesFlag;
    // };

    // function onItemClick(langCode) {
    //   if (locale.value !== langCode) locale.value = langCode;
    // }

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      viberPath,
      wpPath,
      currentYear,
    };
  },
};
</script>

<style lang="scss">
.footerTitle {
  font-size: 17px;
}

@media screen and (max-width: 374px) {
  .headerInfoMobile {
    justify-content: center;
  }
}
</style>
