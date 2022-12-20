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
import imgDesktop from 'assets/posts/kemer-snoker-dalis/kemer-dalis-1.jpeg';
import imgMobile from 'assets/posts/kemer-snoker-dalis/kemer-dalis-2.jpeg';
import slider1 from 'assets/posts/kemer-snoker-dalis/kemer-dalis-3.jpeg';
import slider2 from 'assets/posts/kemer-snoker-dalis/kemer-dalis-4.jpeg';
import slider3 from 'assets/posts/kemer-snoker-dalis/kemer-dalis-5.jpeg';
import articleImg from 'assets/posts/kemer-snoker-dalis/kemer-dalis-6.jpeg';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const breadCrumbsCategory = 'Kemer';
    const breadCrumbsCategoryRoute = '/kemer';
    const breadCrumbsTourLabel = 'Снорклинг в Кемере';
    const articleTitle = 'Снорклинг в Кемере — 2022 Цена от Организатора';
    const articleSummaryText =
      'Снорклинг в Кемере прекрасна возможность активно провести время. Снорклинг - вид плавания под поверхностью воды с маской и дыхательной трубой и ластами. Доступен для большинства взрослых и детей. Детей с большим интересом погружаться под воду, что бы рассмотреть морских обитателей, ракушки.';
    const sliderImages = [slider1, slider2, slider3];
    const articleFullText =
      'Основой снорклинга является наблюдения за подводним миром в её естественной среде. Средиземное море бирюзового цвета с чистой водой, позволит рассмотреть практически все, изучить поближе подводный мир. Во время экскурсии в Кемере будет пару остановок, полных легенд и сказок. Первая остановка будет в красивой и загадочной бухте "Аквариум ". После полученых эмоции вам предложат вкусный обед на яхте. Вторая остановка будет в Райской бухте. Бухта очень красивая и спокойная. Последней остановкой будет остановка на трёх островах. Вы увидите морских рыбок, пропливающие мимо вас, они поразит своей красотой! Снорклинг в Кемере подарит не забываемые эмоции и фото!';
    const includes = [
      'Трансфер от и до отеля',
      'Aвтобус с кондиционером',
      'Обед',
      'Страховка',
      'Снаряжение для снорклинга (маска с трубкой и плавательные ласты)',
    ];
    const excludes = [
      ' Любые личные расходы (фотографии , сувениры и т.д.);',
      'Напитки',
      'Фото + Видео с экскурсии',
    ];
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
    const bookingForm = {
      tourName: 'Снорклинг в Кемере',
      currency: 'attach_money',
      oldPrice: 23,
      adultPrice: 20,
      childPrice: 15,
      babyPrice: 0,
    };
    const tourDetails = {
      tourCost:
        "This tour is $20 for adults. It's $15 for childs ages 7-12. It is free for babies 0-6 years old.",
      itemsBring:
        'It is recommended to bring a camera, sunscreen, towel, swimsuit, sunglasses when coming to the tour.',
      departureTimes: [
        'Из отелей Бельдибы: 14:00',
        'Из отелей Гейнюк: 14:20',
        'Из отелей Кемера : 14:15',
        'Из отелей Кириш: 14:00',
        'Из отелей Чамюва: 13:45',
      ],
      returnTimes: ['Через 4 часа после времени трансфера из отелей'],
      distance: {
        headerTitle: 'How far is the Antalya regions and Kemer?',
        content: ['-'],
      },
      hours: '8 Hours',
    };
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
