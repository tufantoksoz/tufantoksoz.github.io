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
import imgDesktop from 'assets/posts/ulupinar-balik-tutma/ulupinar-balik-tutma-3.jpeg';
import imgMobile from 'assets/posts/ulupinar-balik-tutma/ulupinar-balik-tutma-2.jpeg';
import slider1 from 'assets/posts/ulupinar-balik-tutma/ulupinar-balik-tutma-3.jpeg';
import slider2 from 'assets/posts/ulupinar-balik-tutma/ulupinar-balik-tutma-4.jpeg';
import slider3 from 'assets/posts/ulupinar-balik-tutma/ulupinar-balik-tutma-5.jpeg';
import articleImg from 'assets/posts/ulupinar-balik-tutma/ulupinar-balik-tutma-6.jpeg';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const breadCrumbsCategory = 'Kemer';
    const breadCrumbsCategoryRoute = '/kemer';
    const breadCrumbsTourLabel = 'Рыбалка в Улупинаре — Цена 2022';
    const articleTitle = 'Рыбалка в Улупинаре — Цена 2022';
    const articleSummaryText =
      'Рыбалка в Улупинаре проходит в чудесном месте. Форелевая ферма Улупинар расположена в живописной долине Тавр. Этот уютный курортный городок расположен на склоне Олимпа, на берегу реки Улупинар, что в переводе означает "величественный источник". Река очень чистая, но холодно. На территории фермы, в специально оборудованных прудах, разводят форель. При входе на ферму выдают удочки и наживку. Массового клёва не будет, но одну две рыбки обязательно поймаете. Часто в процессе рыбалки проводят своеобразные соревнования, чтобы определить лучшего рыбака.';
    const sliderImages = [slider1, slider2, slider3];
    const articleFullText =
      'На территории фермы всегда прохладно, повсюду слышен шум воды, а от больших деревьев образуется тень. Больших водопадов тут нет, но мелодичный маленькие порожки встречаются прямо возле обеденного стола. Отдых в Улупинаре не ограничивается рыбалкой. Туристы могут рассмотреть природу, дышать чистым, свежим воздухом, лежа на деревянном топчане. Гулять под деревьями, делать красивые фото. Особенно тут хорошо летом. В Улупинаре приятная прохлада. Горы, водопады, рыба, утки, каждый столик на своей отдельной площадке, вместо стульев мягкие подушки. После рыбалки вас ожидает вкусный с сытный обед. Вам подадут самую вкусную рыбу, приготовленую по собственному уникальному рецепту. Пока готовят рыбу вам подадут салат и гарнир. Также в стоимость входят алкогольные и безалкогольные напитки ( вода, чай, кофе, пиво, вино). Ещё вас удивит приготовления молодого барашка на вертиле. Сочное свежее мясо животного не менее вкусное, чем блюдо из речной форели. Экскурсия Пикник и Рыбалка в Улупинаре прекрасная альтернатива пляжному отдыху, подойдёт для спокойного времяпровождение любителям природы, особенно ценителям рыбалки.';
    const includes = [
      'Трансфер от и до отеля',
      'Обед: Форель, мясо на вертеле и салат.',
      'Напитки (безлимитные) ( пиво, вино, кола, фанта, чай, кофе, вода)',
      'Страховка ',
    ];
    const excludes = [
      'Любые личные расходы ( фотографии, сувениры и т.д.)',
      'Еда и напитки не входящие в меню ( креветки, омары, виски и т.д.)',
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
      childPrice: 15,
      babyPrice: 0,
    };
    const tourDetails = {
      tourCost:
        "This tour is $25 for adults. It's $15 for childs ages 7-12. It is free for babies 0-6 years old.",
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
