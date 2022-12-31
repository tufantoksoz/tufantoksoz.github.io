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
        <p>
          Хотите увидеть Марсианские красоты? И чтобы это было недалеко от
          Анталии? Тогда вам определённо нужно посетить каньон Тазы из Кемера -
          на реке Кюпрючай во время экскурсии Каньон Тазы из Кемера комбо пакет
          - 4 в 1! Умопомрачительное место Тазы Каньон находится в красивейшем
          природном заповеднике Турции - Кёпрюлю! Здесь же протекает горная река
          " Кёпрючай", где всех любителей активного отдыха ожидает рафтинг и
          зиплайн!
        </p>
      </template>

      <template v-slot:articleFullText>
        <p>
          Почему туристы любят бывать здесь и включают в своей список экскурсий
          - Каньон Тазы и парк Кепрюлю? Национальный заповедник Кёпрюлю поражает
          своей красотой природы, а активный отдых в этом месте добавляет ярких
          впечатлений! Тазы каньон - единственный каньон в мире такого рода! Он
          сохранил свою нетронутую красоту до наших дней, поскольку находился в
          трудно доступных местах,крутых горных скалах. Тазы каньон - это
          огромное ущелье в горах, образованное течением реки Кёпрючай. Здесь
          открывается потрясающий вид со смотровой площадки, где расположены
          огромные камни. Оттуда видно реку, горы в дали и всю долину. Каньон
          Тазы - место, где просто захватывает дух!
        </p>
      </template>
    </tour-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TourPage from 'components/TourPage.vue';
import imgDesktop from 'assets/tour-images/tazi-canyon-four-pack/desktop/tazi-canyon-four-pack.webp';
import imgMobile from 'assets/tour-images/tazi-canyon-four-pack/mobile/tazi-canyon-four-pack.webp';
import slider1 from 'assets/tour-images/tazi-canyon-four-pack/slider/tazi-canyon-four-pack-1.webp';
import slider2 from 'assets/tour-images/tazi-canyon-four-pack/slider/tazi-canyon-four-pack-2.webp';
import slider3 from 'assets/tour-images/tazi-canyon-four-pack/slider/tazi-canyon-four-pack-3.webp';
import slider4 from 'assets/tour-images/tazi-canyon-four-pack/slider/tazi-canyon-four-pack-4.webp';
import slider5 from 'assets/tour-images/tazi-canyon-four-pack/slider/tazi-canyon-four-pack-5.webp';
import slider6 from 'assets/tour-images/tazi-canyon-four-pack/slider/tazi-canyon-four-pack-6.webp';
import slider7 from 'assets/tour-images/tazi-canyon-four-pack/slider/tazi-canyon-four-pack-7.webp';
import articleImg from 'assets/tour-images/tazi-canyon-four-pack/article/tazi-canyon-four-pack.webp';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const breadCrumbsCategory = 'Kemer';
    const breadCrumbsCategoryRoute = '/antalya/kemer';
    const breadCrumbsTourLabel = 'Экскурсия в Тазы каньон';

    const bookingForm = {
      tourName: 'Экскурсия в Каньон Гёйнюк',
      currency: 'attach_money',
      oldPrice: 34,
      adultPrice: 30,
      childPrice: 20,
      babyPrice: 0,
      adultAge: '+12',
      childAge: '6-11',
      babyAge: '0-5',
    };

    const articleTitle =
      'Экскурсия в Тазы каньон - Рафтинг - Зиплайн - Джип Сафари';

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
      'Трансфер от отеля и до отеля',
      'Aвтобус с кондиционером',
      'Каска, спасательный жилет',
      'Обед',
      'Страховка',
      'Услуги гида',
      'рафтинг',
      'Джип сафари',
      'Зиплайн',
      'Каньон Тазы',
      'Каньон Кёпрюлю',
    ];

    const excludes = [
      'Любые личные расходы (фотографии, сувениры и т.д.)',
      'Любые напитки во время экскурсии',
      'Резиновой обуви для рафтинга',
      'Рафтинг на двух местной байдарки',
      'Гидрокостюм в Гейнюк Каньоне (по желанию)',
      'Гидрокостюм',
    ];

    const tourDetails = {
      tourCost: `This tour is ${bookingForm.adultPrice} USD for adults. It's ${bookingForm.childPrice} USD for childs ages ${bookingForm.childAge}. It is free for babies ${bookingForm.babyAge} years old.`,
      itemsBring: [
        'Фотоаппарат',
        'Полотенце',
        'Купальник',
        'Крем от загара',
        'Солнцезащитные очки',
        ' Деньги на личные расходы',
      ],
      departureTimes: [
        'В 07:00 из отелей Текирова',
        'В 07:15 из отелей Чамьюва',
        'В 07:30 из отелей Кириш',
        'В 07:45 из отелей Кемер',
        'В 08:00 из отелей Гёйнюк',
        'В 08:00 из отелей Бельдиби',
        'В 09:15 из отелей Коньяалты',
        'В 09:30 из отелей Калеичи',
        'В 09:40 из отелей Лара',
        'В 09:45 из отелей Кунду',
      ],
      returnTimes: ['18:00'],
      distance: [
        'от Кемера - 150 KM',
        'от Анталии - 105 KM',
        'от Сиде - 82 KM',
        'от Алании - 142 KM',
      ],

      hours: '9-10 часов',
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
