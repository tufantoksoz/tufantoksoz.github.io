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
        <h1 class="text-red text-h4">Турецкая Баня (Хамам) в Кемере</h1>
        <p>
          Турецкая баня в Кемере обладает одним важным преимуществом: в хамаме
          царит комфортный климат. Особый температурный режим в диапазоне 30-55
          градусов и более высокая влажность, чем в обычной сауне или бане,
          делают хамам комфортным для людей, которые плохо переносят высокие
          температуры, а также для гипертоников и людей с заболеваниями сосудов.
        </p>
      </template>

      <template v-slot:articleFullText>
        <p>
          Хамам (турецкая баня) благотворно влияет на здоровье человека:
          исцеляются простудные заболевания, снимаются мышечные и суставные
          боли, очищается кожа, выводятся токсины из организма, укрепляется
          дыхательная система, улучшается кровоток и работа пищеварительной
          системы, проходит бессонница. Все поры раскрываются и кожа прекрасно
          чистится: при этом сухая кожа увлажняется, не пересушиваясь, а
          структура жирной кожи нормализуется, сужаются поры. Сильный
          увлажняющий эффект делает турецкий хамам полезным и лечебным для
          волос.
        </p>
      </template>
    </tour-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TourPage from 'components/TourPage.vue';
import imgDesktop from 'assets/tour-images/turkish-bath/desktop/turkish-bath.webp';
import imgMobile from 'assets/tour-images/turkish-bath/mobile/turkish-bath.webp';
import slider1 from 'assets/tour-images/turkish-bath/slider/turkish-bath-1.webp';
import slider2 from 'assets/tour-images/turkish-bath/slider/turkish-bath-2.webp';
import slider3 from 'assets/tour-images/turkish-bath/slider/turkish-bath-3.webp';
import slider4 from 'assets/tour-images/turkish-bath/slider/turkish-bath-4.webp';
import slider5 from 'assets/tour-images/turkish-bath/slider/turkish-bath-5.webp';
import slider6 from 'assets/tour-images/turkish-bath/slider/turkish-bath-6.webp';
import slider7 from 'assets/tour-images/turkish-bath/slider/turkish-bath-7.webp';
import slider8 from 'assets/tour-images/turkish-bath/slider/turkish-bath-8.webp';
import slider9 from 'assets/tour-images/turkish-bath/slider/turkish-bath-9.webp';
import slider10 from 'assets/tour-images/turkish-bath/slider/turkish-bath-10.webp';
import slider11 from 'assets/tour-images/turkish-bath/slider/turkish-bath-11.webp';
import slider12 from 'assets/tour-images/turkish-bath/slider/turkish-bath-12.webp';
import slider13 from 'assets/tour-images/turkish-bath/slider/turkish-bath-13.webp';
import articleImg from 'assets/tour-images/turkish-bath/article/turkish-bath.webp';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const breadCrumbsCategory = 'Kemer';
    const breadCrumbsCategoryRoute = '/antalya/kemer';
    const breadCrumbsTourLabel = 'Турецкая Баня (Хамам) в Кемере';

    const bookingForm = {
      tourName: 'Турецкая Баня (Хамам) в Кемере',
      currency: 'attach_money',
      oldPrice: 18,
      adultPrice: 15,
      childPrice: 13,
      babyPrice: 0,
      adultAge: '+12',
      childAge: '6-11',
      babyAge: '0-5',
    };

    const articleTitle = 'Турецкая Баня (Хамам) в Кемере';

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

    const includes = [
      'Страховка',
      'Трансфер от/до отеля',
      'Сейф',
      'Комфортабельный автобус с кондиционером',
      'Предметы необходимые для процедур (полотенце, перчатка и шлепанцы)',
    ];

    const excludes = [
      'Любые личные расходы (фотографии, сувениры и тд...)',
      'Дополнительные услуги',
    ];

    const tourDetails = {
      tourCost: `This tour is ${bookingForm.adultPrice} USD for adults. It's ${bookingForm.childPrice} USD for childs ages ${bookingForm.childAge}. It is free for babies ${bookingForm.babyAge} years old.`,
      itemsBring: ['Полотенце', 'Купальник', 'Деньги на личные расходы'],
      departureTimes: [
        'В 09:00, 10:15, 14:00, 16:00, 20:00 из отелей Кириш',
        'В 09:00, 10:00, 13:30, 15:00, 17:00, 20:00 из отелей Бельдиби 1',
        'В 09:10, 10:10, 13:40, 15:10, 17:10, 20:10 из отелей Бельдиби 2',
        'В 09:15, 10:30, 14:15, 16:15, 20:10 из отелей Кемер 1',
        'В 09:20, 10:20, 13:50, 15:20, 17:20, 20:20 из отелей Бельдиби 3',
        'В 09:25, 10:40, 14:25, 16:25, 20:20 из отелей Кемер 2',
        'В 09:45 из отелей Кемер',
        'В 09:30, 13:45, 17:15, 20:00 из отелей Текирова',
        'В 09:45, 14:00, 17:30, 20:15 из отелей Чамьюва',
      ],
      returnTimes: [
        'Через 2-2,5 часа после приезда в Хамам из отелей Текирова',
        'Через 2-2,5 часа после приезда в Хамам из отелей Чамьюва',
        'Через 2-2,5 часа после приезда в Хамам из отелей Кириш',
        'Через 2-2,5 часа после приезда в Хамам из отелей Кемер',
        'Через 2-2,5 часа после приезда в Хамам из отелей Гёйнюк',
        'Через 2-2,5 часа после приезда в Хамам из отелей Бельдиби',
      ],
      distance: [
        'от Анталии - 45 км',
        'от Сиде - 118 км',
        'от Алании - 178 км',
      ],

      hours: '2,5 часов',
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
