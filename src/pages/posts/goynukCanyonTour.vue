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
import imgDesktop from 'assets/posts/goynuk-canyon/desktop/goynuk-canyon-image.webp';
import imgMobile from 'assets/posts/goynuk-canyon/mobile/goynuk-canyon.webp';
import slider1 from 'assets/posts/goynuk-canyon/slider/goynuk-canyon-1.webp';
import slider2 from 'assets/posts/goynuk-canyon/slider/goynuk-canyon-2.webp';
import slider3 from 'assets/posts/goynuk-canyon/slider/goynuk-canyon-3.webp';
import articleImg from 'assets/posts/goynuk-canyon/article/goynuk-canyon.webp';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const breadCrumbsCategory = 'Kemer';
    const breadCrumbsCategoryRoute = '/kemer';
    const breadCrumbsTourLabel = 'Экскурсия в Каньон Гейнюк';
    const articleTitle = 'Экскурсия в Каньон Гейнюк';
    const articleSummaryText =
      'Экскурсия в Каньон Гейнюк цена 2022. Гейнюк находится в 7 км от Кемера. Это курортный посёлок. Горы почти вплотную подходят к морю и образовуют ущелья и скалы. Гейнюк переводится как " плодородия долина в месте, где небо соединили с морем". Через Гейнюк в Кемере проходит река, образующая красивый и удивительный каньон.';
    const sliderImages = [slider1, slider2, slider3];
    const articleFullText =
      'Каньон Гейнюк является известным природным памятником. Каньон Гейнюк это ущелье шириной около 6 м, высота каньна до 350м, протяжность составляет 14 км. Стены сложены из разноцветной скальной породы. Цвет стен очень разнообразный: белый, чёрный, оранжевой и зелёный. Каньон Гейнюк это удивительное место, где можно гулять часами. Вода в реке прохладная, что позволит освежиться в жаркую погоду. Вода имеет  очень красивый цвет, необычно голубой. Каньон часть национального парка. Гейнюк каньон доволи большой по своим размерам для Малой Азии и Европы. Красота каньона поражает. В нем есть загадочные пещеры и гроты, прозрачные озера, валуны, отпалиррваные водой до зеркального блеска, разноцветные скалы. В каньоне можно прогуляться по дороге рядом с рекой, рассматривая восхитительные виды вокруг. Если хотите разнообразить свой отдых у вас есть замечательная возможность. Пройти не лёгкий путь по каньону. Температура воды +15 +18, отлично взбодрит в жаркую погоду. Нужно идти пешком, плыть, ползти, преодолевать пороги. Выброс адреналина вам обеспечен. Экскурсия в каньон Гейнюк это отличное экскурсия, где можно прогуляться, насладится природой! Природа в Гейнюк каньон такая же как и тысячи лет назад!';
    const includes = [
      'Трансфер от и до отеля',
      'Страховка',
      'Lunch',
      'Входной билет в Каньон Гейнюк',
    ];
    const excludes = [
      'Любые личные расходы (фотографии , сувениры и тд...)',
      'Любые напитки во время экскурсии',
      'Zipline',
      'Гидрокостюм в Гейнюк Каньоне (по желанию)',
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
      tourName: 'Экскурсия в Каньон Гейнюк',
      currency: 'attach_money',
      oldPrice: 18,
      adultPrice: 13,
      childPrice: 13,
      babyPrice: 0,
    };
    const tourDetails = {
      tourCost:
        "This tour is $13 for adults. It's $13 for childs ages 6-12. It is free for babies 0-5 years old.",
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
        headerTitle: 'How far is the Antalya regions and Göynük?',
        content: ['-'],
      },
      hours: '4 Hours',
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
