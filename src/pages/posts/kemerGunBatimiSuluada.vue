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
import imgDesktop from 'assets/posts/suluada-gunbatimi/suluada-gunbatimi-1.jpeg';
import imgMobile from 'assets/posts/suluada-gunbatimi/suluada-gunbatimi-2.jpeg';
import slider1 from 'assets/posts/suluada-gunbatimi/suluada-gunbatimi-3.jpeg';
import slider2 from 'assets/posts/suluada-gunbatimi/suluada-gunbatimi-4.jpeg';
import slider3 from 'assets/posts/suluada-gunbatimi/suluada-gunbatimi-5.jpeg';
import articleImg from 'assets/posts/suluada-gunbatimi/suluada-gunbatimi-6.jpeg';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const breadCrumbsCategory = 'Kemer';
    const breadCrumbsCategoryRoute = '/kemer';
    const breadCrumbsTourLabel =
      'Экскурсия на остров Сулуада на Закате из Кемера';
    const articleTitle = 'Экскурсия на остров Сулуада на Закате из Кемера';
    const articleSummaryText =
      'Сулуада  переводится как " водныйне остров". Это остров вулканического происхождения  со сквознными гротами и скалами. Вода вокруг острова настолько прозрачная и имеет бирюзовый цвет, что остров получил второе название "Турецкие Мальдивы ".';
    const sliderImages = [slider1, slider2, slider3];
    const articleFullText =
      'Остров Сулуада находится в самой западной точке залива Анталии. Этот остров узкий и длинный. На острове потрясающая природа, практически необитаемый скалистый остров. Так же Вы можете  встретить - краснокнижных черепах Каретта-каретта! Это не забываемое зрелище! Морское путешествие на остров Сулуада на Закате из Кемера  начинается в порту Адрасан. Адрасан - это один из самых живописных уголков южной Турции. Чавушкёй второе название Адрасана в древнее времена был одной из важных торговых бухт ликийской цивилизации. Сегодня сюда стремятся туристы, чтобы оценить всю красоту природы. Ещё одна возможность увидеть остров в другом цвете. Экскурсия на остров Сулуада из Кемера на закате позволит встретить закат на борту яхты. Взглянуть на чистоту вод Средиземного моря под лучами заката солнца. Это зрелище не оставит вас равнодушными. Во время прогулки на яхте будут остановки для купания, вкусный ужин, угощения турецким чаем со сладостями! Любителям красивых фото предоставляется возможность сделать необычные кадры. Скальная часть берега очень красивая, а вода настолько прозрачная, что можно увидеть подводный мир.';
    const includes = [
      'Трансфер от и до отеля',
      'Aвтобус с кондиционером',
      'Ужин (Рыба дорадо или Сибас, макароны, салат)',
      'Чай',
      'Услуга гида',
      'Прогулка на яхте',
    ];
    const excludes = [
      'Любые личные расходы (фотографии, сувениры и т.д.)',
      'Любые напитки во время экскурсии( кроме чая)',
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
      tourName: 'Экскурсия на остров Сулуада на Закате из Кемера',
      currency: 'attach_money',
      oldPrice: 28,
      adultPrice: 25,
      childPrice: 20,
      babyPrice: 0,
    };
    const tourDetails = {
      tourCost:
        "This tour is $25 for adults. It's $20 for childs ages 4-11. It is free for babies 0-3 years old.",
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
