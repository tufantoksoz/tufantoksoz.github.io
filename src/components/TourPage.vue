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

        <q-breadcrumbs-el label="Home" icon="home" to="/" />
        <q-breadcrumbs-el
          :label="breadCrumbsCategory"
          icon="category"
          :to="breadCrumbsCategoryRoute"
        />
        <q-breadcrumbs-el :label="breadCrumbsTourLabel" icon="tour" />
      </q-breadcrumbs>

      <q-separator />

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
            v-model="slide"
            navigation
            infinite
            :autoplay="autoplay"
            transition-prev="slide-right"
            transition-next="slide-left"
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = true"
          >
            <q-carousel-slide
              v-for="(item, index) in sliderImages"
              :key="index"
              :name="index"
              :img-src="item"
            />
          </q-carousel>
        </div>

        <q-separator class="q-mt-lg" />

        <div class="q-px-md">
          <h3 class="my-title-font-heavy q-my-xs" style="font-size: 20px">
            Price Includes
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
            Price Excludes
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
            Tour Details
          </h3>

          <q-expansion-item
            class="q-pb-sm"
            icon="info"
            label="Tour Cost"
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
            label="What should you bring with you on the tour?"
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
            label="Tour departure times (approximately)"
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
            label="Return times from the tour (approximately)"
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
            :label="tourDetails.distance.headerTitle"
            header-class="bg-info text-white"
            expand-icon-class="text-white"
          >
            <q-card class="bg-grey-3 my-text-font">
              <q-card-section>
                <div
                  v-for="(item, index) in tourDetails.distance.content"
                  :key="index"
                >
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

        <h3 class="q-mb-none q-px-md">F.A.Q</h3>

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

    <div class="col-md-4 col-sm-12">
      <booking-form :bookingForm="bookingForm"></booking-form>
    </div>
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
    breadCrumbsCategoryRoute: String,
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
    bookingForm: Object,
  },
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
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
