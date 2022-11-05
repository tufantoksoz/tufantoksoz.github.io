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

  <div class="pageContainer">
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
        <h1>{{ articleTitle }}</h1>
        <p>{{ articleSummaryText }}</p>
      </div>

      <q-expansion-item
        expand-separator
        header-class="text-primary text-center"
        :label="expansionText"
        @update:model-value="toggle"
      >
        <q-card>
          <q-card-section>
            <p>{{ articleFullText }}</p>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-separator class="q-mb-lg" />

      <div class="q-pa-sm">
        <q-carousel
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
            :name="1"
            img-src="https://cdn.quasar.dev/img/mountains.jpg"
          />
          <q-carousel-slide
            :name="2"
            img-src="https://cdn.quasar.dev/img/parallax1.jpg"
          />
          <q-carousel-slide
            :name="3"
            img-src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
        </q-carousel>
      </div>

      <q-separator class="q-mt-lg" />

      <q-expansion-item
        icon="info"
        label="Tour Info"
        header-class="text-primary"
      >
        <q-card>
          <q-card-section>
            {{ tourInfoText }}
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-separator />

      <q-expansion-item
        icon="star"
        label="Includes / Excludes"
        header-class="text-primary"
      >
        <div class="row">
          <div class="col">
            <q-card
              class="my-card q-pl-md q-pt-md"
              flat
              v-for="(item, index) in includes"
              :key="index"
            >
              <q-card-section horizontal>
                <q-icon
                  class="q-pa-md q-gutter-md"
                  name="check_circle"
                  color="positive"
                  size="24px"
                ></q-icon>
                {{ item }}
              </q-card-section>
            </q-card>
          </div>

          <div class="col">
            <q-card
              class="my-card q-pl-md q-pt-md"
              flat
              v-for="(item, index) in excludes"
              :key="index"
            >
              <q-card-section horizontal>
                <q-icon
                  class="q-pa-md q-gutter-md"
                  name="cancel"
                  color="negative"
                  size="24px"
                ></q-icon>
                {{ item }}
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-expansion-item>

      <q-separator />

      <q-expansion-item
        icon="event"
        label="Days & Time"
        header-class="text-primary"
      >
        <q-card>
          <q-card-section>
            {{ daysTimeText }}
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-separator />

      <h3 class="q-pl-lg q-mb-none">F.A.Q</h3>

      <div v-for="(item, index) in faq" :key="index">
        <q-expansion-item expand-separator icon="add" :label="item.label">
          <q-card>
            <q-card-section>
              {{ item.text }}
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </div>
    </div>

    <q-separator class="q-my-lg" />

    <booking-form></booking-form>
  </div>
</template>

<style lang="sass" scoped>

h1
  font-size: 28px
  font-weight: bold

h3
  font-size: 24px
  font-weight: bold

p
  font-size: 22px

.my-card
  width: 100%
  max-width: 350px

.expansion
  font-size: medium

@media (max-width: 1000px)
    .pageContainer
      padding-left: 0%
      padding-right: 0%
</style>

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
    articleTitle: String,
    articleSummaryText: String,
    articleFullText: String,
    articleImg: String,
    tourInfoText: String,
    includes: Array,
    excludes: Array,
    daysTimeText: String,
    faq: Object,
    price: Number,
  },
  setup() {
    let expansionText = ref('Read More...');

    const toggle = (e: boolean) => {
      if (e == true) {
        expansionText.value = 'Read Less';
      } else {
        expansionText.value = 'Read More...';
      }
    };

    return {
      toggle,
      expansionText,
      slide: ref(1),
      autoplay: ref(true),
    };
  },
});
</script>
