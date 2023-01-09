<template>
  <div>
    <tour-page
      :imgDesktop="imgDesktop"
      :imgMobile="imgMobile"
      :breadCrumbsCategory="breadCrumbsCategory"
      :breadCrumbsCategoryRoute="breadCrumbsCategoryRoute"
      :breadCrumbsTourLabel="breadCrumbsTourLabel"
      :sliderImages="sliderImages"
      :includes="includes"
      :excludes="excludes"
      :tourDetails="tourDetails"
      :faq="faq"
      :bookingForm="bookingForm"
    >
      <template v-slot:articleSummary>
        <h1 class="text-red text-h4">Параглайдинг с Горы Тахталы 2365m</h1>
      </template>

      <template v-slot:articleFullText> </template>
    </tour-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TourPage from 'components/TourPage.vue';
import imgDesktop from 'assets/tour-images/tahtali-yamac-parasutu/desktop/yamac-parasutu.webp';
import imgMobile from 'assets/tour-images/tahtali-yamac-parasutu/mobile/yamac-parasutu.webp';
import slider1 from 'assets/tour-images/tahtali-yamac-parasutu/slider/yamac-parasutu-1.webp';
import slider2 from 'assets/tour-images/tahtali-yamac-parasutu/slider/yamac-parasutu-2.webp';
import slider3 from 'assets/tour-images/tahtali-yamac-parasutu/slider/yamac-parasutu-3.webp';
import slider4 from 'assets/tour-images/tahtali-yamac-parasutu/slider/yamac-parasutu-4.webp';
import slider5 from 'assets/tour-images/tahtali-yamac-parasutu/slider/yamac-parasutu-5.webp';
import slider6 from 'assets/tour-images/tahtali-yamac-parasutu/slider/yamac-parasutu-6.webp';
import slider7 from 'assets/tour-images/tahtali-yamac-parasutu/slider/yamac-parasutu-7.webp';
import slider8 from 'assets/tour-images/tahtali-yamac-parasutu/slider/yamac-parasutu-8.webp';
import slider9 from 'assets/tour-images/tahtali-yamac-parasutu/slider/yamac-parasutu-9.webp';
import slider10 from 'assets/tour-images/tahtali-yamac-parasutu/slider/yamac-parasutu-10.webp';
import articleImg from 'assets/tour-images/tahtali-yamac-parasutu/article/yamac-parasutu.webp';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const breadCrumbsCategory = 'Kemer';
    const breadCrumbsCategoryRoute = '/antalya/kemer';
    const breadCrumbsTourLabel = 'Параглайдинг с Горы Тахталы';

    const bookingForm = {
      tourName: 'Параглайдинг с Горы Тахталы 2365m',
      currency: 'attach_money',
      oldPrice: 270,
      adultPrice: 250,
      childPrice: 250,
      babyPrice: 0,
      adultAge: '+12',
      childAge: '7-11',
      babyAge: '0-5',
      isBabySale: false,
    };

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
    ];

    const includes = [
      'Все наши туристи застрахованы на сумму в 1000000$',
      'Необходимое снаряжение для полета на параплане',
      'Услуга трансфера от и до отеля',
    ];

    const excludes = ['CD c видео и фотографиями ', 'Любые личные расходы'];

    const tourDetails = {
      tourCost: `This tour is ${bookingForm.adultPrice} USD for adults. It's ${bookingForm.childPrice} USD for childs ages ${bookingForm.childAge}.`,
      itemsBring: [
        'Фотоаппарат',
        'Вода',
        'Полотенце',
        'Купальник',
        'Спортивный обувь',
        'Солнцезащитные очки',
        'Фотоаппарат',
      ],
      departureTimes: [],
      returnTimes: [],
      distance: [],

      hours: '5 часов',
      days: 'Каждый день',
    };

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

    return {
      imgDesktop,
      imgMobile,
      breadCrumbsCategory,
      breadCrumbsCategoryRoute,
      breadCrumbsTourLabel,
      sliderImages,
      articleImg,
      includes,
      excludes,
      faq,
      bookingForm,
      tourDetails,
    };
  },
});
</script>
