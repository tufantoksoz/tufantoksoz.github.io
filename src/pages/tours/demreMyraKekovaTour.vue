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
      :tourDetails="tourDetails"
      :faq="faq"
      :bookingForm="bookingForm"
    >
    </tour-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TourPage from 'components/TourPage.vue';
import imgDesktop from 'assets/tour-images/demre-myra-kekova/desktop/demre-myra-kekova-tour.webp';
import imgMobile from 'assets/tour-images/demre-myra-kekova/mobile/demre-myra-kekova-tour.webp';
import slider1 from 'assets/tour-images/demre-myra-kekova/slider/demre-myra-kekova-tour-1.webp';
import slider2 from 'assets/tour-images/demre-myra-kekova/slider/demre-myra-kekova-tour-2.webp';
import slider3 from 'assets/tour-images/demre-myra-kekova/slider/demre-myra-kekova-tour-3.webp';
import slider4 from 'assets/tour-images/demre-myra-kekova/slider/demre-myra-kekova-tour-4.webp';
import slider5 from 'assets/tour-images/demre-myra-kekova/slider/demre-myra-kekova-tour-5.webp';
import slider6 from 'assets/tour-images/demre-myra-kekova/slider/demre-myra-kekova-tour-6.webp';
import slider7 from 'assets/tour-images/demre-myra-kekova/slider/demre-myra-kekova-tour-7.webp';
import slider8 from 'assets/tour-images/demre-myra-kekova/slider/demre-myra-kekova-tour-8.webp';
import slider9 from 'assets/tour-images/demre-myra-kekova/slider/demre-myra-kekova-tour-9.webp';

import articleImg from 'assets/tour-images/demre-myra-kekova/article/demre-myra-kekova-tour.webp';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const breadCrumbsCategory = 'Kemer'; // demere kategorisi eklendğinde değişecek
    const breadCrumbsCategoryRoute = '/antalya/kemer'; // demere kategorisi eklendğinde değişecek
    const breadCrumbsTourLabel = 'Экскурсия в Демре Мира Кекова';

    const bookingForm = {
      tourName: 'Экскурсия в Демре Мира Кекова',
      currency: 'attach_money',
      oldPrice: 28,
      adultPrice: 25,
      childPrice: 20,
      babyPrice: 0,
    };

    const articleTitle = 'Экскурсия по Анталии из Кемера';

    const articleSummaryText =
      'Экскурсия Демре Мира Кекова из Кемера  - уникальная возможность увидеть пересечение четырех древних культур – римской, византийской, ликийской и эллинской! Участников экскурсии Демре Мира Кекова из Кемера ждёт полное погружение в античность! Руины древнего города Мира будут сопровождаться тёплыми водами Средиземноморья и его скалистыми берегами! Вас так же ждёт посещение маленьких турецких аутентичных деревень, в которых кажется, что время давно остановилось.';

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
    ];

    const articleFullText =
      'Античный город Мира, руины которого расположились недалеко от современного города Демре. Главной достопримечательностью города Мира является скальные ликийские гробницы. Строились они на вершине горы,что бы быть поближе к богам, ведь именно здесь устраивали свои захоронения богатые ликийцы. Мастерски вырезанные гробницы, прямо в скальной породе - очень похожи на храмы и дома. Так же в городе Мира хорошо сохранился ликийский амфитеатр! Много веков назад это было не менее масштабное место, здесь проводили театральные представления и спортивные состязания, к слову, здесь и сегодня иногда проводят фестивали.';

    const includes = [
      'Трансфер от и до отеля',
      'Aвтобус с кондиционером',
      'Обед',
      'Страховка',
      'Услуги гида',
      'Прогулка на яхте',
      'Входной билет в Миру',
    ];

    const excludes = [
      'Любые личные расходы (фотографии, сувениры и т.д.)',
      'Любые напитки во время экскурсии',
      'Входной билет в Церковь Николая угодника (по желанию)',
      'Завтрак',
    ];

    const tourDetails = {
      tourCost:
        "This tour is $25 for adults. It's $20 for childs ages 6-11. It is free for babies 0-5 years old.",
      itemsBring:
        'Фотоаппарат, Полотенце, Купальник, Крем от загара, Солнцезащитные очки, Деньги на личные расходы',
      departureTimes: [
        'В 07:10 - 07:30 из отелей Бельдиби',
        'В 07:45 из отелей Гёйнюк',
        'В 08:00 из отелей Кемер',
        'В 08:15 из отелей Кириш',
        'В 08:30 из отелей Чамьюва',
        'В 08:45 из отелей Текирова',
      ],
      returnTimes: [
        'В 17:45 из Текирова',
        'В 18:00 из Чамюва',
        'В 18:05 из Кириш',
        'В 18:10 из Кемер',
        'В 18:20 из Гейнюк',
        'В 18:30 из Бельдибы',
      ],
      distance: [
        'от Кемера - 102 км',
        'от Анталии - 141 км',
        'от Сиде - 215 км',
        'от Алании - 276 км',
      ],

      hours: '9 - 10 часов',
      days: 'Вт. Чт. Вс.',
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
      articleTitle,
      articleSummaryText,
      sliderImages,
      articleFullText,
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
