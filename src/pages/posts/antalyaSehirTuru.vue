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
import imgDesktop from 'assets/posts/antalya-city/antalya-city-1.jpeg';
import imgMobile from 'assets/posts/antalya-city/antalya-city-2.jpeg';
import slider1 from 'assets/posts/antalya-city/antalya-city-3.jpeg';
import slider2 from 'assets/posts/antalya-city/antalya-city-4.jpeg';
import slider3 from 'assets/posts/antalya-city/antalya-city-5.jpeg';
import articleImg from 'assets/posts/antalya-city/antalya-city-6.jpeg';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const breadCrumbsCategory = 'Kemer';
    const breadCrumbsCategoryRoute = '/kemer';
    const breadCrumbsTourLabel = 'Обзорная Экскурсия по Анталии из Кемера';
    const articleTitle = 'Обзорная Экскурсия по Анталии из Кемера';
    const articleSummaryText =
      'Во время Экскурсии "Обзорная Экскурсия по Анталии из Кемера" Вы получите восторг от увиденного и незабываемые эмоций! Анталия это портовый город. Город был основан в 159 году до н.э. грецким царём, которого звали Пергама Атталом. На греческом языке Анталия звучит как Атталия. Ещё Анталию называют самым красивым уголком Турции и туристической столицей. Анталья окружена сосновыми лесами, горами и морем.';
    const sliderImages = [slider1, slider2, slider3];
    const articleFullText =
      'Омывается Анталья водами Средиземного моря. Средиземное море очень чистое и тёплое. В городе много цитрусовых и оливковых деревьев, а так же много красивых экзотических пальм. Летом в Анталии доволе жарко и влажно. Анталья состоит из старого и нового города. Делится на 5 районов: Аксу, Дёшемсалты, Кепез, Коньяалты и Муратпаша. В Анталии хорошо сохранились исторические памятки. Обзорная Экскурсия по Анталии из Кемера удивит даже самых заядлых туристов!';
    const includes = [
      'Трансфер ',
      'Aвтобус с кондиционером',
      'Страховка',
      'Услуга гида',
      'Обед',
    ];
    const excludes = [
      'Любые личные расходы (фотографии, сувениры и т.д.)',
      'Любые напитки во время экскурсии',
      'Прогулка на яхте (по желанию)',
      'Входной билет в Тюнектепе фуникулёр',
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
      tourName: 'Дельфинарий в Кемере',
      currency: 'attach_money',
      oldPrice: 27,
      adultPrice: 25,
      childPrice: 20,
      babyPrice: 0,
    };
    const tourDetails = {
      tourCost:
        "This tour is $25 for adults. It's $20 for childs ages 6-11. It is free for babies 0-5 years old.",
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
      hours: '9 Hours',
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
