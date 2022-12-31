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
          Как вы думаете, можно ли в наши дни на средиземноморском побережье
          Анталии найти необитаемый остров? Оказывается - можно! Экскурсия на
          остров Сулуада из Кемера -это место, где вы почувствуете себя как в
          раю! Остров Сулуада вулканического происхождения всего 1.3 км в длину
          и от 350 до 100 м в ширину. Он представляет собой гору с обрывающимися
          в море скальными склонами ярко-оранжевого цвета.
        </p>
      </template>

      <template v-slot:articleFullText>
        <p>
          Название Sulu Ada — составное слово, означающее «водный остров».
          Именуется остров так, благодаря источнику минеральной воды,
          расположенному здесь. В маленькой бухте, где находится источник,
          раньше вода текла со скал прямо в море, теперь проходит по трубе.
          Минеральная вода этого источника рекомендована при заболевании почек и
          желудочно-кишечного тракта. Ещё одна бухта представляет собою пещеру,
          вода в ней холодная. Существует легенда, что молодую красивую девушку
          разлучили с любимым парнем, забрав в гарем. Она горевала и плакала
          из-за чего в бухте прохладная вода.
        </p>
      </template>
    </tour-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TourPage from 'components/TourPage.vue';
import imgDesktop from 'assets/tour-images/adrasan-suluada/desktop/adrasan-suluada.webp';
import imgMobile from 'assets/tour-images/adrasan-suluada/mobile/adrasan-suluada.webp';
import slider1 from 'assets/tour-images/adrasan-suluada/slider/adrasan-suluada-1.webp';
import slider2 from 'assets/tour-images/adrasan-suluada/slider/adrasan-suluada-2.webp';
import slider3 from 'assets/tour-images/adrasan-suluada/slider/adrasan-suluada-3.webp';
import articleImg from 'assets/tour-images/adrasan-suluada/article/adrasan-suluada.webp';
import api from 'src/static/api/tours/adrasan-suluada.json';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const breadCrumbsCategory = 'Kemer';
    const breadCrumbsCategoryRoute = '/antalya/kemer';
    const breadCrumbsTourLabel = 'Остров Сулуада';

    const bookingForm = {
      tourName: 'Остров Сулуада',
      currency: 'attach_money',
      oldPrice: 27,
      adultPrice: 25,
      childPrice: 20,
      babyPrice: 0,
      adultAge: '+12',
      childAge: '6-11',
      babyAge: '0-5',
    };

    const articleTitle = 'Остров Сулуада';

    const sliderImages = [slider1, slider2, slider3];

    const includes = [
      'Трансфер от отеля и до отеля',
      'Прогулка на Яхте',
      'Страховка',
      'Обед (Рыба дорадо или Сибас, макароны, салат)',
      'Чай',
      'Услуги гида',
    ];

    const excludes = [
      'Любые личные расходы (фотографии, сувениры и т.д.)',
      'Любые напитки во время экскурсии',
    ];

    const tourDetails = {
      tourCost: `This tour is ${bookingForm.adultPrice} USD for adults. It's ${bookingForm.childPrice} USD for childs ages ${bookingForm.childAge}. It is free for babies ${bookingForm.babyAge} years old.`,
      itemsBring: [
        'Фотоаппарат',
        'Полотенце',
        'Купальник',
        'Солнцезащитные очки',
        'Солнцезащитный крем',
        'Деньги на личные расходы',
      ],
      departureTimes: [
        'В 08:00 из отелей Бельдиби',
        'В 08:15 из отелей Гёйнюк',
        'В 08:30 из отелей Кемер',
        'В 08:45 из отелей Кириш',
        'В 09:00 из отелей Чамьюва',
        'В 09:15 из отелей Текирова',
      ],
      returnTimes: [
        'В 17:30 -18:30 из отелей Текирова',
        'В 17:30 -18:30 из отелей Чамьюва',
        'В 17:30 -18:30 из отелей Кириш',
        'В 17:30 -18:30 из отелей Кемер',
        'В 17:30 -18:30 из отелей Гёйнюк',
        'В 17:30 -18:30 из отелей Бельдиби',
      ],
      distance: [
        'от Кемера - 55 км',
        'от Анталии - 95 км',
        'от Сиде - 168 км',
        'от Алании - 228 км',
      ],

      hours: '9 часов',
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
      api,
    };
  },
});
</script>
