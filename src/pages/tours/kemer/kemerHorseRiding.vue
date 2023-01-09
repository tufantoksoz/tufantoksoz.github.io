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
        <h1 class="text-red text-h4">Прогулка на Лошадях в Кемере</h1>
        <p>
          Экскурсия прогулка на лошадях в Кемере - идеальный выбор для тех, кто
          хочет провести активный день и при этом подружиться с лошадьми,
          известными как одни из самых благородных животных в мире. Верхом на
          лошади в Кемере Вы одновременно сможете насладиться свежим воздухом,
          завязать новые дружеские отношения и весело провести время с близкими.
          Если хотите, давайте без замедления дадим общую информацию о нашей
          программе и подробнее рассмотрим эту красивую программу, которая
          входит в число самых интересных туров Кемера.
        </p>
      </template>

      <template v-slot:articleFullText>
        <p>
          Конное сафари в Кемере официально начнется, когда мы покинем место
          сбора группой всадников! Но куда мы едем? Если будете спрашивать, наш
          ответ: Обнять Природу. Мы проведем прекрасное время в предгорьях
          Таврских гор, пройдя через лесные массивы. Наш инструктор будет
          сопровождать нас во время прогулки в пышной зеленой пелене цветов,
          чтобы вы чувствовали себя безопасно и спокойно. В конце нашей
          двухчасовой прогулки мы оставим после себя великолепный день, десятки
          замечательных фотографий и массу удовольствия.Затем мы попрощаемся с
          нашими прекрасными спутниками, лошадьми и, конечно же, с нашими
          тренерами, и завершим этот незабываемый день.
        </p>
      </template>
    </tour-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TourPage from 'components/TourPage.vue';
import imgDesktop from 'assets/tour-images/kemer-horse-riding/desktop/kemer-horse-riding.webp';
import imgMobile from 'assets/tour-images/kemer-horse-riding/mobile/kemer-horse-riding.webp';
import slider1 from 'assets/tour-images/kemer-horse-riding/slider/kemer-horse-riding-1.webp';
import slider2 from 'assets/tour-images/kemer-horse-riding/slider/kemer-horse-riding-2.webp';
import slider3 from 'assets/tour-images/kemer-horse-riding/slider/kemer-horse-riding-3.webp';
import slider4 from 'assets/tour-images/kemer-horse-riding/slider/kemer-horse-riding-4.webp';
import slider5 from 'assets/tour-images/kemer-horse-riding/slider/kemer-horse-riding-5.webp';
import slider6 from 'assets/tour-images/kemer-horse-riding/slider/kemer-horse-riding-6.webp';
import articleImg from 'assets/tour-images/kemer-horse-riding/article/kemer-horse-riding.webp';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const breadCrumbsCategory = 'Kemer';
    const breadCrumbsCategoryRoute = '/antalya/kemer';
    const breadCrumbsTourLabel = 'Прогулка на Лошадях в Кемере';

    const bookingForm = {
      tourName: 'Прогулка на Лошадях в Кемере',
      currency: 'attach_money',
      oldPrice: 34,
      adultPrice: 30,
      childPrice: 30,
      babyPrice: 0,
      adultAge: '+12',
      childAge: '4-12',
      babyAge: '0-3',
    };

    const sliderImages = [slider1, slider2, slider3, slider4, slider5, slider6];

    const includes = [
      'Трансфер от /до отеля',
      'Страховка - Услуги гида',
      'Уроки верховой езды и сопровождение инструктора',
    ];

    const excludes = ['Напитки'];

    const tourDetails = {
      tourCost: `This tour is ${bookingForm.adultPrice} USD for adults. It's ${bookingForm.childPrice} USD for childs ages ${bookingForm.childAge}. It is free for babies ${bookingForm.babyAge} years old.`,
      itemsBring: [
        'Фотоаппарат',
        'Крем от загара',
        'Солнцезащитные очки',
        'Деньги на личные расходы',
      ],
      departureTimes: [
        'В 08:30 из отелей Бельдиби',
        'В 08:45 из отелей Гёйнюк',
        'В 09:00 из отелей Кемер',
        'В 09:15 из отелей Кириш',
        'В 09:25 из отелей Чамьюва',
        'В 09:45 из отелей Текирова',
      ],
      returnTimes: [
        'В 14:00-15:00 из отелей Текирова',
        'В 14:00-15:00 из отелей Чамьюва',
        'В 14:00-15:00 из отелей Кириш',
        'В 14:00-15:00 из отелей Кемер',
        'В 14:00-15:00 из отелей Гёйнюк',
        'В 14:00-15:00 из отелей Бельдиби',
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
