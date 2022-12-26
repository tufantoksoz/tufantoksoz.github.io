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
import imgDesktop from 'assets/tour-images/tahtali-jeep-safari/desktop/tahtali-jeep-safari.webp';
import imgMobile from 'assets/tour-images/tahtali-jeep-safari/mobile/tahtali-jeep-safari.webp';
import slider1 from 'assets/tour-images/tahtali-jeep-safari/slider/tahtali-jeep-safari-1.webp';
import slider2 from 'assets/tour-images/tahtali-jeep-safari/slider/tahtali-jeep-safari-2.webp';
import slider3 from 'assets/tour-images/tahtali-jeep-safari/slider/tahtali-jeep-safari-3.webp';
import slider4 from 'assets/tour-images/tahtali-jeep-safari/slider/tahtali-jeep-safari-4.webp';
import slider5 from 'assets/tour-images/tahtali-jeep-safari/slider/tahtali-jeep-safari-5.webp';
import slider6 from 'assets/tour-images/tahtali-jeep-safari/slider/tahtali-jeep-safari-6.webp';
import slider7 from 'assets/tour-images/tahtali-jeep-safari/slider/tahtali-jeep-safari-7.webp';
import slider8 from 'assets/tour-images/tahtali-jeep-safari/slider/tahtali-jeep-safari-8.webp';
import slider9 from 'assets/tour-images/tahtali-jeep-safari/slider/tahtali-jeep-safari-9.webp';
import articleImg from 'assets/tour-images/tahtali-jeep-safari/article/tahtali-jeep-safari.webp';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const breadCrumbsCategory = 'Kemer';
    const breadCrumbsCategoryRoute = '/antalya/kemer';
    const breadCrumbsTourLabel = 'Джип Сафари на Гору Тахталы & Бейдаглары';

    const bookingForm = {
      tourName: 'Джип Сафари на Гору Тахталы & Бейдаглары',
      currency: 'attach_money',
      oldPrice: 29,
      adultPrice: 25,
      childPrice: 20,
      babyPrice: 10,
    };

    const articleTitle = 'Экскурсия на Гору Тахталы на Джипах на Высоту 2200 м';

    const articleSummaryText =
      'Тахталы - Эта самая высокая гора на Анталийском побережье. Конечно, поход на 2365 метров лишь с большой натяжкой можно назвать восхождением, но с вершины Тахталы открывается такой шикарный вид, что чувствуешь себя настоящим покорителем горы-обители богов.';

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
    ];

    const articleFullText =
      'Гора Тахталы (или Тахталыдаг, или Олимпос) по-турецки называется и пишется вот так: Tahtalı Dağları. Слово Tahtalı переводится как «дощатые», а «Dağları» – «горы». Совершенно непонятно, почему большинство источников переводят название горы именно так. Ведь есть ещё одна версия происхождения названия – от турецкого «taht», что в переводе – «трон». Олимпос – престол богов, вот это в точку! Панорамные виды с высоты 2365 метров на море, горы и долины точно бы приглянулись даже самым привередливым богам. Джип сафари на гору Тахталы подарит вам невероятные, потрясающие впечатления. Это адреналиновая экскурсия в Кемере с приключением. Гора Тахталы, одна из уникальных гор в мире, по-прежнему предлагает вам свою красоту. В этом туре вы можете делать панорамные снимки в сопровождении пейзажей и побывать в местах, не тронутых человеческими ногами.';

    const includes = [
      'Трансфер на джипах от и до отеля',
      'Обед (куриный шашлык или запеченная форель и салат)',
      'Страховка',
      'Услуги гида',
    ];

    const excludes = [
      'Любые личные расходы (фотографии , сувениры и т.д.)',
      'Любые напитки во время экскурсии',
      'Входной билет в пещеру (2$)',
    ];

    const tourDetails = {
      tourCost:
        "This tour is $25 for adults. It's $20 for childs ages 6-11. It is $10 for babies 0-5 years old.",
      itemsBring:
        'Фотоаппарат, Полотенце, купальник, Крем от загара, солнцезащитные очки, Деньги на личные расходы, Спортивную обувь',
      departureTimes: [
        'Из отелей Бельдибы: 08:00',
        'Из отелей Текирова: 08:10',
        'Из отелей Чамюва: 08:30',
        'Из отелей Гейнюк: 08:30',
        'Из отелей Кемер : 08:45',
        'Из отелей Кириш: 08:45',
      ],
      returnTimes: [
        'В 15:30-16:00 из отелей Текирова',
        'В 15:30-16:00 из отелей Чамьюва',
        'В 15:30-16:00 из отелей Кириш',
        'В 15:30-16:00 из отелей Кемер',
        'В 15:30-16:00 из отелей Гёйнюк',
        'В 15:30-16:00 из отелей Бельдиби ',
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
