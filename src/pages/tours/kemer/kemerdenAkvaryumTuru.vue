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
        <h1 class="text-red text-h4">Экскурсия в Аквариум из Кемера</h1>
        <p>
          Если вы отправились на отдых в Турцию с маленькими детьми, то навряд
          ли у вас получится поездить с ними на многочасовые экскурсии по горам,
          особенно когда за окном +40C, но есть в Анталии одна из известнейших
          турецких достопримечательностей, которое вы просто обязаны посетить с
          детками — это Antalya Aquarium (аквариум в Анталии). Он входит в
          десятку лучших океанариумов всего мира. По протяжённости океанариум
          занимает второе место в мире, а по объёму — пятое. Ощущение, когда
          идешь внутри подводного мира, трудно с чем-то сравнить и передать
          словами – это надо увидеть. Над головой, словно маленькие привидения,
          проплывают скаты, ближе ко дну “прогуливаются” небольшие акулы.
          Красивая подсветка, тихая инструментальная музыка, вода и рыб.
        </p>
      </template>

      <template v-slot:articleFullText>
        <p></p>
      </template>
    </tour-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TourPage from 'components/TourPage.vue';
import imgDesktop from 'assets/tour-images/akvaryum-turu/desktop/antalya-akvaryum.webp';
import imgMobile from 'assets/tour-images/akvaryum-turu/mobile/antalya-akvaryum.webp';
import slider1 from 'assets/tour-images/akvaryum-turu/slider/antalya-akvaryum-1.webp';
import slider2 from 'assets/tour-images/akvaryum-turu/slider/antalya-akvaryum-2.webp';
import slider3 from 'assets/tour-images/akvaryum-turu/slider/antalya-akvaryum-3.webp';
import slider4 from 'assets/tour-images/akvaryum-turu/slider/antalya-akvaryum-4.webp';
import slider5 from 'assets/tour-images/akvaryum-turu/slider/antalya-akvaryum-5.webp';
import slider6 from 'assets/tour-images/akvaryum-turu/slider/antalya-akvaryum-6.webp';
import slider7 from 'assets/tour-images/akvaryum-turu/slider/antalya-akvaryum-7.webp';
import slider8 from 'assets/tour-images/akvaryum-turu/slider/antalya-akvaryum-8.webp';
import slider9 from 'assets/tour-images/akvaryum-turu/slider/antalya-akvaryum-9.webp';
import slider10 from 'assets/tour-images/akvaryum-turu/slider/antalya-akvaryum-10.webp';
import slider11 from 'assets/tour-images/akvaryum-turu/slider/antalya-akvaryum-11.webp';
import slider12 from 'assets/tour-images/akvaryum-turu/slider/antalya-akvaryum-12.webp';
import slider13 from 'assets/tour-images/akvaryum-turu/slider/antalya-akvaryum-13.webp';
import slider14 from 'assets/tour-images/akvaryum-turu/slider/antalya-akvaryum-14.webp';
import slider15 from 'assets/tour-images/akvaryum-turu/slider/antalya-akvaryum-15.webp';
import slider16 from 'assets/tour-images/akvaryum-turu/slider/antalya-akvaryum-16.webp';
import slider17 from 'assets/tour-images/akvaryum-turu/slider/antalya-akvaryum-17.webp';
import slider18 from 'assets/tour-images/akvaryum-turu/slider/antalya-akvaryum-18.webp';
import slider19 from 'assets/tour-images/akvaryum-turu/slider/antalya-akvaryum-19.webp';
import slider20 from 'assets/tour-images/akvaryum-turu/slider/antalya-akvaryum-20.webp';
import articleImg from 'assets/tour-images/akvaryum-turu/article/antalya-akvaryum.webp';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const breadCrumbsCategory = 'Kemer';
    const breadCrumbsCategoryRoute = '/antalya/kemer';
    const breadCrumbsTourLabel = 'Экскурсия в Аквариум из Кемера';

    const bookingForm = {
      tourName: 'Экскурсия в Аквариум из Кемера',
      currency: 'attach_money',
      oldPrice: 60,
      adultPrice: 55,
      childPrice: 45,
      babyPrice: 0,
      adultAge: '+13',
      childAge: '4-12',
      babyAge: '0-3',
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
      slider14,
      slider15,
      slider16,
      slider17,
      slider18,
      slider19,
      slider20,
    ];

    const includes = [
      'Трансфер от и до отеля',
      'Автобус с кондиционером',
      'Услуга гида',
      'Входной билет в Аквариум',
    ];

    const excludes = [
      'Любые личные расходы (фотографии, сувениры и т.д.)',
      'Любые напитки во время экскурсии',
    ];

    const tourDetails = {
      tourCost: `This tour is ${bookingForm.adultPrice} USD for adults. It's ${bookingForm.childPrice} USD for childs ages ${bookingForm.childAge}. It is free for babies ${bookingForm.babyAge} years old.`,
      itemsBring: ['Фотоаппарат', 'Вода', 'Деньги на личные расходы'],
      departureTimes: [
        'В 09:30 из отелей Бельдибы',
        'В 09:15 из отелей Гейнюк',
        'В 09:00 из отелей Кемер',
        'В 08:45 из отелей Кириш',
        'В 08:30 из отелей Чамюва',
        'В 08:10 из отелей Текирова',
      ],
      returnTimes: [
        'В 12:45-13:45 из отелей Текирова',
        'В 12:45-13:45 из отелей Чамьюва',
        'В 12:45-13:45 из отелей Кириш',
        'В 12:45-13:45 из отелей Кемер',
        'В 12:45-13:45 из отелей Гёйнюк',
        'В 12:45-13:45 из отелей Бельдиби',
      ],
      distance: [
        'Расстояние от Текирова до Аквариума: 55 км',
        'Расстояние от Чамьюва до Аквариума: 46 км',
        'Расстояние от Кириш до Аквариума: 45 км',
        'Расстояние от Кемер до Аквариума: 39 км',
        'Расстояние от Гёйнюк до Аквариума: 35 км',
        'Расстояние от Бельдиби до Аквариума: 23 км',
      ],

      hours: '4 часа',
      days: 'Уточнить',
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
