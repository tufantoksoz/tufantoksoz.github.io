<template>
  <div>
    <tour-page
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
        <h1 class="text-red text-h4">
          Детали Экскурсии в Каппадокию (Все Включено)
        </h1>
      </template>

      <template v-slot:articleFullText> </template>
    </tour-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TourPage from 'components/TourPage.vue';
import slider1 from 'assets/tour-images/cappadocia-tour/slider/cappadocia-tour-1.webp';
import slider2 from 'assets/tour-images/cappadocia-tour/slider/cappadocia-tour-2.webp';
import slider3 from 'assets/tour-images/cappadocia-tour/slider/cappadocia-tour-3.webp';
import slider4 from 'assets/tour-images/cappadocia-tour/slider/cappadocia-tour-4.webp';
import slider5 from 'assets/tour-images/cappadocia-tour/slider/cappadocia-tour-5.webp';
import slider6 from 'assets/tour-images/cappadocia-tour/slider/cappadocia-tour-6.webp';
import slider7 from 'assets/tour-images/cappadocia-tour/slider/cappadocia-tour-7.webp';
import slider8 from 'assets/tour-images/cappadocia-tour/slider/cappadocia-tour-8.webp';
import slider9 from 'assets/tour-images/cappadocia-tour/slider/cappadocia-tour-9.webp';
import slider10 from 'assets/tour-images/cappadocia-tour/slider/cappadocia-tour-10.webp';
import slider11 from 'assets/tour-images/cappadocia-tour/slider/cappadocia-tour-11.webp';
import slider12 from 'assets/tour-images/cappadocia-tour/slider/cappadocia-tour-12.webp';
import slider13 from 'assets/tour-images/cappadocia-tour/slider/cappadocia-tour-13.webp';
import slider14 from 'assets/tour-images/cappadocia-tour/slider/cappadocia-tour-14.webp';
import slider15 from 'assets/tour-images/cappadocia-tour/slider/cappadocia-tour-15.webp';
import slider16 from 'assets/tour-images/cappadocia-tour/slider/cappadocia-tour-16.webp';
import slider17 from 'assets/tour-images/cappadocia-tour/slider/cappadocia-tour-17.webp';
import slider18 from 'assets/tour-images/cappadocia-tour/slider/cappadocia-tour-18.webp';
import slider19 from 'assets/tour-images/cappadocia-tour/slider/cappadocia-tour-19.webp';
import slider20 from 'assets/tour-images/cappadocia-tour/slider/cappadocia-tour-20.webp';
import slider21 from 'assets/tour-images/cappadocia-tour/slider/cappadocia-tour-21.webp';
import slider22 from 'assets/tour-images/cappadocia-tour/slider/cappadocia-tour-22.webp';
import slider23 from 'assets/tour-images/cappadocia-tour/slider/cappadocia-tour-23.webp';
import slider24 from 'assets/tour-images/cappadocia-tour/slider/cappadocia-tour-24.webp';
import slider25 from 'assets/tour-images/cappadocia-tour/slider/cappadocia-tour-25.webp';
import slider26 from 'assets/tour-images/cappadocia-tour/slider/cappadocia-tour-26.webp';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const breadCrumbsCategory = 'Kemer';
    const breadCrumbsCategoryRoute = '/antalya/kemer';
    const breadCrumbsTourLabel = 'Экскурсия в Каппадокию (Все Включено)';

    const bookingForm = {
      tourName: 'Экскурсия в Каппадокию (Все Включено)',
      currency: 'attach_money',
      oldPrice: 90,
      adultPrice: 80,
      childPrice: 80,
      babyPrice: 0,
      adultAge: '+8',
      childAge: '4-7',
      babyAge: '0-3',
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
      slider11,
      slider12,
      slider13,
      slider14,
      slider15,
      slider16,
      slider17,
      slider18,
      slider19,
      slider20,
      slider21,
      slider22,
      slider23,
      slider24,
      slider25,
      slider26,
    ];

    const includes = [
      'Входной билет в подземный город Саратлы',
      'Трансфер от и до отеля',
      'Aвтобус с кондиционером',
      'Страховка',
      'Услуги гида',
      'Завтрок в первый день',
      'Обед',
      'Ужин первый день в отеле',
      'Завтрак второй день в отеле',
      'Ночлег в отеле в Каппадокии',
    ];

    const excludes = [
      'Любые личные расходы (фотографии, сувениры и т.д.)',
      'Любые напитки во время экскурсии',
      'Шоу Каппадокийской ночи',
      'Полет на воздушном шаре',
    ];

    const tourDetails = {
      tourCost: `This tour is ${bookingForm.adultPrice} USD for adults. It's ${bookingForm.childPrice} USD for childs ages ${bookingForm.childAge}. It is free for babies ${bookingForm.babyAge} years old.`,
      itemsBring: [
        'Фотоаппарат',
        'Удобную обувь',
        'солнцезащитные очки',
        'Деньги на личные расходы',
      ],

      departureTimes: [
        'В 03:00 из отелей Текирова',
        'В 03:15 из отелей Чамьюва',
        'В 03:30 из отелей Кириш',
        'В 04:00 из отелей Кемер',
        'В 04:15 из отелей Гёйнюк',
        'В 04:30 из отелей Бельдиби',
        'В 03:40 из отелей Коньяалты',
        'В 04:00 из отелей Калеичи',
        'В 04:25 из отелей Лара',
        'В 04:30 из отелей Кунду',
      ],
      returnTimes: ['В 20:00 – 21:00'],
      distance: [
        'Расстояние от Бельдиби до Каппадокии: 580 км',
        'Расстояние от Гёйнюк до Каппадокии: 580 км',
        'Расстояние от Кемера до Каппадокии: 590 км',
        'Расстояние от Кириш до Каппадокии: 595 км',
        'Расстояние от Чамьюва до Каппадокии: 595 км',
        'Расстояние от Текирова до Каппадокии: 605 км',
        'Расстояние от Коньяалты до Каппадокии: 570 км',
        'Расстояние от Калеичи до Каппадокии: 560 км',
        'Расстояние от Лары до Каппадокии: 545 км',
        'Расстояние от Кунду до Каппадокии: 530 км',
      ],

      hours: '2 дня',
      days: 'Пн. Вт. Чт. Сб. Вс.',
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
      breadCrumbsCategory,
      breadCrumbsCategoryRoute,
      breadCrumbsTourLabel,
      sliderImages,
      includes,
      excludes,
      faq,
      bookingForm,
      tourDetails,
    };
  },
});
</script>
