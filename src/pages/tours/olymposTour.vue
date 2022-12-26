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
import imgDesktop from 'assets/tour-images/olympos-tour/desktop/olympos-tour.webp';
import imgMobile from 'assets/tour-images/olympos-tour/mobile/olympos-tour.webp';
import slider1 from 'assets/tour-images/olympos-tour/slider/olympos-tour-1.webp';
import slider2 from 'assets/tour-images/olympos-tour/slider/olympos-tour-2.webp';
import slider3 from 'assets/tour-images/olympos-tour/slider/olympos-tour-3.webp';
import slider4 from 'assets/tour-images/olympos-tour/slider/olympos-tour-4.webp';
import slider5 from 'assets/tour-images/olympos-tour/slider/olympos-tour-5.webp';
import articleImg from 'assets/tour-images/olympos-tour/article/olympos-tour.webp';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const breadCrumbsCategory = 'Kemer';
    const breadCrumbsCategoryRoute = '/antalya/kemer';
    const breadCrumbsTourLabel = 'Экскурсия в Олимпос';

    const bookingForm = {
      tourName: 'Экскурсия в Олимпос - Огни Химеры - Улупинар',
      currency: 'attach_money',
      oldPrice: 27,
      adultPrice: 25,
      childPrice: 20,
      babyPrice: 0,
    };

    const articleTitle = 'Экскурсия в Олимпос - Огни Химеры - Улупинар';

    const articleSummaryText =
      'Древний Олимпос – одна из главных достопримечательностей Кемера. Основанный в III столетии до н.э. в устье реки Гёксу, Олимпос был одним из главных городов древней Ликии и частью их союза. Считается, что «olympos» – догреческое слово, означающее в переводе «гора». Своё название он берет в честь древней горы Олимп, которая сегодня именуется Тахталы.';

    const sliderImages = [slider1, slider2, slider3, slider4, slider5];

    const articleFullText =
      'Олимпос был одним из 6 городов Ликийского союза, чеканил свои монеты. Самая древняя монета датируется 2 столетием до н.э. и эта дата зафиксирована в самых древних документах города. Легендарный Олимпос пережил взлет и падение многих цивилизаций, оставивших свой след в архитектуре. Однако примерно в XV столетии, когда османский флот установил свою власть в Восточном Средиземноморье, Олимпос опустел окончательно. Его последним завоевателем стала Природа, бережно окружившая памятники истории прекрасными растениями и населившая их сладкоголосыми птицами.';

    const includes = [
      'Трансфер на джипах от и до отеля',
      'Ужин',
      'Страховка',
      'Входной билет на гору Химера',
    ];

    const excludes = [
      'Античный город Олимпос за дополнительную плату (по желанию)',
      'Любые личные расходы (фотографии, сувениры и т.д.)',
      'Любые напитки во время экскурсии',
    ];

    const tourDetails = {
      tourCost:
        "This tour is $25 for adults. It's $20 for childs ages 6-11. It is free for babies 0-5 years old.",
      itemsBring:
        'Фотоаппарат, Полотенце, купальник, Крем от загара, солнцезащитные очки, Деньги на личные расходы, Спортивную обувь',
      departureTimes: [
        'В 15:20 из отелей Бельдиби',
        'В 15:45 из отелей Кириш',
        'В 15:50 из отелей Гёйнюк',
        'В 16:00 из отелей Кемер',
        'В 16:00 из отелей Чамьюва',
        'В 16:30 из отелей Текирова',
      ],
      returnTimes: [
        'В 22:30-23:00 из отелей Текирова',
        'В 22:30-23:00 из отелей Чамьюва',
        'В 22:30-23:00 из отелей Кириш',
        'В 22:30-23:00 из отелей Кемер',
        'В 22:30-23:00 из отелей Гёйнюк',
        'В 22:30-23:00 из отелей Бельдиби ',
      ],
      distance: [
        'от Анталии - 45 км',
        'от Сиде - 118 км',
        'от Алании - 178 км',
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
