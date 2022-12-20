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
import imgDesktop from 'assets/posts/kemer-dalis/kemer-dalis-1.jpeg';
import imgMobile from 'assets/posts/kemer-dalis/kemer-dalis-2.jpeg';
import slider1 from 'assets/posts/kemer-dalis/kemer-dalis-3.jpeg';
import slider2 from 'assets/posts/kemer-dalis/kemer-dalis-4.jpeg';
import slider3 from 'assets/posts/kemer-dalis/kemer-dalis-5.jpeg';
import articleImg from 'assets/posts/kemer-dalis/kemer-dalis-6.jpeg';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const breadCrumbsCategory = 'Kemer';
    const breadCrumbsCategoryRoute = '/kemer';
    const breadCrumbsTourLabel = 'Дайвинг в Кемере';
    const articleTitle = 'Дайвинг в Кемере — Цена 2022 от Организатора';
    const articleSummaryText =
      'Дайвинг в Кемере открывает перед вами потрясающую возможность исследовать и насладиться подводным миром. Подводный мир Средиземного моря, удивит вас своей флорой и фауной. На дне моря вы можете увидеть обломки затонувших кораблей, исторические достопримечательности, а так же разные виды рыбы и других морских  обитателей.';
    const sliderImages = [slider1, slider2, slider3];
    const articleFullText =
      'Дайвинг это подводное плаванье со специальным снаряжением. Поэтому перед погружением опытный инструктор проведёт инструктаж. В Турции большое количество мест, где дайвингом  могут заниматься как новички так и профессионалы. Дайвинг это не только развлечение, но и один из видов спорта. Для профессионалов дайвинг в Кемере предоставляет возможность погрузиться на 20-30 м и увидеть останки корабля Первой Мировой войны. Корабль хорошо сохранился и профессиональные дайверы  могут заплыть во внутрь палуб. Для новичков отличная условия погружение, прозрачная и тёплая  вода, песчаное дно без быстрых течений. Погружение новичков будет  происходить исключительно с инструктором, ведь ваша безопасность самое главное.';
    const includes = [
      'Трансфер от и до отеля',
      'Aвтобус с кондиционером',
      'Обед',
      'Страховка',
      'Услуги гида',
      'Снаряжение для дайвинга',
    ];
    const excludes = [
      'Любые личные расходы (фотографии , сувениры и тд...)',
      'Любые напитки во время экскурсии',
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
      tourName: 'Дайвинг в Кемере',
      currency: 'attach_money',
      oldPrice: 26,
      adultPrice: 23,
      childPrice: 15,
      babyPrice: 0,
    };
    const tourDetails = {
      tourCost:
        "This tour is $23 for adults. It's $15 for childs ages 6-11. It is free for babies 0-5 years old.",
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
