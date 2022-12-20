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
import imgDesktop from 'assets/posts/kemer-buggy/kemer-buggy-1.jpg';
import imgMobile from 'assets/posts/kemer-buggy/kemer-buggy-2.jpeg';
import slider1 from 'assets/posts/kemer-buggy/kemer-buggy-3.jpeg';
import slider2 from 'assets/posts/kemer-buggy/kemer-buggy-4.jpeg';
import slider3 from 'assets/posts/kemer-buggy/kemer-buggy-5.jpeg';
import articleImg from 'assets/posts/kemer-buggy/kemer-buggy-6.jpeg';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const breadCrumbsCategory = 'Kemer';
    const breadCrumbsCategoryRoute = '/kemer';
    const breadCrumbsTourLabel = 'Багги Сафари в Кемере';
    const articleTitle = 'Багги Сафари в Кемере';
    const articleSummaryText =
      'Экскурсия Багги сафари в Кемере позволит ощутить драйв от поездки. Вы получите порцию адреналина, массу положительных эмоций, поездка будет захватывающей и интересной. Одно из самых ярких, экстремальных приключений, которые включает в себя красивые достопримечательности, живописною природу вокруг и весёлое время прохождения. Прогулка на багги разнообразит пляжный отдых, подарит заряд, яркие эмоции. Во время экстремального тура, вы ближе познакомитесь с природой. Впечатления и хвойные ароматы вскружат вам голову.';
    const sliderImages = [slider1, slider2, slider3];
    const articleFullText =
      'Экскурсия багги сафари в Кемере проходит вокруг Гейнюка. Природа там поистине божественна. Вы сможете не только получить удовольствие от прогулки на багги, а также сделать изумительные фото. Багги это небольшой лёгкий автомобиль высокой проходимости для езди по бездорожью. Из за того, что в нем нет крыши, поездка становиться более увлекательной. Перед тем как начать прогулку на багги профессиональный гид проведёт инструктаж, расскажет всю необходимую. Вы можете не волноваться о своей безопасности. Во время тура вас будет сопровождать опытный инструктор. Управлять багги легко, вы быстро научитесь. В одном внедороднике размещаются два человека. Продолжительность багги сафари два часа. Будет остановка на 20 минут, что вы смогли полюбоваться природой, вдохнуть чистый воздух, сделать красивые фото на фоне скал. За вашу безопасность отвечают ремни безопасности, которыми вы будете зафиксированы. Экскурсия на багги сафари в Кемере подарит множество незабываемых впечатлений, подарит заряд бодрости и энергии.';
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
      oldPrice: 48,
      adultPrice: 45,
      childPrice: 15,
      babyPrice: 15,
    };
    const tourDetails = {
      tourCost:
        "This tour is $45 for adults. It's $15 for childs ages 7-12. It is free for babies 0-6 years old.",
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
      hours: '3 Hours',
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
