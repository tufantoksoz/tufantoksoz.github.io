<template>
  <div>
    <tour-page
      :imgDesktop="imgDesktop"
      :imgMobile="imgMobile"
      :breadCrumbsCategory="breadCrumbsCategory"
      :breadCrumbsCategoryRoute="breadCrumbsCategoryRoute"
      :breadCrumbsTourLabel="breadCrumbsTourLabel"
      :sliderImages="sliderImages"
      :includes="includes"
      :excludes="excludes"
      :tourDetails="tourDetails"
      :faq="faq"
      :bookingForm="bookingForm"
    >
      <template v-slot:articleSummary>
        <h1 class="text-red text-h4">Экскурсия в Дельфинарий в Кемере</h1>

        <p>
          Добро пожаловать в Дельфинарий в Кемере - Шоу Дельфинов в Кемере.
          Волшебная атмосфера мира удивительных дельфинов и милых ластоногих
          подарит незабываемые впечатления Вам и Вашим близким в увлекательном
          шоу дельфинов, которое затронет сердца и души каждого. Погрузитесь под
          воду и пообщайтесь с самыми милыми существами на Земле - дельфинами.
        </p>
      </template>

      <template v-slot:articleFullText>
        <p>
          Ваш ребенок мечтает стать супер-героем? Познакомьте его с непобедимой
          командой героев на шоу с дельфинами и морскими котиками "База морских
          супер-героев". Они поражают своими способностями: это четырехметровые
          прыжки в высоту, тройные сальто, торнадо, умение маскироваться среди
          людей и работать в команде. А всем управляет искусственный интеллект,
          он и расскажет, в чем секрет настоящих героев! Это яркое и динамичное
          представление понравится и детям, и взрослым!
        </p>
      </template>
    </tour-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TourPage from 'components/TourPage.vue';
import imgDesktop from 'assets/tour-images/dolphin-tour/desktop/dolphin-tour.webp';
import imgMobile from 'assets/tour-images/dolphin-tour/mobile/dolphin-tour.webp';
import slider1 from 'assets/tour-images/dolphin-tour/slider/dolphin-tour-1.webp';
import slider2 from 'assets/tour-images/dolphin-tour/slider/dolphin-tour-2.webp';
import slider3 from 'assets/tour-images/dolphin-tour/slider/dolphin-tour-3.webp';
import slider4 from 'assets/tour-images/dolphin-tour/slider/dolphin-tour-4.webp';
import slider5 from 'assets/tour-images/dolphin-tour/slider/dolphin-tour-5.webp';
import slider6 from 'assets/tour-images/dolphin-tour/slider/dolphin-tour-6.webp';
import articleImg from 'assets/tour-images/dolphin-tour/article/dolphin-tour.webp';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const breadCrumbsCategory = 'Kemer';
    const breadCrumbsCategoryRoute = '/antalya/kemer';
    const breadCrumbsTourLabel = 'Шоу Дельфинов в Кемере';

    const bookingForm = {
      tourName: 'Шоу Дельфинов в Кемере',
      currency: 'attach_money',
      oldPrice: 34,
      adultPrice: 30,
      childPrice: 30,
      babyPrice: 0,
      adultAge: '+12',
      childAge: '3-12',
      babyAge: '0-2',
    };

    const sliderImages = [slider1, slider2, slider3, slider4, slider5, slider6];

    const includes = [
      'Трансфер от и до отеля',
      'Автобус с кондиционером',
      'Входной билет в шоу дельфинов ',
    ];

    const excludes = [
      'Любые личные расходы (фотографии, сувениры и т.д.)',
      'Любые напитки во время экскурсии ',
    ];

    const tourDetails = {
      tourCost: `This tour is ${bookingForm.adultPrice} USD for adults. It's ${bookingForm.childPrice} USD for childs ages ${bookingForm.childAge}. It is free for babies ${bookingForm.babyAge} years old.`,
      itemsBring: ['Фотоаппарат', ' Деньги на личные расходы'],
      departureTimes: [
        'В 16:05 из отелей Бельдиби',
        'В 16:25 из отелей Чамьюва',
        'В 16:30 из отелей Гёйнюк',
        'В 16:30 из отелей Текирова',
        'В 16:40 из отелей Кириш',
        'В 16:50 из отелей Кемер',
        'Точное время будет написано в вашем ваучере',
      ],
      returnTimes: [
        'В 18:00-18:30 из отелей Бельдибы',
        'В 18:00-18:30 из отелей Гейнюк ',
        'В 18:00-18:30 из отелей Кемер',
        'В 18:00-18:30 из отелей Кириш',
        'В 18:00-18:30 из отелей Чамюва',
        'В 18:00-18:30 из отелей Текирова',
      ],
      distance: [
        'от Кемера - 47 км',
        'от Анталии - 0 км',
        'от Сиде - 73 км',
        'от Алании - 133 км',
      ],

      hours: '4-5 часов',
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
