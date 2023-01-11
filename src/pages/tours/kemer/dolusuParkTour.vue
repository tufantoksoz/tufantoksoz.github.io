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
        <h1 class="text-red text-h4">Аквапарк Долусу в Кемере</h1>

        <p>
          Откройте для себя аквапарк в Кемере (DoluSu Park). Это один из
          крупнейших аквапарков под открытым небом на Анталийском побережье.
          Аквапарк в Кемере - его создатели смело называют самым экстремальным в
          Турции. Насколько это верно, судить не беремся, но то, что в его
          комплексе удалось объединить все «плюшки» водного отдыха, бесспорно.
        </p>
      </template>

      <template v-slot:articleFullText>
        <p>
          Пляж, дельфинарий, разнообразные едальни и, конечно, множество крутых
          трамплинов и горок. В аквапарк в Кемере более 30 водных аттракционов,
          среди которых немало детских. Оформленный в лазурных красках аквапарк
          открыли совсем недавно, поэтому все здесь пока еще абсолютно новое.
        </p>
      </template>
    </tour-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TourPage from 'components/TourPage.vue';

import slider1 from 'assets/tour-images/dolusu-park-tour/slider/dolusu-park-tour-1.webp';
import slider2 from 'assets/tour-images/dolusu-park-tour/slider/dolusu-park-tour-2.webp';
import slider3 from 'assets/tour-images/dolusu-park-tour/slider/dolusu-park-tour-3.webp';
import slider4 from 'assets/tour-images/dolusu-park-tour/slider/dolusu-park-tour-4.webp';
import slider5 from 'assets/tour-images/dolusu-park-tour/slider/dolusu-park-tour-5.webp';
import slider6 from 'assets/tour-images/dolusu-park-tour/slider/dolusu-park-tour-6.webp';
import slider7 from 'assets/tour-images/dolusu-park-tour/slider/dolusu-park-tour-7.webp';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const breadCrumbsCategory = 'Kemer';
    const breadCrumbsCategoryRoute = '/antalya/kemer';
    const breadCrumbsTourLabel = 'Аквапарк Долусу в Кемере';

    const bookingForm = {
      tourName: 'Аквапарк Долусу в Кемере',
      currency: 'attach_money',
      oldPrice: 38,
      adultPrice: 35,
      childPrice: 30,
      babyPrice: 0,
      adultAge: '+12',
      childAge: '5-11',
      babyAge: '0-4',
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
      'Автобус с кондиционером',
      'Обед',
      'Страховка',
      'Входной билет в аквапарк Долу Су',
    ];

    const excludes = ['Любые личные расходы (фотографии, сувениры и т.д.)'];

    const tourDetails = {
      tourCost: `This tour is ${bookingForm.adultPrice} USD for adults. It's ${bookingForm.childPrice} USD for childs ages ${bookingForm.childAge}. It is free for babies ${bookingForm.babyAge} years old.`,
      itemsBring: [
        'Фотоаппарат',
        'Полотенце',
        'купальник',
        'Крем от загара',
        'солнцезащитные очки',
        'Деньги на личные расходы',
      ],

      departureTimes: [
        'В 09:20 из отелей Бельдиби',
        'В 09:30 из отелей Текирова',
        'В 09:45 из отелей Чамьюва',
        'В 09:45 из отелей Гёйнюк',
        'В 10:00 из отелей Кириш',
        'В 10:15 из отелей Кемер',
        'Точное время будет написано в вашем ваучере',
      ],
      returnTimes: [
        'В 16:30-17:30 из отелей Текирова',
        'В 16:30-17:30 из отелей Чамьюва',
        'В 16:30-17:30 из отелей Кириш',
        'В 16:30-17:30 из отелей Кемер',
        'В 16:30-17:30 из отелей Гёйнюк',
        'В 16:30-17:30 из отелей Бельдиби',
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
