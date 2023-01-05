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
          Дайвинг в Кемере от организатора. Здесь цена, описание, отзывы и
          детали экскурсии. Хотите увидеть необычайно красочный и
          непредсказуемый мир? Вам на экскурсию – дайвинг в Кемере. Дайвинг в
          Кемере - увлекательное путешествие в подводный мир. Мы сделали
          доступным и даём возможность ощутить глубину моря каждому. Мы заберём
          вас от вашего отеля и доставим обратно в отель в Анталии, Белек,
          Кунду, Бельдиби, Кемер, Кириш, Гейнюк, Чамьюва, Текирова.
        </p>
      </template>

      <template v-slot:articleFullText>
        <p>
          Турция отличается весьма благоприятными условиями для дайвинга:
          прозрачное море, песчаное дно, отсутствие волнений и быстрых подводных
          течений. Для того, что бы посетить экскурсионный тур "Дайвинг в
          Кемере" - вовсе необязательно быть профессионалом или иметь какие-либо
          специальные навыки. Подводный дайвинг в Кемере на побережье Турции
          довольно распространён и является одной из популярных экскурсий среди
          туристов. Во время экскурсии дайвинг в Кемере вас ждут неповторимая
          красота Средиземного моря и разнообразные впечатления от погружений. В
          Анталийском побережье большое количество мест, где дайвингом могут
          заниматься как начинающие, так и профессиональные дайверы.
        </p>
      </template>
    </tour-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TourPage from 'components/TourPage.vue';
import imgDesktop from 'assets/tour-images/kemer-diving/desktop/kemer-diving.webp';
import imgMobile from 'assets/tour-images/kemer-diving/mobile/kemer-diving.webp';
import slider1 from 'assets/tour-images/kemer-diving/slider/kemer-diving-1.webp';
import slider2 from 'assets/tour-images/kemer-diving/slider/kemer-diving-2.webp';
import slider3 from 'assets/tour-images/kemer-diving/slider/kemer-diving-3.webp';
import slider4 from 'assets/tour-images/kemer-diving/slider/kemer-diving-4.webp';
import slider5 from 'assets/tour-images/kemer-diving/slider/kemer-diving-5.webp';
import slider6 from 'assets/tour-images/kemer-diving/slider/kemer-diving-6.webp';
import slider7 from 'assets/tour-images/kemer-diving/slider/kemer-diving-7.webp';
import slider8 from 'assets/tour-images/kemer-diving/slider/kemer-diving-8.webp';
import articleImg from 'assets/tour-images/kemer-diving/article/kemer-diving.webp';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const breadCrumbsCategory = 'Kemer';
    const breadCrumbsCategoryRoute = '/antalya/kemer';
    const breadCrumbsTourLabel = 'Дайвинг в Кемере';

    const bookingForm = {
      tourName: 'Дайвинг в Кемере',
      currency: 'attach_money',
      oldPrice: 30,
      adultPrice: 25,
      childPrice: 0,
      babyPrice: 0,
      adultAge: '+12',
      childAge: '6-11',
      babyAge: '0-5',
    };

    const articleTitle = 'Дайвинг в Кемере';

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
      'Aвтобус с кондиционером',
      'Обед',
      'Страховка',
      'Услуги гида',
      'Снаряжение для дайвинга',
    ];

    const excludes = [
      'Любые личные расходы (фотографии , сувениры и т.д.)',
      'Любые напитки во время экскурсии',
    ];

    const tourDetails = {
      tourCost: `This tour is ${bookingForm.adultPrice} USD for adults. It's ${bookingForm.childPrice} USD for childs ages ${bookingForm.childAge}. It is free for babies ${bookingForm.babyAge} years old.`,
      itemsBring: [
        'Фотоаппарат',
        'воду',
        'Полотенце',
        'купальник',
        'Крем от загара',
        'солнцезащитные очки',
        'Деньги на личные расходы',
      ],
      departureTimes: [
        'В 08:40-09:00 из отелей Бельдиби',
        'В 08:45 из отелей Текирова',
        'В 09:00 из отелей Чамьюва',
        'В 09:15 из отелей Кириш',
        'В 09:15 из отелей Гёйнюк',
        'В 09:30 из отелей Кемер',
      ],
      returnTimes: [
        'В 15:00-16:00 из отелей Текирова',
        'В 15:00-16:00 из отелей Чамьюва',
        'В 15:00-16:00 из отелей Кириш',
        'В 15:00-16:00 из отелей Кемер',
        'В 15:00-16:00 из отелей Гёйнюк',
        'В 15:00-16:00 из отелей Бельдиби ',
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
