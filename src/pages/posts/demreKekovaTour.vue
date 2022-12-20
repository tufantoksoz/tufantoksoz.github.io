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
import imgDesktop from 'assets/posts/demre-kekova/demre-kekova-1.jpg';
import imgMobile from 'assets/posts/demre-kekova/demre-kekova-2.jpeg';
import slider1 from 'assets/posts/demre-kekova/demre-kekova-3.jpeg';
import slider2 from 'assets/posts/demre-kekova/demre-kekova-4.jpeg';
import slider3 from 'assets/posts/demre-kekova/demre-kekova-5.jpeg';
import articleImg from 'assets/posts/demre-kekova/demre-kekova-6.jpeg';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const breadCrumbsCategory = 'Kemer';
    const breadCrumbsCategoryRoute = '/kemer';
    const breadCrumbsTourLabel = 'Экскурсия в Демре Мира Кекова из Кемера';
    const articleTitle = 'Экскурсия в Демре Мира Кекова из Кемера';
    const articleSummaryText =
      'Экскурсия в Демре Мира Кекова из Кемера - Одна из самых интересных экскурсий. Посетив эту экскурсию Вы увидите ликийские гробницы, античные руины г.Мира, побываете в Храме св.Николая. Увидите затонувший город, а также поплаваете на стыке двух морей ( Средиземное и Егейское).';
    const sliderImages = [slider1, slider2, slider3];
    const articleFullText =
      'Турецкий город Мира - античное место с не простой судьбой. Является древний столицей ликийского государства. Знаменитым на весь мир делает его тот факт, что именно в этом городе жил и работал самый известный угодник в мире - Святой Николай. Также у Вас будет возможность побывать в одном из самых важных христианских святынь - Храме св. Николая. Церковь была построена уже после смерти епископа, в храме хранится саркофаг, в котором он изначально был погребен. Отдельного внимания заслуживают ликийские гробницы. Это уникальное зрелище, они высеченя прямо в скалах, датируются эти гробницы 4 веком до н.э. Экскурсия в Демре Мира Кекова из Кемера запоминающая экскурсия, которая продлится весь день, а воспоминания останутся на всю жизнь!';
    const includes = [
      'Трансфер от и до отеля',
      'Aвтобус с кондиционером',
      'Обед',
      'Услуги гида',
      'Входной билет в Миру',
      'Прогулка на яхте',
    ];
    const excludes = [
      'Любые личные расходы (фотографии, сувениры и т.д.)',
      'Любые напитки во время экскурсии',
      'Входной билет в Церковь Николая угодника (по желанию)',
      'Завтрак',
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
      hours: '10 Hours',
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
