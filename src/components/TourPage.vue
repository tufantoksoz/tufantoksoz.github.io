<template>
  <swiper
    :modules="swiperModules"
    :slides-per-view="2"
    :space-between="8"
    loop
    autoplay
    navigation
    :breakpoints="{ 800: { slidesPerView: 2 }, 0: { slidesPerView: 1 } }"
  >
    <swiper-slide
      v-for="(item, index) in sliderImages"
      :key="index"
      :name="index"
      ><q-img :height="$q.screen.width >= 800 ? '500px' : '350px'" :src="item"
    /></swiper-slide>
  </swiper>

  <div class="row container">
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
            color="orange"
            icon="payments"
            text-color="white"
            :label="bookingForm.adultPrice + ' ' + currency"
          />

          <q-chip
            :ripple="false"
            color="orange"
            icon="verified_user"
            text-color="white"
            :label="$t('insurance')"
          />

          <q-chip
            :ripple="false"
            color="orange"
            icon="restaurant"
            text-color="white"
            :label="$t('dinner')"
          />

          <q-chip
            :ripple="false"
            color="orange"
            icon="directions_bus"
            text-color="white"
            :label="$t('transfer')"
          />

          <q-chip
            :ripple="false"
            color="orange"
            icon="schedule"
            text-color="white"
            :label="tourDetails.hours"
          />

          <q-chip
            :ripple="false"
            color="orange"
            icon="event_available"
            text-color="white"
            :label="tourDetails.days"
          />
        </div>
      </div>

      <div>
        <div class="q-px-md">
          <div class="articleFont">
            <slot name="articleSummary"></slot>
          </div>
        </div>

        <q-separator class="q-mx-md" />

        <div class="q-px-md">
          <h3 class="q-my-xs text-indigo-10" style="font-size: 20px">
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
          <h3 class="q-my-xs text-indigo-10" style="font-size: 20px">
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
          <h3 class="q-my-xs text-indigo-10" style="font-size: 20px">
            {{ $t('tourDetails') }}
          </h3>

          <q-expansion-item
            class="q-pb-sm"
            icon="flag"
            :label="$t('tourProgram')"
            header-class="bg-info text-white"
            expand-icon-class="text-white"
          >
            <q-card class="bg-grey-3 my-text-font">
              <q-card-section>
                <div
                  v-for="(item, index) in tourDetails.tourProgram"
                  :key="index"
                >
                  <q-icon name="chevron_right" size="24px" /> {{ item }}
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            class="q-pb-sm"
            icon="payments"
            :label="$t('tourCost')"
            header-class="bg-info text-white"
            expand-icon-class="text-white"
          >
            <q-card class="bg-grey-3 my-text-font">
              <q-card-section>
                <div>
                  <q-icon name="chevron_right" size="24px" />
                  Цена для взрослых ({{ bookingForm.adultAge }}) :
                  {{ bookingForm.adultPrice }} {{ currency }}
                </div>

                <div>
                  <q-icon name="chevron_right" size="24px" /> Цена для детей ({{
                    bookingForm.childAge
                  }}) : {{ bookingForm.childPrice }} {{ currency }}
                </div>

                <div>
                  <q-icon name="chevron_right" size="24px" /> Цена для детей ({{
                    bookingForm.babyAge
                  }}) : {{ bookingForm.babyPrice }} {{ currency }}
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            class="q-pb-sm"
            icon="backpack"
            :label="$t('itemsBring')"
            header-class="bg-info text-white"
            expand-icon-class="text-white"
          >
            <q-card class="bg-grey-3 my-text-font">
              <q-card-section>
                <div
                  v-for="(item, index) in tourDetails.itemsBring"
                  :key="index"
                >
                  <q-icon name="chevron_right" size="24px" /> {{ item }}
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            class="q-pb-sm"
            icon="departure_board"
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
            icon="keyboard_return"
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
            icon="fa-solid fa-map-location-dot"
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

        <div class="q-mt-md q-px-md articleFont">
          <slot name="articleFullText"></slot>
        </div>

        <q-separator class="q-my-md" />

        <h3 class="q-mb-none q-px-md text-indigo-10">{{ $t('faq') }}</h3>

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

        <q-separator class="q-my-md" />

        <!-- <div class="row q-ma-md">
          <div class="col-12">
            <h3>Related Tours</h3>
          </div>

          <div class="col-6 q-mr-md relatedTourCardItem">
            <q-card flat v-ripple>
              <img src="https://cdn.quasar.dev/img/mountains.jpg" />

              <q-card-section class="q-ma-md" horizontal>
                <div class="text-h6">Tour Name</div>
                <div class="text-h6 absolute-right">35 USD</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-6 relatedTourCardItem">
            <q-card flat v-ripple>
              <img src="https://cdn.quasar.dev/img/mountains.jpg" />

              <q-card-section class="q-ma-md" horizontal>
                <div class="col-8 text-h6">Экскурсия в Каньон Гёйнюк</div>
                <div class="col-4 text-h6 text-right">35 USD</div>
              </q-card-section>
            </q-card>
          </div>
        </div> -->
      </div>
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

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

export default defineComponent({
  name: 'TourPage',
  components: { 'booking-form': BookingForm, Swiper, SwiperSlide },
  props: {
    imgDesktop: String,
    imgMobile: String,
    breadCrumbsCategory: String,
    breadCrumbsCategoryRoute: null,
    breadCrumbsTourLabel: String,
    sliderImages: Object,
    includes: Array,
    excludes: Array,
    tourDetails: { type: Object, required: true },
    faq: Object,
    bookingForm: { type: Object, required: true },
    relatedTours: { type: Object, required: false },
  },

  setup(props) {
    const currency = ref(props.bookingForm.currency == 'euro' ? 'Euro' : 'USD');

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
      swiperModules: [Autoplay, Navigation],
    };
  },
});
</script>

<style lang="sass" scoped>
h3
  font-size: 24px
  font-weight: bold

.articleFont
  font-size: 17px
  font-weight: 300

.relatedTourCardItem
  height: 300px
  width: 300px
</style>
