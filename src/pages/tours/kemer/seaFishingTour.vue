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
        <h1 class="text-red text-h4">Морская Рыбалка в Кемере</h1>
        <p>
          Для всех кто любит порыбачить и проситель с удочкой в тишине и покое -
          морская рыбалка в Кемере будет настоящим подарком! Средиземное море
          славиться тем, что является настоящим кладезем необычных рыб, а для
          каждого рыбака праздник, когда он поймал одну из них!
        </p>
      </template>

      <template v-slot:articleFullText>
        <p>
          Экскурсия морская рыбалка в Кемере - это отличная возможность не
          только заниматься любимым делом но и хорошо отдохнуть на свежем
          воздухе, полюбоваться красивыми прибрежным ландшафтом! Морская рыбалка
          в Кемере будет интересна не только опытным рыбакам но и всем желающим,
          мы отправимся в морское путешествие ранним утром в спокойной и тихой
          обстановке, когда лучи на восходе солнца по-особенному освещают горы
          Торроса в зелени лесов!
        </p>
      </template>
    </tour-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TourPage from 'components/TourPage.vue';
import imgDesktop from 'assets/tour-images/sea-fishing/desktop/sea-fishing.webp';
import imgMobile from 'assets/tour-images/sea-fishing/mobile/sea-fishing.webp';
import slider1 from 'assets/tour-images/sea-fishing/slider/sea-fishing-1.webp';
import slider2 from 'assets/tour-images/sea-fishing/slider/sea-fishing-2.webp';
import slider3 from 'assets/tour-images/sea-fishing/slider/sea-fishing-3.webp';
import slider4 from 'assets/tour-images/sea-fishing/slider/sea-fishing-4.webp';
import slider5 from 'assets/tour-images/sea-fishing/slider/sea-fishing-5.webp';
import slider6 from 'assets/tour-images/sea-fishing/slider/sea-fishing-6.webp';
import slider7 from 'assets/tour-images/sea-fishing/slider/sea-fishing-7.webp';
import slider8 from 'assets/tour-images/sea-fishing/slider/sea-fishing-8.webp';
import slider9 from 'assets/tour-images/sea-fishing/slider/sea-fishing-9.webp';
import slider10 from 'assets/tour-images/sea-fishing/slider/sea-fishing-10.webp';
import slider11 from 'assets/tour-images/sea-fishing/slider/sea-fishing-11.webp';
import slider12 from 'assets/tour-images/sea-fishing/slider/sea-fishing-12.webp';
import slider13 from 'assets/tour-images/sea-fishing/slider/sea-fishing-13.webp';
import articleImg from 'assets/tour-images/sea-fishing/article/sea-fishing.webp';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const breadCrumbsCategory = 'Kemer';
    const breadCrumbsCategoryRoute = '/antalya/kemer';
    const breadCrumbsTourLabel = 'Морская Рыбалка в Кемере';

    const bookingForm = {
      tourName: 'Морская Рыбалка в Кемере',
      currency: 'attach_money',
      oldPrice: 60,
      adultPrice: 50,
      childPrice: 45,
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
      slider8,
      slider9,
      slider10,
      slider11,
      slider12,
      slider13,
    ];

    const includes = ['Трансфер от и до отеля', 'Страховка', 'Завтрак', 'Обед'];

    const excludes = [
      'Любые личные расходы (фотографии, сувениры и тд.)',
      'Любые напитки во время экскурсии',
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
        'В 06:15 из отелей Текирова',
        'В 06:30 из отелей Бельдибы',
        'В 06:30 из отелей Чамюва',
        'В 06:45 из отелей Гейнюк',
        'В 06:45 из отелей Кириш',
        'В 07:00 из отелей Кемер',
      ],
      returnTimes: ['В 13:00-13:30'],
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
