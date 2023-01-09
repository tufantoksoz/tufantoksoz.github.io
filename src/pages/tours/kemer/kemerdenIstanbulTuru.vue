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
        <h1 class="text-red text-h4">Экскурсия в Стамбул из Кемера</h1>
        <p>
          Этот город переименовывали несколько раз, Византия, затем
          Константинополь, сейчас же название города всем известно – Стамбул. Во
          время Экскурсии в Стамбул из Анталии вы увидите город, который входит
          в десятку древнейших городов мира, имеющих самое большое историческое
          и культурное наследие! Город, где Азия встречается с Европой, Восток с
          Западом! Нигде в мире не встречалось столь интересное переплетение
          разных религий и культур, истории и современности!
        </p>
      </template>

      <template v-slot:articleFullText>
        <h6>В Стамбуле насчитывается</h6>
        <ul>
          <li>70 музеев</li>
          <li>
            64 мечети, самыми посещаемыми среди которых считаются Сулеймание, её
            история насчитывает четыре века, и построенная преимущественно из
            мрамора Голубая мечеть
          </li>
          <li>
            17 дворцов, наиболее популярными являются Долмабахче — это последняя
            резиденция султанов, построенная в стиле барокко Бейлербей и
            дворцовый комплекс Маслак
          </li>
          <li>49 исторических церквей и соборов</li>
        </ul>
        <p>
          Экскурсия из Анталии в Стамбул - это возможность посетить голубую
          мечеть (одно из самых известных архитектурных сооружений). Туристы
          отмечают, что это волшебное место! Зайдя внутрь время будто
          останавливается, ты проникаешься историей и понимаешь, чего это стоило
          в то время!
        </p>
      </template>
    </tour-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TourPage from 'components/TourPage.vue';
import imgDesktop from 'assets/tour-images/istanbul-tour/desktop/istanbul-tour.webp';
import imgMobile from 'assets/tour-images/istanbul-tour/mobile/istanbul-tour.webp';
import slider1 from 'assets/tour-images/istanbul-tour/slider/istanbul-tour-1.webp';
import slider2 from 'assets/tour-images/istanbul-tour/slider/istanbul-tour-2.webp';
import slider3 from 'assets/tour-images/istanbul-tour/slider/istanbul-tour-3.webp';
import slider4 from 'assets/tour-images/istanbul-tour/slider/istanbul-tour-4.webp';
import slider5 from 'assets/tour-images/istanbul-tour/slider/istanbul-tour-5.webp';
import slider6 from 'assets/tour-images/istanbul-tour/slider/istanbul-tour-6.webp';
import slider7 from 'assets/tour-images/istanbul-tour/slider/istanbul-tour-7.webp';
import slider8 from 'assets/tour-images/istanbul-tour/slider/istanbul-tour-8.webp';
import slider9 from 'assets/tour-images/istanbul-tour/slider/istanbul-tour-9.webp';
import articleImg from 'assets/tour-images/istanbul-tour/article/istanbul-tour.webp';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const breadCrumbsCategory = 'Kemer';
    const breadCrumbsCategoryRoute = '/antalya/kemer';
    const breadCrumbsTourLabel = 'Экскурсия в Стамбул из Кемера';

    const bookingForm = {
      tourName: 'Экскурсия в Стамбул из Кемера',
      currency: 'attach_money',
      oldPrice: 219,
      adultPrice: 199,
      childPrice: 189,
      babyPrice: 0,
      adultAge: '+13',
      childAge: '2-12',
      babyAge: '0-2',
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
    ];

    const includes = [
      'Трансфер от и до аэропорта Анталии',
      'Трансфер от и до аэропорта Стамбула',
      'Билет на самолет Анталья-Стамбул и Стамбул- Анталья',
      'Входной билет в мечеть Султан Ахмед',
      'Входной билет в мечеть Св.Софии',
      'Входной билет во дворец Топкапы',
      'Страховка',
      'Услуга гида',
      'Яхт тур по Босфору',
      'Обед',
      'Ужин',
    ];

    const excludes = [
      'Любые личные расходы ( фотографии, сувениры и тд...)',
      'Любые напитки во время экскурсии',
    ];

    const tourDetails = {
      tourCost: `This tour is ${bookingForm.adultPrice} USD for adults. It's ${bookingForm.childPrice} USD for childs ages ${bookingForm.childAge}. It is free for babies ${bookingForm.babyAge} years old.`,
      itemsBring: [
        'Фотоаппарат',
        'Деньги на личные расходы',
        'Солнцезащитные очки',
        'Деньги на личные расходы',
      ],
      departureTimes: [],
      returnTimes: ['В 22:00-23:30'],
      distance: [],

      hours: '22 часа',
      days: 'Уточняйте у менеджера',
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
