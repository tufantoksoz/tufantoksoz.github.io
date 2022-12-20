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
import imgDesktop from 'assets/posts/olimpos-yanartas-ulupinar/olimpos-ulupinar-yanartas-1.webp';
import imgMobile from 'assets/posts/olimpos-yanartas-ulupinar/olimpos-ulupinar-yanartas-2.webp';
import slider1 from 'assets/posts/olimpos-yanartas-ulupinar/olimpos-ulupinar-yanartas-3.webp';
import slider2 from 'assets/posts/olimpos-yanartas-ulupinar/olimpos-ulupinar-yanartas-4.webp';
import slider3 from 'assets/posts/olimpos-yanartas-ulupinar/olimpos-ulupinar-yanartas-5.webp';
import articleImg from 'assets/posts/olimpos-yanartas-ulupinar/olimpos-ulupinar-yanartas-6.webp';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const breadCrumbsCategory = 'Kemer';
    const breadCrumbsCategoryRoute = '/kemer';
    const breadCrumbsTourLabel =
      'Экскурсия в Олимпос-Химера-Улупинар из Кемера';
    const articleTitle = 'Экскурсия в Олимпос-Химера-Улупинар из Кемера';
    const articleSummaryText =
      'Экскурсия в Олимпос-Химера-Улупинар из Кемера отличная возможность увидеть всю красоту окрестностей, насладиться прекрасными видами. Это интересная и экстремальная экскурсия, ведь проходить она будет на джипах! За рулём будет профессиональный и опытный водитель. Поэтому экскурсия в Олимпос-Химера-Улупинар будет не только интересной но и безопасной.';
    const sliderImages = [slider1, slider2, slider3];
    const articleFullText =
      'Олимпос - расположен в Национальном парке Олимпос-Бейдаглары, в 80 км к западу от Антальи, в месте впадения в море реки Олимпос. Древний Олимпос - одна из главных достопримечательностей Кемера. Город Олимпос возник примерно в 3 веке до н.э. в 16 км от горы Олимпос ( сейчас Тахталы). Олимпос переводиться как гора. На сегодняшний день сохранилась часть зрительских мест и вход в театр. В византийский период театр использовался как православная базилика под открытым небом. Сейчас Олимпос это излюбленое место свободного отдыха молодых людей, семей с детьми. Это местность с неповторимой красотой, с чистейшой водой. Ещё одна особенность - морские черепахи, которые в летний период откладывают в песок яйца. Не исключено, что вам повезёт увидеть их в живую. Пляж Олимпос это уникальный пляж, с одной стороны горы, с другой стороны море с длиной береговой линией. Химера, ещё её называют гора Янарташ, что в переводе означает  "горящий камень". Расположена не далеко от посёлка Чиралы.';
    const includes = [
      'Трансфер на джипах от и до отеля',
      'Ужин',
      'Страховка',
      'Услуги гида',
      'Входной билет на гору Химера',
    ];
    const excludes = [
      'Античный город Олимпос за дополнительную плату (по желанию)',
      'Любые личные расходы (фотографии, сувениры и т.д.)',
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
      hours: '6 Hours',
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
