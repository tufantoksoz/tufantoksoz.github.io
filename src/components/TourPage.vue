<template>
  <q-img
    class="bannerSizeDesktop desktop-only"
    :src="imgDesktop"
    fit="fill"
  ></q-img>
  <q-img
    class="bannerSizeMobile mobile-only"
    :src="imgMobile"
    fit="fill"
  ></q-img>

  <div class="row pageContainer">
    <div class="col-md-8 col-sm-12">
      <q-breadcrumbs class="text-brown q-pa-md q-gutter-sm desktop-only">
        <template v-slot:separator>
          <q-icon size="1.5em" name="chevron_right" color="primary" />
        </template>

        <q-breadcrumbs-el :label="$t('home')" icon="home" to="/" />
        <q-breadcrumbs-el
          :label="breadCrumbsCategory"
          icon="category"
          :to="breadCrumbsCategoryRoute"
        />
        <q-breadcrumbs-el :label="breadCrumbsTourLabel" icon="tour" />
      </q-breadcrumbs>

      <q-separator />

      <div class="q-pa-md q-gutter-y-md">
        <div class="q-gutter-sm text-center">
          <q-chip
            :ripple="false"
            color="red"
            icon="payments"
            text-color="white"
            :label="currency + ' ' + bookingForm.adultPrice"
          >
          </q-chip>

          <q-chip
            :ripple="false"
            color="red"
            icon="verified_user"
            text-color="white"
            :label="$t('insurance')"
          >
          </q-chip>

          <q-chip
            :ripple="false"
            color="red"
            icon="restaurant"
            text-color="white"
            :label="$t('dinner')"
          >
          </q-chip>

          <q-chip
            :ripple="false"
            color="red"
            icon="directions_bus"
            text-color="white"
            :label="$t('transfer')"
          >
          </q-chip>

          <q-chip
            :ripple="false"
            color="red"
            icon="schedule"
            text-color="white"
            :label="tourDetails.hours"
          >
          </q-chip>

          <q-chip
            :ripple="false"
            color="red"
            icon="event_available"
            text-color="white"
            :label="tourDetails.days"
          >
          </q-chip>
        </div>
      </div>

      <div>
        <div class="q-px-md">
          <h1
            class="my-title-font-heavy"
            style="line-height: 3rem; font-size: 6vw; font-size: 3vh"
          >
            {{ articleTitle }}
          </h1>
          <p class="articleFont">
            {{ articleSummaryText }}
          </p>
        </div>

        <q-separator class="q-mb-lg" />

        <div class="q-pa-sm">
          <q-carousel
            class="rounded-borders"
            swipeable
            animated
            arrows
            control-color="primary"
            control-type="regular"
            v-model="slide"
            v-model:fullscreen="fullscreen"
            infinite
            :autoplay="autoplay"
            transition-prev="slide-right"
            transition-next="slide-left"
          >
            <q-carousel-slide
              v-for="(item, index) in sliderImages"
              :key="index"
              :name="index"
            >
              <q-img
                :src="item"
                fit="contain"
                height="inherit"
                loading="lazy"
                no-spinner
              />
            </q-carousel-slide>

            <template v-slot:control>
              <q-carousel-control position="bottom-right" :offset="[18, 18]">
                <q-btn
                  push
                  round
                  dense
                  color="white"
                  text-color="primary"
                  :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
                  @click="fullscreen = !fullscreen"
                />
              </q-carousel-control>
            </template>
          </q-carousel>
        </div>

        <q-separator class="q-mt-lg" />

        <div class="q-px-md">
          <h3 class="my-title-font-heavy q-my-xs" style="font-size: 20px">
            {{ $t('priceIncludes') }}
          </h3>

          <div class="row">
            <div
              class="col-12 q-my-sm"
              v-for="(item, index) in includes"
              :key="index"
            >
              <q-icon
                class="q-px-md"
                name="check_circle"
                color="positive"
                size="24px"
              ></q-icon>
              <span class="my-text-font"> {{ item }}</span>
            </div>
          </div>
        </div>

        <q-separator class="q-mt-lg" />

        <div class="q-px-md">
          <h3 class="my-title-font-heavy q-my-xs" style="font-size: 20px">
            {{ $t('priceExcludes') }}
          </h3>

          <div class="row">
            <div
              class="col-12 q-my-sm"
              v-for="(item, index) in excludes"
              :key="index"
            >
              <q-icon
                class="q-px-md"
                name="cancel"
                color="negative"
                size="24px"
              />
              <span class="my-text-font"> {{ item }}</span>
            </div>
          </div>
        </div>

        <q-separator class="q-mt-lg" />

        <!-- Tour Details Expansion Section Start -->
        <div class="q-px-md">
          <h3 class="my-title-font-heavy q-my-xs" style="font-size: 20px">
            {{ $t('tourDetails') }}
          </h3>

          <q-expansion-item
            class="q-pb-sm"
            icon="info"
            :label="$t('tourCost')"
            header-class="bg-info text-white"
            expand-icon-class="text-white"
          >
            <q-card class="bg-grey-3 my-text-font">
              <q-card-section>
                {{ tourDetails.tourCost }}
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            class="q-pb-sm"
            icon="info"
            :label="$t('itemsBring')"
            header-class="bg-info text-white"
            expand-icon-class="text-white"
          >
            <q-card class="bg-grey-3 my-text-font">
              <q-card-section>
                {{ tourDetails.itemsBring }}
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            class="q-pb-sm"
            icon="info"
            :label="$t('departureTimes')"
            header-class="bg-info text-white"
            expand-icon-class="text-white"
          >
            <q-card class="bg-grey-3 my-text-font">
              <q-card-section>
                <div
                  v-for="(item, index) in tourDetails.departureTimes"
                  :key="index"
                >
                  <q-icon name="chevron_right" size="24px" /> {{ item }}
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            class="q-pb-sm"
            icon="info"
            :label="$t('returnTimes')"
            header-class="bg-info text-white"
            expand-icon-class="text-white"
          >
            <q-card class="bg-grey-3 my-text-font">
              <q-card-section>
                <div
                  v-for="(item, index) in tourDetails.returnTimes"
                  :key="index"
                >
                  <q-icon name="chevron_right" size="24px" /> {{ item }}
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            class="q-pb-sm"
            icon="info"
            :label="$t('distance')"
            header-class="bg-info text-white"
            expand-icon-class="text-white"
          >
            <q-card class="bg-grey-3 my-text-font">
              <q-card-section>
                <div v-for="(item, index) in tourDetails.distance" :key="index">
                  <q-icon name="chevron_right" size="24px" /> {{ item }}
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </div>
        <!-- Tour Details Expansion Section End -->

        <p class="q-mt-md q-px-md articleFont">{{ articleFullText }}</p>

        <div class="q-pa-sm">
          <q-img :src="articleImg" />
        </div>

        <q-separator class="q-mt-lg" />

        <h3 class="q-mb-none q-px-md">{{ $t('faq') }}</h3>

        <div v-for="(item, index) in faq" :key="index">
          <q-expansion-item
            expand-separator
            switch-toggle-side
            :label="item.label"
          >
            <q-card>
              <q-card-section>
                {{ item.text }}
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </div>
      </div>

      <q-separator class="q-my-md" />
    </div>

    <div class="col-md-4" style="margin: 0 auto">
      <booking-form id="bookingForm" :bookingForm="bookingForm"></booking-form>
    </div>

    <!-- Sticky Button Start -->
    <q-page-sticky
      class="stickyBtn"
      position="bottom"
      expand
      v-if="$q.platform.is.mobile"
    >
      <q-btn
        @click="scrollToBookingForm"
        style="font-weight: 600; letter-spacing: 4px"
        size="16px"
        class="full-width my-text-font"
        color="light-blue-13"
        :label="$t('bookNow')"
        square
      />
    </q-page-sticky>
    <!-- Sticky Button End -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import BookingForm from './BookingForm.vue';

