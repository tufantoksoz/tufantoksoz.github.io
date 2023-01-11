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
        <h1 class="text-red text-h4">Экскурсия на Остров Сулуада из Кемера</h1>

        <p>
          Как вы думаете, можно ли в наши дни на средиземноморском побережье
          Анталии найти необитаемый остров? Оказывается - можно! Экскурсия на
          остров Сулуада из Кемера -это место, где вы почувствуете себя как в
          раю! Остров Сулуада вулканического происхождения всего 1.3 км в длину
          и от 350 до 100 м в ширину. Он представляет собой гору с обрывающимися
          в море скальными склонами ярко-оранжевого цвета.
        </p>
      </template>

      <template v-slot:articleFullText>
        <p>
          Название Sulu Ada — составное слово, означающее «водный остров».
          Именуется остров так, благодаря источнику минеральной воды,
          расположенному здесь. В маленькой бухте, где находится источник,
          раньше вода текла со скал прямо в море, теперь проходит по трубе.
          Минеральная вода этого источника рекомендована при заболевании почек и
          желудочно-кишечного тракта. Ещё одна бухта представляет собою пещеру,
          вода в ней холодная. Существует легенда, что молодую красивую девушку
          разлучили с любимым парнем, забрав в гарем. Она горевала и плакала
          из-за чего в бухте прохладная вода.
        </p>
      </template>
    </tour-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TourPage from 'components/TourPage.vue';
import slider1 from 'assets/tour-images/adrasan-suluada/slider/adrasan-suluada-1.webp';
import slider2 from 'assets/tour-images/adrasan-suluada/slider/adrasan-suluada-2.webp';
import slider3 from 'assets/tour-images/adrasan-suluada/slider/adrasan-suluada-3.webp';
import api from 'src/static/api/tours/kemer/adrasan-suluada-boat-tour.json';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const sliderImages = [slider1, slider2, slider3];

    return {
      sliderImages,
      api,
    };
  },
});
</script>
