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
          Экскурсия в аквапарк The land of legends из Кемера - это возможность
          посетить самый большой парк развлечений и отдыха в Кемере, в Турции.
          Территория спроектированна по мотивам волшебных сказок и разделена на
          тематические зоны. Здесь каждый может найти себе занятие по душе !
          Парк The land of legends одно из лучших творений современных
          архитекторов, дизайнеров и инженеров! Это легендарный парк веселья,
          азарта и адреналина!
        </p>
      </template>

      <template v-slot:articleFullText>
        <p>
          Тематический парк The land of legends - это огромный парк развлечений.
          Общая площадь всей территории парка составляет 640 000 м2, из которых
          17 000 м2 - площадь отеля. Аквапарк с горками ; Dry Park (23
          аттракциона без воды; Hyper Coaster — высота аттракциона 61 м,
          скорость движения — 115 км/ч), так же стилизованный пляж у бассейна с
          привозным белым песком, дельфинарий, вольеры с пингвинами и многое
          другое.
        </p>
      </template>
    </tour-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TourPage from 'components/TourPage.vue';
import imgDesktop from 'assets/tour-images/land-of-legends/desktop/land-of-legends.webp';
import imgMobile from 'assets/tour-images/land-of-legends/mobile/land-of-legends.webp';
import slider1 from 'assets/tour-images/land-of-legends/slider/land-of-legends-1.webp';
import slider2 from 'assets/tour-images/land-of-legends/slider/land-of-legends-2.webp';
import slider3 from 'assets/tour-images/land-of-legends/slider/land-of-legends-3.webp';
import slider4 from 'assets/tour-images/land-of-legends/slider/land-of-legends-4.webp';
import slider5 from 'assets/tour-images/land-of-legends/slider/land-of-legends-5.webp';
import slider6 from 'assets/tour-images/land-of-legends/slider/land-of-legends-6.webp';
import slider7 from 'assets/tour-images/land-of-legends/slider/land-of-legends-7.webp';
import slider8 from 'assets/tour-images/land-of-legends/slider/land-of-legends-8.webp';
import slider9 from 'assets/tour-images/land-of-legends/slider/land-of-legends-9.webp';
import slider10 from 'assets/tour-images/land-of-legends/slider/land-of-legends-10.webp';
import slider11 from 'assets/tour-images/land-of-legends/slider/land-of-legends-11.webp';
import slider12 from 'assets/tour-images/land-of-legends/slider/land-of-legends-12.webp';
import slider13 from 'assets/tour-images/land-of-legends/slider/land-of-legends-13.webp';
import slider14 from 'assets/tour-images/land-of-legends/slider/land-of-legends-14.webp';
import slider15 from 'assets/tour-images/land-of-legends/slider/land-of-legends-15.webp';
import slider16 from 'assets/tour-images/land-of-legends/slider/land-of-legends-16.webp';
import slider17 from 'assets/tour-images/land-of-legends/slider/land-of-legends-17.webp';
import slider18 from 'assets/tour-images/land-of-legends/slider/land-of-legends-18.webp';
import articleImg from 'assets/tour-images/land-of-legends/article/land-of-legends.webp';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const breadCrumbsCategory = 'Kemer';
    const breadCrumbsCategoryRoute = '/antalya/kemer';
    const breadCrumbsTourLabel = 'Аквапарк The Land of Legends из Кемера';

    const bookingForm = {
      tourName: 'Аквапарк The Land of Legends из Кемера',
      currency: 'attach_money',
      oldPrice: 75,
      adultPrice: 70,
      childPrice: 60,
      babyPrice: 0,
      adultAge: '+12',
      childAge: '2-11',
      babyAge: '0-2',
    };

    const articleTitle = 'Аквапарк The Land of Legends из Кемера';

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
    ];

    const includes = [
      'Трансфер от и до отеля',
      'Автобус с кондиционером',
      'Страховка',
      'Услуги гида',
      'Входной билет в The Land of Legends Theme Park',
      'Все горки и бассейны',
      'Дельфин шоу',
    ];

    const excludes = [
      'Любые личные расходы (фотографии, сувениры и т.д.)',
      'Любые напитки и во время экскурсии',
      'Обед',
      'Другие аттракционы оплачивается дополнительно',
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
        'В 08:15 из отелей Гёйнюк',
        'В 08:00 отелей Кемер',
        'В 07:45 из отелей Кириш',
        'В 07:30 из отелей Чамьюва',
        'В 07:15 из отелей Текирова',
        'P.S: Точное время будет написано в вашем ваучере',
      ],
      returnTimes: [
        'В 18:00-19:00 из отелей Бельдибы',
        'В 18:00-19:00 из отелей Гейнюк',
        'В 18:00-19:00 из отелей Кемер',
        'В 18:00-19:00 из отелей Кириш',
        'В 18:00-19:00 из отелей Чамюва',
        'В 18:00-19:00 из отелей Текирова',
      ],
      distance: [
        'Расстояние от Бельдиби до The Land of Legends Theme Park: 1 час 10 минут - 65 км',
        'Расстояние от Гёйнюк до The Land of Legends Theme Park: 1 час 10 минут - 67 км',
        'Расстояние от Кемера до The Land of Legends Theme Park: 1 час 20 минут - 75 км',
        'Расстояние от Кириш до The Land of Legends Theme Park: 1 час 20 минут - 77 км',
        'Расстояние от Чамьюва до The Land of Legends Theme Park: 1 час 25 минут - 80 км',
        'Расстояние от Текирова до The Land of Legends Theme Park: 1 час 30 минут - 95 км',
      ],

      hours: '10 часов',
      days: 'Пн. Вт. Ср. Чт. Пт. Сб.',
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