export default defineComponent({
  name: 'TourPage',
  components: { 'booking-form': BookingForm },
  props: {
    imgDesktop: String,
    imgMobile: String,
    breadCrumbsCategory: String,
    breadCrumbsCategoryRoute: null,
    breadCrumbsTourLabel: String,
    sliderImages: Object,
    articleTitle: String,
    articleSummaryText: String,
    articleFullText: String,
    articleImg: String,
    includes: Array,
    excludes: Array,
    tourDetails: { type: Object, required: true },
    faq: Object,
    bookingForm: { type: Object, required: true },
  },
  setup(props) {
    const currency = ref(props.bookingForm.currency == 'euro' ? '€' : '$');

    const scrollToBookingForm = () => {
      document
        .getElementById('bookingForm')
        ?.scrollIntoView({ behavior: 'smooth' });
    };

    return {
      slide: ref(1),
      autoplay: ref(true),
      currency,
      scrollToBookingForm,
      fullscreen: ref(false),
    };
  },
});
</script>

<style lang="sass" scoped>
h1
  font-size: 28px
  font-weight: bold

h3
  font-size: 24px
  font-weight: bold

p
  font-size: 22px

.articleFont
  font-size: 18px
  font-weight: 300

@media (max-width: 1024px)
    .pageContainer
      padding-left: 0%
      padding-right: 0%
</style>
