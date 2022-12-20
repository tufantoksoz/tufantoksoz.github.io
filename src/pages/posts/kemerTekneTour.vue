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
import imgDesktop from 'assets/posts/tekne-tour/tekne-tour.jpeg';
import imgMobile from 'assets/posts/tekne-tour/tekne-tour-2.jpeg';
import slider1 from 'assets/posts/tekne-tour/tekne-tour-3.jpeg';
import slider2 from 'assets/posts/tekne-tour/tekne-tour-4.jpeg';
import slider3 from 'assets/posts/tekne-tour/tekne-tour-5.jpeg';
import articleImg from 'assets/posts/tekne-tour/tekne-tour-2.jpeg';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const breadCrumbsCategory = 'Kemer';
    const breadCrumbsCategoryRoute = '/kemer';
    const breadCrumbsTourLabel = 'Прогулка на Корабле в Кемере';
    const articleTitle = 'Прогулка на Корабле в Кемере';
    const articleSummaryText =
      'Экскурсия прогулка на корабле в Кемере отличная возможность прогуляться на яхте в Кемере по самым красивым местам. Поплавать в чистой, бирюзовой воде, повеселиться, потанцевать, получить массу эмоции. Предлагаем вам разнообразить отдых.';
    const sliderImages = [slider1, slider2, slider3];
    const articleFullText =
      'Прогулка на яхте из Кемера отличная возможность увидеть уникальные морские достопримечательности. На яхте будет программа развлечений, зажигательная пенная дискотека. А весёлые и профессиональные аниматоры не дадут скучать ни вам ни вашим детям. Подходит для отдыха всей семьи либо же компании. Экскурсия прогулка на корабле в Кемере длится весь день. Будет три остановки для купания в чарующих бухта. Сытный, вкусный обед. Сотни фото на память. Обязательно нужна посетить экскурсию на яхте в Кемере. Прогулка на Корабле в Кемере - Посещаемые Места Райская Бухта Райская бухта находится не далеко от посёлка Чамьюва. Это бухта настолько красива, что заслужила такое необычное название. Сочетание гор и моря действительно восхищает. Цвет воды настолько необычный, что не возможно оторвать взгляд. Вода меняется от голубовото-бирюзового до зелёного. Бухта скрыта хвойными лесами, поэтому воздух тут очень чистый. Хочется дышать на полной грудью. Пляж усыпаный камушками. Днем вода переливается, ночью можно наблюдать как вода начинает светиться. Это микроорганизмы отображают солнечный свет скопившийся за день. Красивое и необычное зрелище. Бухта Фазелис Бухта Фазелис впечатляющая бухта. Море всегда чистое и теплое. Можно поплавать с маской, вы увидите - стены, камни, арки, много рыб. Наплававшись в море, вы можете полежать на пляже, насладиться пением птиц. Место очень спокойное и тихое. Отличное место для фотосесии. Обалденные виды не оставят никого равнодушным. Бухта Клеопатра Бухта Клеопатра это завораживающие уединенное место. Вода очень чистая и прозрачная. Свое название бухта получила за то, что скала которая окружает бухту похожа на профиль Клеопатры. С бухты открываются красивые виды на море, горы. Пляж песчаный, глубина не большая. Поэтому отличное место для отдыха с детьми. Бухта Клеопатры является самой известной в Кемере. Тихая, живописная, завораживающая. Бухта Клеопатры поистине сказочное место. Пиратская Пещера Пиратская пещера небольшая природная достопримечательность. Пещера пиратов обязательно посещать, когда отправляются в морское путешествие. Это живописный грот, который можно посмотреть со стороны моря. Находится пиратская пещера не далеко от Кемера вдоль берега Средиземного моря. Существует легенда, что в пещере пряталась пираты, которые нападали на проходящие корабли. Все награбленое они прятали внутри грота. Возможно эти сокровища ещё там) самые любопытные туристы могут проверить! Приглашаем вас на экскурсию прогулка на яхте в Кемере.';
    const includes = [
      'Страховка',
      'Трансфер от/до отеля',
      'Анимационная представление «MegaStar Entertainment Team»',
      'Обед',
      'Комфортабельный автобус с кондиционером',
    ];
    const excludes = [
      'Личные расходы (фотографии, сувениры и т.д.)',
      'Любые напитки во время экскурсии',
      'Входной билет в античный город Фазелис (по желанию)',
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
      tourName: 'Прогулка на Корабле в Кемере',
      currency: 'attach_money',
      oldPrice: 20,
      adultPrice: 15,
      childPrice: 10,
      babyPrice: 0,
    };
    const tourDetails = {
      tourCost:
        "This tour is $15 for adults. It's $10 for childs ages 6-11. It is free for babies 0-5 years old.",
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
      hours: '8 Hours',
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
