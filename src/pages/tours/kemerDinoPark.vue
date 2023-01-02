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
      :articleImg="articleImg"
      :includes="includes"
      :excludes="excludes"
      :tourDetails="tourDetails"
      :faq="faq"
      :bookingForm="bookingForm"
    >
      <template v-slot:articleSummary>
        <p></p>
      </template>

      <template v-slot:articleFullText>
        <p>
          Добро пожаловать в таинственный мир Парк динозавров в Кемере - это
          фантастические развлечения для всей семьи. Динопарк в Кемере
          расположен в посёлке Гёйнюк, который является одной из самых красивых
          туристических достопримечательностей Кемера. ДиноПарк в Кемере - это
          самый большой парк не только в Турции, и в Европе тоже. Его общая
          площадь составляет 30 000 квадратных метров. Динопарк в Кемере
          открылся в 2012 году. Благодаря тому, что он построен в лесу, палящие
          солнце вам не помешают весело провести время. В парке находится около
          35 доисторических животных в натуральную величину. У каждого есть
          табличка с описанием, чем питался, где обитал, когда вымер. Парк
          Динозавров в Кемере - это мега крутой парк. Такое ощущение, что попали
          в джунгли, в Юрский период. Со всех сторон рычание, крики. Подходишь к
          динозавру и он оживает, дух захватывает. Есть площадка с раскопками,
          динозавры-качели. На территории несколько кафе, магазины с сувенирами
          и 2 бассейна, контактный зоопарк, батуты, катание на пони, и очень
          много динозавров.
        </p>
      </template>
    </tour-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TourPage from 'components/TourPage.vue';
import imgDesktop from 'assets/tour-images/dino-park/desktop/kemer-dino-park.webp';
import imgMobile from 'assets/tour-images/dino-park/mobile/kemer-dino-park.webp';
import slider1 from 'assets/tour-images/dino-park/slider/kemer-dino-park-1.webp';
import slider2 from 'assets/tour-images/dino-park/slider/kemer-dino-park-2.webp';
import slider3 from 'assets/tour-images/dino-park/slider/kemer-dino-park-3.webp';
import slider4 from 'assets/tour-images/dino-park/slider/kemer-dino-park-4.webp';
import slider5 from 'assets/tour-images/dino-park/slider/kemer-dino-park-5.webp';
import slider6 from 'assets/tour-images/dino-park/slider/kemer-dino-park-6.webp';
import slider7 from 'assets/tour-images/dino-park/slider/kemer-dino-park-7.webp';
import articleImg from 'assets/tour-images/dino-park/article/kemer-dino-park.webp';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const breadCrumbsCategory = 'Kemer';
    const breadCrumbsCategoryRoute = '/antalya/kemer';
    const breadCrumbsTourLabel = 'Экскурсия в Динопарк в Кемере';

    const bookingForm = {
      tourName: 'Экскурсия в Динопарк в Кемере',
      currency: 'attach_money',
      oldPrice: 34,
      adultPrice: 30,
      childPrice: 30,
      babyPrice: 0,
      adultAge: '+13',
      childAge: '3-12',
      babyAge: '0-2',
    };

    const articleTitle = 'Экскурсия в Динопарк в Кемере';

    const sliderImages = [
      slider1,
      slider2,
      slider3,
      slider4,
      slider5,
      slider6,
      slider7,
    ];

    const includes = [
      'Трансфер',
      'Страховка',
      'Входной билет в парк динозавров',
      'Батут',
      'Туннель страха для взрослых',
      'Деятельность бассейна',
      'Парк развлечений',
      'Поездка на динозавре',
      'Ископаемые раскопки',
    ];

    const excludes = [
      'Личные расходы (фото, сувениры и т.д.)',
      '7D Cinema',
      'Мини клуб',
      'Верховая езда на пони',
    ];

    const tourDetails = {
      tourCost: `This tour is ${bookingForm.adultPrice} USD for adults. It's ${bookingForm.childPrice} USD for childs ages ${bookingForm.childAge}. It is free for babies ${bookingForm.babyAge} years old.`,
      itemsBring: [
        'Фотоаппарат',
        'Крем от загара',
        'Солнцезащитные очки',
        'Деньги на личные расходы',
      ],
      departureTimes: [
        'В 10:00 - 14:00 из отелей Бельдиби',
        'В 10:05 - 13:45 из отелей Гёйнюк',
        'В 09:50 - 13:30 из отелей Кемер',
        'В 09:40 - 13:20 из отелей Кириш',
        'В 09:30 - 13:10 из отелей Чамьюва',
        'В 09:10 - 13:00 из отелей Текирова',
      ],
      returnTimes: [],
      distance: [
        'от Кемера - 47 км',
        'от Анталии - 0 км',
        'от Сиде - 73 км',
        'от Алании - 133 км',
      ],

      hours: '3 часа',
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
      sliderImages,
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
