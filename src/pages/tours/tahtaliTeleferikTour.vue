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
          Итак, заветные 2365 метров. Невероятной красоты пейзажи! Шикарная
          видовая площадка на крыше с обзором в 360 градусов. Предлагают на
          Тахталы одно очень захватывающе и красивое приключение – полёт на
          параплане. Вы стартуете в тандеме с инструктором с площадки, которая
          находится почти на самой вершине.
        </p>
      </template>

      <template v-slot:articleFullText>
        <p>
          Если море дарит счастье, то в горах находят нас покой и умиротворение.
          Вот и ответ на вопрос, почему Турция выбрана для жизни: на берегу
          теплого моря и одновременно в окружении величественных гор спокойно и
          счастливо. Одно из таких непередаваемых и впечатляющих мест в Турции,
          где встречаются море и горы, небо и земля, побережье с летней погодой
          и снежные вершины — это гора Тахталы высотою 2365 метров с видом на
          Средиземное море. За считанные минуты огромная кабинка канатной дороги
          (на 80 человек!) перемещает из лета в зиму. Только представьте, какой
          перепад высот и как от высоты под кабинкой захватывает дух.
        </p>
      </template>
    </tour-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TourPage from 'components/TourPage.vue';
import imgDesktop from 'assets/tour-images/tahtali-teleferik-tour/desktop/tahtali-teleferik-tour.webp';
import imgMobile from 'assets/tour-images/tahtali-teleferik-tour/mobile/tahtali-teleferik-tour.webp';
import slider1 from 'assets/tour-images/tahtali-teleferik-tour/slider/tahtali-teleferik-tour-1.webp';
import slider2 from 'assets/tour-images/tahtali-teleferik-tour/slider/tahtali-teleferik-tour-2.webp';
import slider3 from 'assets/tour-images/tahtali-teleferik-tour/slider/tahtali-teleferik-tour-3.webp';
import slider4 from 'assets/tour-images/tahtali-teleferik-tour/slider/tahtali-teleferik-tour-4.webp';
import slider5 from 'assets/tour-images/tahtali-teleferik-tour/slider/tahtali-teleferik-tour-5.webp';
import slider6 from 'assets/tour-images/tahtali-teleferik-tour/slider/tahtali-teleferik-tour-6.webp';
import articleImg from 'assets/tour-images/tahtali-teleferik-tour/article/tahtali-teleferik-tour.webp';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const breadCrumbsCategory = 'Kemer';
    const breadCrumbsCategoryRoute = '/antalya/kemer';
    const breadCrumbsTourLabel = 'Канатная Дорога Тахталы из Кемера';

    const bookingForm = {
      tourName: 'Канатная Дорога Тахталы из Кемера',
      currency: 'attach_money',
      oldPrice: 50,
      adultPrice: 45,
      childPrice: 45,
      babyPrice: 0,
      adultAge: '+12',
      childAge: '7-11',
      babyAge: '0-6',
    };

    const articleTitle = 'Канатная Дорога Тахталы из Кемера';

    const sliderImages = [slider1, slider2, slider3, slider4, slider5, slider6];

    const includes = [
      'Услуга трансфера от и до отеля',
      'Страховка',
      'Входной билет',
    ];

    const excludes = ['Любые личные расходы (фотографии, сувениры и т.д.)'];

    const tourDetails = {
      tourCost: `This tour is ${bookingForm.adultPrice} USD for adults. It's ${bookingForm.childPrice} USD for childs ages ${bookingForm.childAge}. It is free for babies ${bookingForm.babyAge} years old.`,
      itemsBring: ['Фотоаппарат', 'Вода', 'Теплые вещи'],
      departureTimes: [
        'В 09:30 из отелей Бельдиби',
        'В 09:45 из отелей Гёйнюк',
        'В 10:00 из отелей Кемер',
        'В 10:15 из отелей Кириш',
        'В 10:30 из отелей Чамьюва',
        'В 10:45 из отелей Текирова',
      ],
      returnTimes: [
        'В 13:00-14:00 из отелей Текирова',
        'В 13:00-14:00 из отелей Чамьюва',
        'В 13:00-14:00 из отелей Кириш',
        'В 13:00-14:00 из отелей Кемер',
        'В 13:00-14:00 из отелей Гёйнюк',
        'В 13:00-14:00 из отелей Бельдиби',
      ],
      distance: [
        'от Кемера - 47 км',
        'от Анталии - 0 км',
        'от Сиде - 73 км',
        'от Алании - 133 км',
      ],

      hours: '4 часа',
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
