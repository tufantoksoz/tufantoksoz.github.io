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
import imgDesktop from 'assets/tour-images/pamukkale-tour-from-kemer/desktop/pamukkale-tour-from-kemer.webp';
import imgMobile from 'assets/tour-images/pamukkale-tour-from-kemer/mobile/pamukkale-tour-from-kemer.webp';
import slider1 from 'assets/tour-images/pamukkale-tour-from-kemer/slider/pamukkale-tour-from-kemer-1.webp';
import slider2 from 'assets/tour-images/pamukkale-tour-from-kemer/slider/pamukkale-tour-from-kemer-2.webp';
import slider3 from 'assets/tour-images/pamukkale-tour-from-kemer/slider/pamukkale-tour-from-kemer-3.webp';
import slider4 from 'assets/tour-images/pamukkale-tour-from-kemer/slider/pamukkale-tour-from-kemer-4.webp';
import slider5 from 'assets/tour-images/pamukkale-tour-from-kemer/slider/pamukkale-tour-from-kemer-5.webp';
import articleImg from 'assets/tour-images/pamukkale-tour-from-kemer/article/pamukkale-tour-from-kemer.webp';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const breadCrumbsCategory = 'Kemer';
    const breadCrumbsCategoryRoute = '/antalya/kemer';
    const breadCrumbsTourLabel = 'Памуккале из Кемера';

    const bookingForm = {
      tourName: 'Памуккале из Кемера',
      currency: 'attach_money',
      oldPrice: 42,
      adultPrice: 35,
      childPrice: 25,
      babyPrice: 0,
    };

    const articleTitle = 'Памуккале из Кемера';

    const articleSummaryText =
      'Кажется, что Турция такая знакомая нам страна но при этом здесь всегда можно найти что-то интересное, новое и очень увлекательное, если поближе её исследовать! Во время тура "Экскурсия в Памуккале из Кемера", вы сразу поймете почему это место в переводе с турецкого означает "Хлопковый замок" . Действительно в этом месте есть какая-то магия, ведь не зря это место ежегодно привлекает миллионы туристов со всего мира! Для кого-то отдых -это море, солнце и релакс а для кого-то ещё и незабываемые впечатления и увлекательные приключения! Побывав на экскурсии в Памуккале из Кемера вы не останетесь равнодушными, мы уверены - это место вам понравится!';

    const sliderImages = [slider1, slider2, slider3, slider4, slider5];

    const articleFullText =
      'Памуккале переводится с турецкого как «Хлопковый замок». На территории этого музея под открытым небом есть не только белоснежные травертины (это известковые ванны с минеральной водой), но и развалины древнего города Иераполиса. 4000 лет назад это был большой курортный город, но входить на его территорию позволялось только богатым людям, беднякам вход был закрыт. Раньше, лет 13-14 назад, отдыхающие принимали минеральные ванны по всему склону, но со временем, травертины загрязнились, посерели (люди ходили в обуви, заходили в ванны не смыв с себя крем для загара, массажное масло или просто, не достаточно чистые), в итоге, купания и вход в обуви запретили. Сейчас разрешено окунуться только в одном специально отведённом месте, но там так много народу, что мало кто купается, в основном, осторожно бродят по воде. Осторожно — потому, что дно травертин неровное, попадаются острые известковые камушки, местами — скользкое, как лёд. В целом, так приятно глазу это бело-голубое место. Можно бродить там или просто сидеть в тенёчке и любоваться пейзажем весь день.';

    const includes = [
      'Трансфер от и до отеля',
      'Автобус с кондиционером',
      'Обед',
      'Страховка',
      'Услуги гида',
      'Входной билет в Памуккале',
    ];

    const excludes = [
      'Любые личные расходы (фотографии, сувениры и т.д.)',
      'Входной билет в Бассейн Клеопатры',
      'Любые напитки во время экскурсии',
    ];

    const tourDetails = {
      tourCost:
        "This tour is $35 for adults. It's $25 for childs ages 6-11. It is free for babies 0-5 years old.",
      itemsBring:
        'Фотоаппарат, Полотенце, Купальник, Крем от загара, Солнцезащитные очки, Деньги на личные расходы, Закажите ланч пакет (сухой паек) за день до экскурсии на ресепшене',
      departureTimes: [
        'В 03:00 из отелей Текирова.',
        'В 03:30 из отелей Чамьюва',
        'В 03:45 из отелей Кириш',
        'В 04:00 из отелей Кемер',
        'В 04:15 из отелей Гёйнюк',
        'В 04:30 из отелей Бельдиби',
        'P.S: Точное время будет написано в вашем ваучере',
      ],
      returnTimes: [
        'В 18:45 из отелей Бельдибы',
        'В 19:00 из отелей Гейнюк',
        'В 19:10 из отелей Кемер',
        'В 19:20 из отелей Кириш',
        'В 19:30 из отелей Чамюва',
        'В 19:45 из отелей Текирова',
      ],
      distance: [
        'Расстояние от Бельдиби до Памуккале: 257 км',
        'Расстояние от Гёйнюк до Памуккале: 266 км',
        'Расстояние от Кемера до Памуккале: 273 км',
        'Расстояние от Чамьюва до Памуккале: 279 км',
        'Расстояние от Кириш до Памуккале: 280 км',
        'Расстояние от Текирова до Памуккале: 289 км',
      ],

      hours: '14 часов',
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
