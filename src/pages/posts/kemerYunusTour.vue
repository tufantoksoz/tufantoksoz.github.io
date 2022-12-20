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
      :articleSummaryText="articleSummaryText"
      :articleFullText="articleFullText"
      :articleImg="articleImg"
      :includes="includes"
      :excludes="excludes"
      :tourDetails="tourDetails"
      :faq="faq"
      :bookingForm="bookingForm"
    >
    </tour-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TourPage from 'components/TourPage.vue';
import imgDesktop from 'assets/posts/kemer-yunus/kemer-yunus-1.jpeg';
import imgMobile from 'assets/posts/kemer-yunus/kemer-yunus-2.jpg';
import slider1 from 'assets/posts/kemer-yunus/kemer-yunus-3.jpeg';
import slider2 from 'assets/posts/kemer-yunus/kemer-yunus-4.jpeg';
import slider3 from 'assets/posts/kemer-yunus/kemer-yunus-5.jpeg';
import articleImg from 'assets/posts/kemer-yunus/kemer-yunus-6.jpg';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const breadCrumbsCategory = 'Kemer';
    const breadCrumbsCategoryRoute = '/kemer';
    const breadCrumbsTourLabel = 'Дельфинарий в Кемере';
    const articleTitle = 'Дельфинарий в Кемере';
    const articleSummaryText =
      'Экскурсия в Дельфинарий в Кемере отличное место для отдыха с детьми. Дельфинарий в Кемере находится в живописном парке "Лунный свет". Этот дельфинарий считается одним из самых лучших на Анталийском побережье. Если вы отдыхаете с детьми обязательно посетите дельфинарий в Кемере. Тут необычная атмосфера, из за которой получаешь удовольствие от всего. Дети получать массу удовольствия и восторга от просмотра шоу с милыми животными.';
    const sliderImages = [slider1, slider2, slider3];
    const articleFullText =
      'Шоу дельфинов в Кемере происходит в большем бассейне. Глубина в бассейне более 5 метров, его главная особенности это прозрачные стены. Дельфинарий рассчитан на 800 зрителей. Кроме дельфинов в шоу принимают участие морские котики и морские львы. Они выполняют различные трюки, играют с мечами, танцуют и сами себе хлопают. Перед выступлением морских артистов вам расскажут о привычках, особенностях и физических характеристиках дельфинов. Шоу длится 45-50 минут, его проводят два раза в день. Дельфинарий в Кемере является ещё и оздоровительным и реабилитационным центром. В свободное время, когда не проходит шоу, здесь проводят сеансы оздоровительной терапии для людей с различными заболеваниями. После сеанса человек становится более спокойный и избавляется о некоторых проявлений болезни. Дельфины полностью ручные и с удовольствием идут к людям. Во время шоу дельфины будут рисовать картины. У вас будет возможность купит её после выступления, а также сделать фото с дельфинами. В дельфинарие можно не только посмотреть шоу с дельфинами, но и поплавать с этими милыми и игривыми животными. Ещё у вас будет уникальная возможность не только посмотреть, но и покормить, погладить дельфинов. Посетив экскурсию в дельфинарий в Кемере вы получите особое удовольствие наблюдая за морскими животными';
    const includes = [
      'Трансфер от и до отеля',
      'Автобус с кондиционером',
      'Входной билет в шоу дельфинов ',
    ];
    const excludes = [
      'Любые личные расходы (фотографии, сувениры и т.д.)',
      'Любые напитки во время экскурсии ',
    ];
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
    const bookingForm = {
      tourName: 'Дельфинарий в Кемере',
      currency: 'attach_money',
      oldPrice: 27,
      adultPrice: 25,
      childPrice: 10,
      babyPrice: 0,
    };
    const tourDetails = {
      tourCost:
        "This tour is $25 for adults. It's $25 for childs ages 3-12. It is free for babies 0-2 years old.",
      itemsBring:
        'It is recommended to bring a camera, sunscreen, towel, swimsuit, sunglasses when coming to the tour.',
      departureTimes: [
        'Из отелей Бельдибы: 14:00',
        'Из отелей Гейнюк: 14:20',
        'Из отелей Кемера : 14:15',
        'Из отелей Кириш: 14:00',
        'Из отелей Чамюва: 13:45',
      ],
      returnTimes: ['Через 4 часа после времени трансфера из отелей'],
      distance: {
        headerTitle: 'How far is the Antalya regions and Kemer?',
        content: ['-'],
      },
      hours: '5 Hours',
    };
    return {
      imgDesktop,
      imgMobile,
      breadCrumbsCategory,
      breadCrumbsCategoryRoute,
      breadCrumbsTourLabel,
      articleTitle,
      articleSummaryText,
      sliderImages,
      articleFullText,
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
