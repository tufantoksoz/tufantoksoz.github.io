<template>
  <div>
    <tour-page
      :breadCrumbsCategory="api.breadCrumbsCategory"
      :breadCrumbsCategoryRoute="api.breadCrumbsCategoryRoute"
      :breadCrumbsTourLabel="api.breadCrumbsTourLabel"
      :sliderImages="sliderImages"
      :includes="api.includes"
      :excludes="api.excludes"
      :tourDetails="api.tourDetails"
      :faq="api.faq"
      :bookingForm="api.bookingForm"
    >
      <template v-slot:articleSummary>
        <h1 class="text-red text-h4">Параглайдинг в Кемере Адрасан (1300m)</h1>
      </template>

      <template v-slot:articleFullText>
        <p class="text-red">
          P.S: Ехать из Кемера в одну сторону 50 км. Компания не несет
          ответственности за вещи, которые падают во время полета.
        </p>

        <h6 class="text-red">ОГРАНИЧЕНИЯ</h6>
        <ul>
          <li>Максимальный вес для мужчин 110 кг , для женщин 90 кг</li>
          <li>Максимальный рост 2 метра</li>
          <li>Минимальный возраст 5 лет</li>
        </ul>

        <h6 class="text-red">Экскурсия Параплан не Рекомендует</h6>
        <ul>
          <li>Людям с проблемами сердца и дыхательными путями</li>
          <li>Беременным, эпилептикам и людям с расстроенной психикой</li>
        </ul>
      </template>
    </tour-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TourPage from 'components/TourPage.vue';
import slider1 from 'assets/tour-images/adrasan-yamac-parasutu/slider/yamac-parasutu-1.webp';
import slider2 from 'assets/tour-images/adrasan-yamac-parasutu/slider/yamac-parasutu-2.webp';
import slider3 from 'assets/tour-images/adrasan-yamac-parasutu/slider/yamac-parasutu-3.webp';
import slider4 from 'assets/tour-images/adrasan-yamac-parasutu/slider/yamac-parasutu-4.webp';
import slider5 from 'assets/tour-images/adrasan-yamac-parasutu/slider/yamac-parasutu-5.webp';
import slider6 from 'assets/tour-images/adrasan-yamac-parasutu/slider/yamac-parasutu-6.webp';
import slider7 from 'assets/tour-images/adrasan-yamac-parasutu/slider/yamac-parasutu-7.webp';
import slider8 from 'assets/tour-images/adrasan-yamac-parasutu/slider/yamac-parasutu-8.webp';
import slider9 from 'assets/tour-images/adrasan-yamac-parasutu/slider/yamac-parasutu-9.webp';
import slider10 from 'assets/tour-images/adrasan-yamac-parasutu/slider/yamac-parasutu-10.webp';
import slider11 from 'assets/tour-images/adrasan-yamac-parasutu/slider/yamac-parasutu-11.webp';
import slider12 from 'assets/tour-images/adrasan-yamac-parasutu/slider/yamac-parasutu-12.webp';
import slider13 from 'assets/tour-images/adrasan-yamac-parasutu/slider/yamac-parasutu-13.webp';
import slider14 from 'assets/tour-images/adrasan-yamac-parasutu/slider/yamac-parasutu-14.webp';

import api from 'src/static/api/tours/kemer/adrasan-yamac-parasutu.json';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const sliderImages = [
      slider1,
      slider2,
      slider3,
      slider4,
      slider5,
      slider6,
      slider7,
      slider8,
      slider9,
      slider10,
      slider11,
      slider12,
      slider13,
      slider14,
    ];

    return {
      sliderImages,
      api,
    };
  },
});
</script>
