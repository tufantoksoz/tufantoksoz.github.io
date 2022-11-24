<template>
  <div>
    <tour-page
      :imgDesktop="imgDesktop"
      :imgMobile="imgMobile"
      :breadCrumbsCategory="breadCrumbsCategory"
      :breadCrumbsCategoryRoute="breadCrumbsCategoryRoute"
      :breadCrumbsTourLabel="breadCrumbsTourLabel"
      :sliderImages="sliderImages"
      :articleTitle="articleTitle"
      :articleSummaryText="articleSummaryText"
      :articleFullText="articleFullText"
      :articleImg="articleImg"
      :includes="includes"
      :excludes="excludes"
      :faq="faq"
      :bookingForm="bookingForm"
    >
    </tour-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TourPage from 'components/TourPage.vue';
import imgDesktop from 'assets/posts/adrasan-suluada/adrasan-suluada-desktop.jpg';
import imgMobile from 'assets/posts/adrasan-suluada/adrasan-suluada-slider-1.jpg';
import slider1 from 'assets/posts/adrasan-suluada/adrasan-suluada-slider-1.jpg';
import slider2 from 'assets/posts/adrasan-suluada/adrasan-suluada-slider-2.jpg';
import slider3 from 'assets/posts/adrasan-suluada/adrasan-suluada-slider-3.jpg';
import articleImg from 'assets/posts/adrasan-suluada/adrasan-suluada-slider-3.jpg';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const breadCrumbsCategory = 'Adrasan';
    const breadCrumbsCategoryRoute = '/';
    const breadCrumbsTourLabel = 'Adrasan Suluada Boat Tour';
    const articleTitle = 'Adrasan Suluada Boat Tour';
    const articleSummaryText =
      'Adrasan Suluada island boat tour from Antalya is a wonderful daily tour to the island of Suluada. During the boat ride you will take in the sights of the surrounding bays and the wooden boats from Adrasan. Adrasan bay is approximately 90 km from Antalya. The journey to Suluada is 15 km from Adrasan bay taking about 45 minutes by boat.';
    const sliderImages = [slider1, slider2, slider3];
    const articleFullText =
      'The island of Suluada takes its name because of its freshwater resources. It is one of the most beautiful islands in the region – covered in lush forests and rocks.The blue sea water sparkles like glass and the water is so clear you can see the bottom of the ocean. Suluada is known as the Turkish Maldives because of this sparkling bay. During the tour, you will have the opportunity to swim and snorkel in the beautiful waters of Suluada. You will also have further swimming breaks at the western and spring water beaches. Finally, on the way back from Suluada, you will have one last swimming break in one of the most beautiful bays, called Hacivat Bay. Hacivat takes its name from the formation of its rocks which resemble Hacivat the lead character of a traditional Turkish shadow play. Adrasan Suluada island tour from Antalya is a day not to be missed. You will take in the sights of the untouched beauty of Suluada and the breath-taking bays of the Adrasan region. It is a truly memorable experience.';
    const includes = [
      'Hotel Transfer (Both Ways)',
      'Guiding Service',
      'Lunch',
      'Insurance',
    ];

    const excludes = ['Personal Expenses', 'Drinks'];

    const faq = [
      {
        label: 'Question One',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      },
      {
        label: 'Question Two',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      },
      {
        label: 'Question Three',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      },
    ];

    const bookingForm = {
      tourName: 'Adrasan Suluada Boat Tour',
      currency: 'euro',
      oldPrice: 38,
      adultPrice: 30,
      childPrice: 12,
      babyPrice: 0,
    };

    return {
      imgDesktop,
      imgMobile,
      breadCrumbsCategory,
      breadCrumbsCategoryRoute,
      breadCrumbsTourLabel,
      articleTitle,
      articleSummaryText,
      sliderImages,
      articleFullText,
      articleImg,
      includes,
      excludes,
      faq,
      bookingForm,
    };
  },
});
</script>
