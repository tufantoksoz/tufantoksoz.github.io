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
        <h1 class="text-red text-h4">Экскурсия Снорклинг в Кемере</h1>

        <p>
          Снорклинг в Кемере - замечательная возможность почувствовать себя
          частью подводного мира и рассмотреть буквально каждую песчинку в
          бирюзовых водах Средиземного моря! Для людей желающих активно провести
          отпуск, снорклинг в Кемере будет прекрасной альтернативой пляжного
          отдыха!
        </p>
      </template>

      <template v-slot:articleFullText>
        <p>
          Только представьте, уникальный подводный мир,🐠разноцветные морские
          рыбки, которые стаями проносятся возле вас и подплывают прямо на
          расстоянии вытянутой руки,черепахи🐢, а так же живописный ландшафт
          Средиземного моря, просто поразит вас своей красотой! Вас ждут яркие,
          незабываемые впечатления и погружения в подводную морскую сказку!
          Приглашаем вас на морскую прогулку для снорклинга в бухтах с
          кристально чистой водой!💦 Во время погружения в лазурное море, вас
          ждёт не только знакомство с обитателями Средиземноморья но и
          таинственные пещеры наполненные сказками и легендами!
        </p>
      </template>
    </tour-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TourPage from 'components/TourPage.vue';
import slider1 from 'assets/tour-images/kemer-snorkel-diving/slider/kemer-snorkel-diving-1.webp';
import slider2 from 'assets/tour-images/kemer-snorkel-diving/slider/kemer-snorkel-diving-2.webp';
import slider3 from 'assets/tour-images/kemer-snorkel-diving/slider/kemer-snorkel-diving-3.webp';
import slider4 from 'assets/tour-images/kemer-snorkel-diving/slider/kemer-snorkel-diving-4.webp';
import slider5 from 'assets/tour-images/kemer-snorkel-diving/slider/kemer-snorkel-diving-5.webp';
import slider6 from 'assets/tour-images/kemer-snorkel-diving/slider/kemer-snorkel-diving-6.webp';
import slider7 from 'assets/tour-images/kemer-snorkel-diving/slider/kemer-snorkel-diving-7.webp';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const breadCrumbsCategory = 'Kemer';
    const breadCrumbsCategoryRoute = '/antalya/kemer';
    const breadCrumbsTourLabel = 'Экскурсия Снорклинг в Кемере';

    const bookingForm = {
      tourName: 'Экскурсия Снорклинг в Кемере',
      currency: 'attach_money',
      oldPrice: 28,
      adultPrice: 25,
      childPrice: 20,
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
      'Трансфер от и до отеля',
      'Aвтобус с кондиционером',
      'Обед',
      'Страховка',
      'Снаряжение для снорклинга (маска с трубкой и плавательные ласты)',
    ];

    const excludes = [
      'Любые личные расходы (фотографии , сувениры и т.д.)',
      'Напитки',
      'Фото + Видео с экскурсии',
    ];

    const tourDetails = {
      tourCost: `This tour is ${bookingForm.adultPrice} USD for adults. It's ${bookingForm.childPrice} USD for childs ages ${bookingForm.childAge}. It is free for babies ${bookingForm.babyAge} years old.`,
      itemsBring: [
        'Фотоаппарат',
        'Вода',
        'Полотенце',
        'Купальник',
        'Крем от загара',
        'Солнцезащитные очки',
        'Деньги на личные расходы',
      ],
      departureTimes: [
        'В 08:50 из Текирова',
        'В 08:50 из Бельдиби',
        'В 09:15 из Гёйнюка',
        'В 09:30 из Чамьюва',
        'В 09:30 из Кириша',
        'В 09:45 из Кемера',
        'Точное время будет написано в вашем ваучере',
      ],
      returnTimes: [
        'В 16:30 из Текирова',
        'В 16:45 из Чамьювы',
        'В 16:50 из Кириша',
        'В 17:00 из Кемера',
        'В 16:45 из Гёйнюка',
        'В 17:00 из Бельдиби',
      ],
      distance: [
        'от Кемера - 47 км',
        'от Анталии - 0 км',
        'от Сиде - 73 км',
        'от Алании - 133 км',
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
