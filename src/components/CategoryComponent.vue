<template>
  <div class="container q-mx-sm">
    <div class="text-center q-pa-md">
      <h1 class="my-title-font-bold text-h4">
        {{ $t(`${categoryName}`) }} {{ $t('excursions') }}
      </h1>
    </div>

    <div>
      <p class="text-center" style="font-size: 18px">
        Mediterranean calling? Explore the best of the city and still have
        enough time for sunbathing & swimming. From discovering the Taurus
        Mountains to exploring the greatest waterfalls, find top-rated things to
        do with Antalya excursions.
      </p>
    </div>

    <q-separator size="1.5px" />

    <div class="q-ma-md text-center">
      <q-chip icon="star" text-color="secondary" color="white" size="18px">
        {{ $t('bestExcursions') }}
      </q-chip>
      <q-chip icon="favorite" text-color="secondary" color="white" size="18px">
        {{ $t('familyTours') }}
      </q-chip>
      <q-chip
        icon="directions_boat"
        text-color="secondary"
        color="white"
        size="18px"
      >
        {{ $t('boatTrips') }}
      </q-chip>
      <q-chip
        icon="scuba_diving"
        text-color="secondary"
        color="white"
        size="18px"
      >
        {{ $t('divingTrips') }}
      </q-chip>
    </div>

    <q-separator size="1.5px" />

    <div class="text-center">
      <h2 class="my-title-font-bold" style="font-size: 28px">
        {{ $t('mostPopularExcursionsIn') }} {{ $t(categoryName) }}
      </h2>
      <p style="font-size: 18px">
        Mega Star boat trip, Turkish bath, Antalya city tour, quad, buggy & jeep
        safari are the most popular excursions in Antalya in 2022.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CategoryComponent',
  props: { categoryName: { type: String, required: true } },
});
</script>
