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
        <h1 class="text-red text-h4">Полёт на Воздушном Шаре в Памуккале</h1>
      </template>

      <template v-slot:articleFullText> </template>
    </tour-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TourPage from 'components/TourPage.vue';
import slider1 from 'assets/tour-images/pamukkale-sicak-hava-balonu/slider/pamukkale-sicak-hava-balonu-1.webp';
import slider2 from 'assets/tour-images/pamukkale-sicak-hava-balonu/slider/pamukkale-sicak-hava-balonu-2.webp';
import slider3 from 'assets/tour-images/pamukkale-sicak-hava-balonu/slider/pamukkale-sicak-hava-balonu-3.webp';
import slider4 from 'assets/tour-images/pamukkale-sicak-hava-balonu/slider/pamukkale-sicak-hava-balonu-4.webp';
import slider5 from 'assets/tour-images/pamukkale-sicak-hava-balonu/slider/pamukkale-sicak-hava-balonu-5.webp';
import slider6 from 'assets/tour-images/pamukkale-sicak-hava-balonu/slider/pamukkale-sicak-hava-balonu-6.webp';
import slider7 from 'assets/tour-images/pamukkale-sicak-hava-balonu/slider/pamukkale-sicak-hava-balonu-7.webp';
import slider8 from 'assets/tour-images/pamukkale-sicak-hava-balonu/slider/pamukkale-sicak-hava-balonu-8.webp';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const breadCrumbsCategory = 'Kemer';
    const breadCrumbsCategoryRoute = '/antalya/kemer';
    const breadCrumbsTourLabel = 'Полёт на Воздушном Шаре в Памуккале';

    const bookingForm = {
      tourName: 'Полёт на Воздушном Шаре в Памуккале',
      currency: 'attach_money',
      oldPrice: 230,
      adultPrice: 210,
      childPrice: 210,
      babyPrice: 0,
      adultAge: '+12',
      childAge: '4-11',
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
    ];

    const includes = [
      'Трансфер от и до отеля',
      'Автобус с кондиционером',
      'Полёт на шаре',
      'Сертификат – диплом о полете',
      'Завтрак',
      'Обед',
      'Страховка',
      'Услуги гида',
      'Входной билет в Памуккале',
      'Вода, чай, кофе в автобусе',
    ];

    const excludes = [
      'Любые личные расходы (фотографии, сувениры и т.д.)',
      'напитки во время экскурсии',
      'Входной билет в Бассейн Клеопатры',
    ];

    const tourDetails = {
      tourCost: `This tour is ${bookingForm.adultPrice} USD for adults. It's ${bookingForm.childPrice} USD for childs ages ${bookingForm.childAge}. It is free for babies ${bookingForm.babyAge} years old.`,
      itemsBring: [
        'Фотоаппарат',
        'Полотенце',
        'Купальник',
        'Крем от загара',
        'Солнцезащитные очки',
        'Деньги на личные расходы',
      ],
      departureTimes: [
        'В 00:15 из отелей Текирова',
        'В 00:30 из отелей Чамьюва',
        'В 00:45 из отелей Кириш',
        'В 01:00 из отелей Кемер',
        'В 01:15 из отелей Гёйнюк',
        'В 01:30 из отелей Бельдиби',
        'В 01:45 из отелей Коньяалты',
        'В 01:30 из отелей Калеичи',
        'В 01:15 из отелей Лара',
        'В 01:15 из отелей Кунду',
      ],
      returnTimes: ['15:00 - 16:00'],
      distance: [
        'Расстояние от Коньяалты до Памуккале: 253 км',
        'Расстояние от Калеичи до Памуккале: 244 км',
        'Расстояние от Лары до Памуккале: 249 км',
        'Расстояние от Кунду до Памуккале: 263 км',
        'Расстояние от Бельдиби до Памуккале: 257 км',
        'Расстояние от Гёйнюк до Памуккале: 266 км',
        'Расстояние от Кемера до Памуккале: 273 км',
        'Расстояние от Кириш до Памуккале: 280 км',
        'Расстояние от Чамьюва до Памуккале: 279 км',
        'Расстояние от Текирова до Памуккале: 289 км',
      ],

      hours: '13-14 часов',
      days: 'Пон. Четв.',
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
