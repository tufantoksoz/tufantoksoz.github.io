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
      :articleImg="articleImg"
      :includes="includes"
      :excludes="excludes"
      :tourDetails="tourDetails"
      :faq="faq"
      :bookingForm="bookingForm"
    >
      <template v-slot:articleSummary>
        <p>
          Представляем вашему вниманию экскурсию рыбалка в Улупинаре - это
          прекрасный уголок Анталии расположенный в регионе Кемер, на склонах
          горы Олимп. Экскурсия сюда впечатлит живописными пейзажами заснеженных
          гор, хрустальными водопадами, запахом костра и традиционным пикником с
          приготовленной свежей форелью.
        </p>
      </template>

      <template v-slot:articleFullText>
        <p>
          Даже начинающие рыбаки ощутят здесь настоящий охотничий азарт, ведь
          богатый улов им обеспечен. Это прекрасный выбор для семейного отдыха.
          Каждый сможет оценить сказочную красоту природы и местный колорит
          приготовленных блюд, по уникальным турецким рецептам.
        </p>
      </template>
    </tour-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TourPage from 'components/TourPage.vue';
import imgDesktop from 'assets/tour-images/fishing-in-ulupinar/desktop/fishing-in-ulupinar.webp';
import imgMobile from 'assets/tour-images/fishing-in-ulupinar/mobile/fishing-in-ulupinar.webp';
import slider1 from 'assets/tour-images/fishing-in-ulupinar/slider/fishing-in-ulupinar-1.webp';
import slider2 from 'assets/tour-images/fishing-in-ulupinar/slider/fishing-in-ulupinar-2.webp';
import slider3 from 'assets/tour-images/fishing-in-ulupinar/slider/fishing-in-ulupinar-3.webp';
import slider4 from 'assets/tour-images/fishing-in-ulupinar/slider/fishing-in-ulupinar-4.webp';
import slider5 from 'assets/tour-images/fishing-in-ulupinar/slider/fishing-in-ulupinar-5.webp';
import slider6 from 'assets/tour-images/fishing-in-ulupinar/slider/fishing-in-ulupinar-6.webp';
import slider7 from 'assets/tour-images/fishing-in-ulupinar/slider/fishing-in-ulupinar-7.webp';
import slider8 from 'assets/tour-images/fishing-in-ulupinar/slider/fishing-in-ulupinar-8.webp';
import articleImg from 'assets/tour-images/fishing-in-ulupinar/article/fishing-in-ulupinar.webp';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const breadCrumbsCategory = 'Kemer';
    const breadCrumbsCategoryRoute = '/antalya/kemer';
    const breadCrumbsTourLabel = 'Пикник и Рыбалка в Улупинаре';

    const bookingForm = {
      tourName: 'Пикник и Рыбалка в Улупинаре',
      currency: 'attach_money',
      oldPrice: 32,
      adultPrice: 30,
      childPrice: 25,
      babyPrice: 0,
      adultAge: '+12',
      childAge: '5-11',
      babyAge: '0-4',
    };

    const articleTitle = 'Пикник и Рыбалка в Улупинаре';

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
      'Обед: Форель, мясо на вертеле и салат',
      'Напитки (безлимитные) ( пиво, вино, кола, фанта, чай, кофе, вода)',
      'Страховка',
    ];

    const excludes = [
      'Любые личные расходы ( фотографии, сувениры и т.д.)',
      'Еда и напитки не входящие в меню ( креветки, омары, виски и т.д.)',
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
        'В 08:30 из отелей Бельдиби',
        'В 08:45 из отелей Гёйнюк',
        'В 09:00 из отелей Кемер',
        'В 09:15 из отелей Кириш',
        'В 09:25 из отелей Чамьюва',
        'В 09:45 из отелей Текирова',
      ],
      returnTimes: [
        'В 14:00-15:00 из отелей Текирова',
        'В 14:00-15:00 из отелей Чамьюва',
        'В 14:00-15:00 из отелей Кириш',
        'В 14:00-15:00 из отелей Кемер',
        'В 14:00-15:00 из отелей Гёйнюк',
        'В 14:00-15:00 из отелей Бельдиби',
      ],
      distance: [
        'от Кемера - 47 км',
        'от Анталии - 0 км',
        'от Сиде - 73 км',
        'от Алании - 133 км',
      ],

      hours: '4 часа',
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
