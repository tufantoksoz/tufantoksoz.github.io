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
        <h1 class="text-red text-h4">Экскурсия в Каньон Гёйнюк</h1>

        <p>
          Ещё одно прекраснейшее место в Кемере! Каньон Гейнюк! Где красивейшая
          бирюзовая вода горной реки сочетается в великолепными видами гор!
          Здесь можно бродить часами, наслаждаясь прекраснейшими видами природы.
          Ещё есть возможность пройтись по горной реке к водопаду. Порой скалы
          можно достать руками с обеих сторон. Вода в реке очень освежающая. Это
          непередаваемо словами! Это нужно увидеть самим!
        </p>
      </template>

      <template v-slot:articleFullText>
        <p>
          Каньон Гейнюк расположен в 9 км от Кемера, в поселке с одноименным
          названием. Слово «гейнюк» в переводе на русский означает «плодородная
          долина в месте небесно-голубого соединения». Равнину окружают горы
          Бедаглары, в которых берёт начало небольшая горная река,
          сформировавшая на своем пути красивейший каньон. Прямо около входа
          расположилось озеро с красивыми беседками. Далее горная дорога идëт,
          петляя, вдоль реки. По дороге открываются невероятной красоты природы.
          Добравшись до каньона можно заняться «каньонингом» — прохождением по
          реке. Каньон Гейнюк в Кемере стоит того, чтобы быть увиденным! На дне
          ущелья протекает река, прорубившая этот красивейший каньон. В
          окружении разноцветных гор она образует несколько сине-зеленых озёр с
          чистейшей водой и рыбками. Дальняя часть ущелья находится в воде. Вода
          там очень холодная, но чистая и необычно-красивого голубого цвета. А
          тех, кто дойдет до конца каньона, ожидает мощный водопад. Это место
          обязательно к посещению! Каньон Гёйнюк - это захватывающее место, не
          только своей красотой, но и преодолением препятствий, холодная водичка
          вначале сменяется прохождением по каменистым участкам, затем
          карабканье по лестнице или через водопад - на выбор! Ты получаешь
          адреналин от невероятной красоты и соревнования с природой! Каньон
          Гёйнюк понравится активным туристам, которые смогут преодолеть
          достаточно трудный путь по каньону. Здесь нужно много ходить пешком,
          иногда плыть, местами идти по колени в воде, местами преодолевать
          пороги, а местами пролазить между скал. Температура воды в этом ущелье
          даже в самые жарки дни не поднимается выше 15-18 градусов. Каньон
          Гёйнюк, расположена между Анталией и Кемером. Низменности этой долины
          покрыты экзотической растительностью. Здесь произрастают олеандры,
          пальмы, кактусы. Равнина окружена высокими и величественными горами
          Бедаглары, в которых берет своё начало небольшая горная река. Она
          извивается, создавая на своем пути замысловатые ансамбли ущелий и
          скал. Каньон реки является природным памятником и манит к себе
          туристов со всего мира. Посетить каньон Гейнюк однозначно стоит! Здесь
          другой мир, другая планета! Каньон Гейнюк – место, где можно созерцать
          первозданную красоту, здесь все осталось таким же, как и десять тысяч
          лет назад. Стены ущелья раскрашены в самые неожиданные цвета: чёрный,
          белый, оранжевый и даже зеленый. Невообразимая расцветка поражает,
          ничего подобного в Турции больше не найти! Небольшие потоки воды,
          стекающие по скалам, подпитывают буйную растительность. В этом месте
          высота скал составляет более 300 метров, а глубина горной реки
          достигает шести метров. Вы будете карабкаться через валуны,
          напоминающие мифических персонажей, пересекать водные потоки вброд, по
          каменным переправам и подвесным мостам. Щуриться от солнца, играющего
          в струях искристых водопадов. У вас перехватит дыхание от восторга,
          при виде смыкающихся над головой гигантских скал. Вам будет трудно
          поверить, что всего несколько сотен метров отделяют вас от современной
          цивилизации!
        </p>
      </template>
    </tour-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TourPage from 'components/TourPage.vue';
import imgDesktop from 'assets/tour-images/goynuk-canyon/desktop/goynuk-canyon-image.webp';
import imgMobile from 'assets/tour-images/goynuk-canyon/mobile/goynuk-canyon.webp';
import slider1 from 'assets/tour-images/goynuk-canyon/slider/goynuk-canyon-1.webp';
import slider2 from 'assets/tour-images/goynuk-canyon/slider/goynuk-canyon-2.webp';
import slider3 from 'assets/tour-images/goynuk-canyon/slider/goynuk-canyon-3.webp';
import articleImg from 'assets/tour-images/goynuk-canyon/article/goynuk-canyon.webp';

export default defineComponent({
  components: { 'tour-page': TourPage },
  setup() {
    const breadCrumbsCategory = 'Kemer';
    const breadCrumbsCategoryRoute = '/antalya/kemer';
    const breadCrumbsTourLabel = 'Экскурсия в Каньон Гёйнюк';

    const bookingForm = {
      tourName: 'Экскурсия в Каньон Гёйнюк',
      currency: 'attach_money',
      oldPrice: 15,
      adultPrice: 13,
      childPrice: 10,
      babyPrice: 0,
      adultAge: '+12',
      childAge: '6-11',
      babyAge: '0-5',
    };

    const sliderImages = [slider1, slider2, slider3];

    const includes = [
      'Трансфер от отеля и до отеля',
      'Страховка',
      'Входной билет',
    ];

    const excludes = [
      'Любые личные расходы (фотографии, сувениры и т.д.)',
      'Любые напитки во время экскурсии',
      'Обед',
      'Зиплайн',
      'Гидрокостюм в Гейнюк Каньоне (по желанию)',
    ];

    const tourDetails = {
      tourCost: `This tour is ${bookingForm.adultPrice} USD for adults. It's ${bookingForm.childPrice} USD for childs ages ${bookingForm.childAge}. It is free for babies ${bookingForm.babyAge} years old.`,
      itemsBring: [
        'Фотоаппарат',
        'Полотенце',
        'Купальник',
        'Крем от загара',
        'Солнцезащитные очки',
        'Деньги на личные расходы',
      ],

      departureTimes: [
        'Из отелей Чамюва: 13:30',
        'Из отелей Кириш: 13:45',
        'Из отелей Кемера : 14:00',
        'Из отелей Гейнюк: 14:15',
        'Из отелей Бельдибы: 14:15',
      ],
      returnTimes: ['Через 4 часа после времени трансфера из отелей'],
      distance: [
        'от Кемера - 13 км',
        'от Анталии - 37 км',
        'от Сиде - 111 км',
        'от Алании - 171 км',
      ],

      hours: '4 часа',
      days: 'Пн. Ср. Пт.',
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

    // const relatedTours = [
    //   {
    //     tourName: 'Экскурсия в Тазы каньон - 4 в 1',
    //     price: '$30',
    //     routeName: 'taziCanyonFourPackTour',
    //   },
    //   { tourName: 'Дайвинг в Кемере', price: '', routeName: '' },
    // ];

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
