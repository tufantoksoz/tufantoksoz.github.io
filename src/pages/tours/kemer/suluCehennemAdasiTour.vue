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
        <h1 class="text-red text-h4">
          Экскурсия на Остров «Сулу ада» (на закате)
        </h1>

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
      adultAge: '+12',
      childAge: '4-11',
      babyAge: '0-3',
    };

    const sliderImages = [slider1, slider2, slider3, slider4, slider5, slider6];

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
      tourCost: `This tour is ${bookingForm.adultPrice} USD for adults. It's ${bookingForm.childPrice} USD for childs ages ${bookingForm.childAge}. It is free for babies ${bookingForm.babyAge} years old.`,
      itemsBring: [
        'Фотоаппарат',
        'Полотенце',
        'купальник',
        'Солнцезащитные очки',
        'Солнцезащитный крем',
        'Деньги на личные расходы',
      ],
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
