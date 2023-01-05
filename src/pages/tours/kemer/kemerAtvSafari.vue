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
          Мы объединяем приключения и адреналин с сафари на квадроциклах в
          Кемере! Хотите совершить незабываемое сафари на квадроциклах в Кемере
          вокруг Гёйнюка, который является рай Анталии и окружен природой? Если
          ваш ответ да, то будьте готовы восхищаться нашими 4-колесными
          квадроциклами, с которых вы достигнете вершин приключений! Если вы
          один из тех, кто говорит, я не знаю о сафари, но хочу это сделать, вам
          не о чем беспокоиться. Потому что профессиональные гиды предоставят
          вам качественную информацию перед поездкой.
        </p>
      </template>

      <template v-slot:articleFullText>
        <p>
          Гарантируем приятные моменты с нашими сафари-турами по Гейнюку. Мы
          предлагаем сафари на квадроциклах в Кемере с насыщенным безопасным
          снаряжением.Таким образом, гарантируем, что вы насладитесь моментом
          без каких-либо мыслей, которые будут мешать вам в программе тура. На
          экскурсии сафари на квадроциклах отправляемся из Гёйнюка, из Кемера и
          делаем перерыв примерно через 45 минут, чтобы вы могли искупаться в
          чистых водах каньона Гёйнюка. Затем мы продвигаемся еще глубже. Если
          вы хотите, чтобы достичь вершины возбуждения с туром сафари на
          квадроциклах, который займет около 2-х часов и просто наслаждаться
          моментом с профессиональной компанией, тогда Вы должны связаться с
          нами немедленно.
        </p>
      </template>
    </tour-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TourPage from 'components/TourPage.vue';
import imgDesktop from 'assets/tour-images/kemer-atv-safari/desktop/kemer-atv-safari.webp';
import imgMobile from 'assets/tour-images/kemer-atv-safari/mobile/kemer-atv-safari.webp';
import slider1 from 'assets/tour-images/kemer-atv-safari/slider/kemer-atv-safari-1.webp';
import slider2 from 'assets/tour-images/kemer-atv-safari/slider/kemer-atv-safari-2.webp';
import slider3 from 'assets/tour-images/kemer-atv-safari/slider/kemer-atv-safari-3.webp';
import slider4 from 'assets/tour-images/kemer-atv-safari/slider/kemer-atv-safari-4.webp';
import slider5 from 'assets/tour-images/kemer-atv-safari/slider/kemer-atv-safari-5.webp';
import slider6 from 'assets/tour-images/kemer-atv-safari/slider/kemer-atv-safari-6.webp';
import articleImg from 'assets/tour-images/kemer-atv-safari/article/kemer-atv-safari.webp';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const breadCrumbsCategory = 'Kemer';
    const breadCrumbsCategoryRoute = '/antalya/kemer';
    const breadCrumbsTourLabel = 'Квадро Сафари в Кемере';

    const bookingForm = {
      tourName: 'Квадро Сафари в Кемере',
      currency: 'attach_money',
      oldPrice: 28,
      adultPrice: 25,
      childPrice: 15,
      babyPrice: 0,
      adultAge: '+12',
      childAge: '6-11',
      babyAge: '0-5',
      isBabySale: false,
    };

    const articleTitle = 'Квадро Сафари в Кемере';

    const sliderImages = [slider1, slider2, slider3, slider4, slider5, slider6];

    const includes = [
      'Трансфер от и до отеля',
      'Aвтобус с кондиционером',
      'Страховка',
      'Услуга гида',
    ];

    const excludes = [
      'Любые личные расходы (фотографии, сувениры и тд...)',
      'Любые напитки во время экскурсии',
      'Бандана от пыли (по желанию)',
    ];

    const tourDetails = {
      tourCost: `This tour is ${bookingForm.adultPrice} USD for adults. It's ${bookingForm.childPrice} USD for childs ages ${bookingForm.childAge}.`,
      itemsBring: [
        'Фотоаппарат',
        'Воду',
        'Полотенце',
        'Купальник',
        'Спортивную обувь',
        'Солнцезащитные очки',
        'Солнцезащитный крем',
      ],
      departureTimes: [
        'В 08:15 или 13:50 из отелей Текирова',
        'В 08:30 или 14:05 из отелей Чамьюва',
        'В 08:45 или 14:15 из отелей Кириш',
        'В 09:00 или 14:30 из отелей Кемерр',
        'В 09:20 или 14:50 из отелей Гёйнюк',
        'В 09:00 или 14:30 из отелей Бельдиби',
      ],
      returnTimes: ['Через 3 - 3,5 часа после времени трансфера из отелей'],
      distance: [
        'от Кемера - 47 км',
        'от Анталии - 0 км',
        'от Сиде - 73 км',
        'от Алании - 133 км',
      ],

      hours: '3 часа',
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
