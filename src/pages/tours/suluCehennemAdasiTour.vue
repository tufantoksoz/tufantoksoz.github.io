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
import imgDesktop from 'assets/tour-images/sulu-cehennem-adasi/desktop/sulu-cehennem-adasi.webp';
import imgMobile from 'assets/tour-images/sulu-cehennem-adasi/mobile/sulu-cehennem-adasi.webp';
import slider1 from 'assets/tour-images/sulu-cehennem-adasi/slider/sulu-cehennem-adasi-1.webp';
import slider2 from 'assets/tour-images/sulu-cehennem-adasi/slider/sulu-cehennem-adasi-2.webp';
import slider3 from 'assets/tour-images/sulu-cehennem-adasi/slider/sulu-cehennem-adasi-3.webp';
import slider4 from 'assets/tour-images/sulu-cehennem-adasi/slider/sulu-cehennem-adasi-4.webp';
import slider5 from 'assets/tour-images/sulu-cehennem-adasi/slider/sulu-cehennem-adasi-5.webp';
import slider6 from 'assets/tour-images/sulu-cehennem-adasi/slider/sulu-cehennem-adasi-6.webp';
import articleImg from 'assets/tour-images/sulu-cehennem-adasi/article/sulu-cehennem-adasi.webp';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const breadCrumbsCategory = 'Kemer';
    const breadCrumbsCategoryRoute = '/antalya/kemer';
    const breadCrumbsTourLabel = 'Экскурсия на Остров Сулу ада';

    const bookingForm = {
      tourName: 'Экскурсия на Остров «Сулу ада» (на закате)',
      currency: 'attach_money',
      oldPrice: 27,
      adultPrice: 25,
      childPrice: 15,
      babyPrice: 0,
    };

    const articleTitle = 'Экскурсия на Остров «Сулу ада» (на закате)';

    const articleSummaryText = '';

    const sliderImages = [slider1, slider2, slider3, slider4, slider5, slider6];

    const articleFullText = '';

    const includes = [
      'Трансфер от и до отеля',
      'Aвтобус с кондиционером',
      'Страховка',
      'Ужин (Рыба дорадо или Сибас, макароны, салат)',
      'Чай',
      'Услуга гида',
      'Прогулка на яхте',
    ];

    const excludes = [
      'Любые личные расходы (фотографии, сувениры и т.д.)',
      'Любые напитки во время экскурсии( кроме чая)',
    ];

    const tourDetails = {
      tourCost:
        "This tour is $25 for adults. It's $15 for childs ages 4-11. It is free for babies 0-3 years old.",
      itemsBring:
        'Фотоаппарат, Полотенце, купальник, Солнцезащитные очки, Солнцезащитный крем, Деньги на личные расходы',
      departureTimes: [
        'Beldibi: 14:00',
        'Göynük: 14:15',
        'Kemer: 14:30',
        'Kiriş: 14:45',
        'Çamyuva: 15:00',
      ],
      returnTimes: [
        'В 22:30-23:00 из отелей Текирова',
        'В 22:30-23:00 из отелей Чамьюва',
        'В 22:30-23:00 из отелей Кириш',
        'В 22:30-23:00 из отелей Кемер',
        'В 22:30-23:00 из отелей Гёйнюк',
        'В 22:30-23:00 из отелей Бельдиби ',
      ],
      distance: [
        'от Анталии - 45 км',
        'от Сиде - 118 км',
        'от Алании - 178 км',
      ],

      hours: '8 часов',
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
