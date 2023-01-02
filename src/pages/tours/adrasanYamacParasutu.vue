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
        <p></p>
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
import imgDesktop from 'assets/tour-images/adrasan-yamac-parasutu/desktop/yamac-parasutu.webp';
import imgMobile from 'assets/tour-images/adrasan-yamac-parasutu/mobile/yamac-parasutu.webp';
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
import articleImg from 'assets/tour-images/adrasan-yamac-parasutu/article/yamac-parasutu.webp';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const breadCrumbsCategory = 'Kemer';
    const breadCrumbsCategoryRoute = '/antalya/kemer';
    const breadCrumbsTourLabel = 'Параглайдинг в Кемере Адрасан (1300m)';

    const bookingForm = {
      tourName: 'Параглайдинг в Кемере Адрасан (1300m)',
      currency: 'attach_money',
      oldPrice: 165,
      adultPrice: 150,
      childPrice: 150,
      babyPrice: 0,
      adultAge: '+13',
      childAge: '7-11',
      babyAge: '0-6',
      isBabySale: false,
    };

    const articleTitle = 'Параглайдинг в Кемере';

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

    const includes = [
      'Все наши туристи застрахованы на сумму в 40000$',
      'Необходимое снаряжение для полета на параплане',
      'Услуга трансфера от и до отеля',
    ];

    const excludes = ['CD c видео и фотографиями', 'Любые личные расходы'];

    const tourDetails = {
      tourCost: `This tour is ${bookingForm.adultPrice} USD for adults. It's ${bookingForm.childPrice} USD for childs ages ${bookingForm.childAge}.`,
      itemsBring: [
        'Фотоаппарат',
        'Вода',
        'Полотенце',
        'Купальник',
        'Спортивную обувь',
        'Солнцезащитные очки',
        'Фотоаппарат',
      ],
      departureTimes: [],
      returnTimes: [],
      distance: [
        'от Кемера - 47 км',
        'от Анталии - 0 км',
        'от Сиде - 73 км',
        'от Алании - 133 км',
      ],

      hours: '6 часов',
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
