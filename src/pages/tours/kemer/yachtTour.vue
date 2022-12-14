<template>
  <div>
    <tour-page
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
        <h1 class="text-red text-h4">Прогулка на Яхте в Кемере</h1>
        <p>
          Экскурсия прогулка на яхте в Кемере начинается каждый день в 10:00 от
          пристани кемера продолжается до 16:30 вечера. Во время нашего тура
          прогулка на яхте в Кемере Вы сначала сможете увидеть пиратскую пещеру.
          Затем предоставляется перерыв для купания в трех удивительных местах:
          залив Древний Фазелис, залив Алакасу и залив Кириш. После обеда мы
          стремимся подарить вам максимум удовольствия от пенной дискотеки,
          сделав так, чтобы у вас был хороший день с музыкой и различными
          анимациями.
        </p>
      </template>

      <template v-slot:articleFullText>
        <p>
          Первой остановкой нашего маршрута прогулка на яхте в Кемере будет
          бухта Фазелис, который объединяет природную красоту и древние времена.
          В Фазелисе, который заставит вас полюбить себя с первого взгляда своей
          невероятной красотой, тонкие белые берега, параллельные лесам,
          встречаются с чистой водой. Вы можете освежить свое тело, купаясь в
          чистых водах Фазелиса, где мы проведем полтора часа. Потом позагораем
          на берегу, совершим спокойную прогулку по заливу на природе и посетим
          древние руины. Выбор всегда за вами; Однако мы рекомендуем сделать
          много фотографий, чем бы вы ни занимались!
        </p>
      </template>
    </tour-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TourPage from 'components/TourPage.vue';
import slider1 from 'assets/tour-images/kemer-yacht-tour/slider/kemer-yacht-tour-1.webp';
import slider2 from 'assets/tour-images/kemer-yacht-tour/slider/kemer-yacht-tour-2.webp';
import slider3 from 'assets/tour-images/kemer-yacht-tour/slider/kemer-yacht-tour-3.webp';
import slider4 from 'assets/tour-images/kemer-yacht-tour/slider/kemer-yacht-tour-4.webp';
import slider5 from 'assets/tour-images/kemer-yacht-tour/slider/kemer-yacht-tour-5.webp';
import slider6 from 'assets/tour-images/kemer-yacht-tour/slider/kemer-yacht-tour-6.webp';
import slider7 from 'assets/tour-images/kemer-yacht-tour/slider/kemer-yacht-tour-7.webp';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const breadCrumbsCategory = 'Kemer';
    const breadCrumbsCategoryRoute = '/antalya/kemer';
    const breadCrumbsTourLabel = 'Прогулка на Яхте в Кемере';

    const bookingForm = {
      tourName: 'Прогулка на Яхте в Кемере',
      currency: 'attach_money',
      oldPrice: 18,
      adultPrice: 15,
      childPrice: 10,
      babyPrice: 0,
      adultAge: '+12',
      childAge: '6-11',
      babyAge: '0-5',
    };

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
      'Страховка',
      'Трансфер от/до отеля',
      'Прогулка на Корабле',
      'Пенная Дискотека',
      'Обед',
      'Комфортабельный автобус с кондиционером',
    ];

    const excludes = [
      'Личные расходы (фотографии, сувениры и т.д.)',
      'Любые напитки во время экскурсии',
    ];

    const tourDetails = {
      tourCost: `This tour is ${bookingForm.adultPrice} USD for adults. It's ${bookingForm.childPrice} USD for childs ages ${bookingForm.childAge}. It is free for babies ${bookingForm.babyAge} years old.`,
      itemsBring: [
        'Предметы необходимые для плавания (купальник, плавки, полотенце и т.п.)',
        'Легкая одежда',
        'головной убор',
        'солнечные очки',
        ' удобная обувь',
        'крема от/для загара',
        'Фотоаппарат или видеокамеру',
        'Деньги для оплаты дополнительных услуг и все возможных покупок',
      ],
      departureTimes: [
        'В 08:30 из отелей Кириш',
        'В 08:50 из отелей Текирова',
        'В 08:50 из отелей Бельдибы',
        'В 09:15 из отелей Гейнюк',
        'В 09:15 из отелей Чамюва',
        'В 09:45 из отелей Кемер',
      ],
      returnTimes: [
        'В 16:00 -17:00 из отелей Текирова',
        'В 16:00 -17:00 из отелей Чамьюва',
        'В 16:00 -17:00 из отелей Кириш',
        'В 16:00 -17:00 из отелей Кемер',
        'В 16:00 -17:00 из отелей Гёйнюк',
        'В 16:00 -17:00 из отелей Бельдиби',
      ],
      distance: [
        'от Анталии - 45 км',
        'от Сиде - 118 км',
        'от Алании - 178 км',
      ],

      hours: '7 часов',
      days: 'Вт. Чт. Сб.',
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
      breadCrumbsCategory,
      breadCrumbsCategoryRoute,
      breadCrumbsTourLabel,
      sliderImages,
      includes,
      excludes,
      faq,
      bookingForm,
      tourDetails,
    };
  },
});
</script>
