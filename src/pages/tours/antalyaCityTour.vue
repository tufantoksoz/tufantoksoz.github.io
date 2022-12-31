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
          Анталия — не только центр турецкого туризма, но и старинный город с
          богатой историей. Наша обзорная экскурсия по Анталии из Кемера
          позволит вам убедиться в этом самостоятельно. Во время экскурсии
          "городской тур по Анталии из Кемера" вы пройдетесь по старинным улицам
          города, увидите его с высоты птичьего полета и насладитесь его
          потрясающими красотами.
        </p>
      </template>

      <template v-slot:articleFullText>
        <p>
          Обзорная экскурсия по Анталии из Кемера начнется утром. Наш автобус
          заберет вас от вашего отеля в заранее назначенное время. Узнать его вы
          сможете во время бронирования экскурсии из Кемера. Завтрак не включен
          в стоимость экскурсии по Анталии из Кемера, поэтому мы советуем вам
          позавтракать в отеле. В первую очередь автобус привезет вас к месту
          посадки на канатную дорогу. Билет на нее входит в стоимость экскурсии.
          На фуникулере вы поднимитесь на гору Тюнектепе, где у вас будет 40
          минут свободного времени. Обратно в город вы вернетесь таким же
          образом. Внизу вас уже будет ждать нас автобус.
        </p>
      </template>
    </tour-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TourPage from 'components/TourPage.vue';
import imgDesktop from 'assets/tour-images/antalya-city-tour/desktop/antalya-city-tour.webp';
import imgMobile from 'assets/tour-images/antalya-city-tour/mobile/antalya-city-tour.webp';
import slider1 from 'assets/tour-images/antalya-city-tour/slider/antalya-city-tour-1.webp';
import slider2 from 'assets/tour-images/antalya-city-tour/slider/antalya-city-tour-2.webp';
import slider3 from 'assets/tour-images/antalya-city-tour/slider/antalya-city-tour-3.webp';

import slider4 from 'assets/tour-images/antalya-city-tour/slider/antalya-city-tour-4.webp';
import slider5 from 'assets/tour-images/antalya-city-tour/slider/antalya-city-tour-5.webp';
import slider6 from 'assets/tour-images/antalya-city-tour/slider/antalya-city-tour-6.webp';
import slider7 from 'assets/tour-images/antalya-city-tour/slider/antalya-city-tour-7.webp';
import slider8 from 'assets/tour-images/antalya-city-tour/slider/antalya-city-tour-8.webp';

import articleImg from 'assets/tour-images/antalya-city-tour/article/antalya-city-tour.webp';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const breadCrumbsCategory = 'Kemer';
    const breadCrumbsCategoryRoute = '/antalya/kemer';
    const breadCrumbsTourLabel = 'Обзорная Экскурсия по Анталии';

    const bookingForm = {
      tourName: 'Обзорная Экскурсия по Анталии из Кемера',
      currency: 'attach_money',
      oldPrice: 28,
      adultPrice: 25,
      childPrice: 20,
      babyPrice: 0,
      adultAge: '+12',
      childAge: '6-11',
      babyAge: '0-5',
    };

    const articleTitle = 'Экскурсия по Анталии из Кемера';

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
      'Трансфер (Мы забираем вас из вашего отеля и обротно отвозим в ваш отель)',
      'Aвтобус с кондиционером',
      'Страховка',
      'Услуга гида',
      'Обед',
      'Входной билет в Тюнектепе фуникулёр',
    ];

    const excludes = [
      'Любые личные расходы (фотографии, сувениры и т.д.)',
      'Любые напитки во время экскурсии',
      'Прогулка на яхте (по желанию)',
    ];

    const tourDetails = {
      tourCost: `This tour is ${bookingForm.adultPrice} USD for adults. It's ${bookingForm.childPrice} USD for childs ages ${bookingForm.childAge}. It is free for babies ${bookingForm.babyAge} years old.`,
      itemsBring: [
        'Фотоаппарат',
        'Солнцезащитные очки',
        'Деньги на личные расходы',
      ],
      departureTimes: [
        'В 08:15 из отелей Текирова',
        'В 08:30 из отелей Чамюва',
        'В 08:45 из отелей Кириш',
        'В 09:00 из отелей Кемер',
        'В 09:15 из отелей Гейнюк',
        'В 09:20-09:30 из отелей Бельдибы',
      ],
      returnTimes: [
        'В 17:00-18:00 из отелей Бельдибы',
        'В 17:00-18:00 из отелей Гейнюк',
        'В 17:00-18:00 из отелей Кемер',
        'В 17:00-18:00 из отелей Кириш',
        'В 17:00-18:00 из отелей Чамюва',
        'В 17:00-18:00 из отелей Текирова',
      ],
      distance: [
        'от Кемера - 47 км',
        'от Анталии - 0 км',
        'от Сиде - 73 км',
        'от Алании - 133 км',
      ],

      hours: '9 часов',
      days: 'Вт. Пт. Вс.',
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
