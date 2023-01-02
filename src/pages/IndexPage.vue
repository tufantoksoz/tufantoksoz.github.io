<template>
  <div class="sliderContainer">
    <div
      class="my-title-font-heavy sliderText q-pa-md absolute-full text-h1 text-center text-white text-bold flex flex-center"
    >
      Find The Best Daily Tours in Antalya Easily!
    </div>
    <q-carousel v-model="slide" :autoplay="5000" infinite height="500px">
      <q-carousel-slide :name="1" class="slideZoomIn q-pa-none">
        <q-img
          fit="fill"
          height="500px"
          src="~assets/index-page-slider/antalya-1.webp"
          no-spinner
        >
        </q-img>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="slideZoomIn q-pa-none">
        <q-img
          fit="fill"
          height="500px"
          src="~assets/index-page-slider/antalya-2.webp"
          no-spinner
        >
        </q-img>
      </q-carousel-slide>

      <q-carousel-slide :name="3" class="slideZoomIn q-pa-none">
        <q-img
          fit="fill"
          height="500px"
          src="~assets/index-page-slider/antalya-3.webp"
          no-spinner
        >
        </q-img>
      </q-carousel-slide>

      <q-carousel-slide :name="4" class="slideZoomIn q-pa-none">
        <q-img
          fit="fill"
          height="500px"
          src="~assets/index-page-slider/antalya-4.webp"
        >
        </q-img>
      </q-carousel-slide>
    </q-carousel>
  </div>

  <div
    class="infoBox row relative-position items-center my-text-font text-center q-my-lg q-mx-auto"
    style="font-size: 1.2em"
  >
    <div class="col-xs-6 col-sm-4 col-md-4 q-pa-md">
      <div>
        <q-img
          class="iconSize"
          src="~assets/homepage-icons/customer-service.webp"
        />
      </div>

      <div class="q-pt-sm">
        <span>{{ $t('724Support') }}</span>
      </div>
    </div>

    <div class="col-xs-6 col-sm-4 col-md-4 q-pa-md">
      <div>
        <q-img class="iconSize" src="~assets/homepage-icons/insurance.webp" />
      </div>

      <div class="q-pt-sm">
        <span>{{ $t('freeInsurance') }}</span>
      </div>
    </div>

    <div class="col-xs-6 col-sm-4 col-md-4 q-pa-md">
      <div>
        <q-img
          class="iconSize"
          src="~assets/homepage-icons/pay-on-the-day.webp"
        />
      </div>

      <div class="q-pt-sm">
        <span>{{ $t('payOnTheDay') }}</span>
      </div>
    </div>

    <div class="col-xs-6 col-sm-4 col-md-4 q-pa-md">
      <div>
        <q-img class="iconSize" src="~assets/homepage-icons/transfer.webp" />
      </div>

      <div class="q-pt-sm">
        <span>{{ $t('freeTransfer') }}</span>
      </div>
    </div>

    <div class="col-xs-6 col-sm-4 col-md-4 q-pa-md">
      <div>
        <q-img
          class="iconSize"
          src="~assets/homepage-icons/no-prepaid-booking.webp"
        />
      </div>

      <div class="q-pt-sm">
        <span>{{ $t('noPrePaidBooking') }}</span>
      </div>
    </div>

    <div class="col-xs-6 col-sm-4 col-md-4 q-pa-md">
      <div>
        <q-img class="iconSize" src="~assets/homepage-icons/cheap-price.webp" />
      </div>

      <div class="q-pt-sm">
        <span>{{ $t('bestPriceQuarantee') }}</span>
      </div>
    </div>
  </div>

  <div class="text-center">
    <h1 class="q-ma-xs my-title-font-bold">{{ $t('popularDestinations') }}</h1>
  </div>

  <div class="myContainer row justify-center">
    <div class="col-md-4 q-ma-sm colSize">
      <q-card class="my-card" @click="routeBelek">
        <q-img
          class="imgSize zoom"
          src="~assets/popular-destinations/belek.webp"
        >
        </q-img>
        <span
          class="absolute-bottom text-center text-white text-overline q-pb-sm text-bold"
          style="font-size: 18px"
        >
          {{ $t('belek') }}
        </span>
      </q-card>
    </div>

    <div class="col-md-4 q-ma-sm colSize">
      <q-card class="my-card" @click="routeKemer">
        <q-img
          class="imgSize zoom"
          src="~assets/popular-destinations/kemer.webp"
        >
        </q-img>
        <span
          class="absolute-bottom text-center text-white text-overline q-pb-sm text-bold"
          style="font-size: 18px"
        >
          {{ $t('kemer') }}
        </span>
      </q-card>
    </div>

    <div class="col-md-4 q-ma-sm colSize">
      <q-card class="my-card" @click="routeAlanya">
        <q-img
          class="imgSize zoom"
          src="~assets/popular-destinations/alanya.webp"
        >
        </q-img>
        <span
          class="absolute-bottom text-center text-white text-overline q-pb-sm text-bold"
          style="font-size: 18px"
        >
          {{ $t('alanya') }}
        </span>
      </q-card>
    </div>

    <div class="col-md-4 q-ma-sm colSize">
      <q-card class="my-card" @click="routeManavgat">
        <q-img
          class="imgSize zoom"
          src="~assets/popular-destinations/manavgat.webp"
        >
        </q-img>
        <span
          class="absolute-bottom text-center text-white text-overline q-pb-sm text-bold"
          style="font-size: 18px"
        >
          {{ $t('manavgat') }}
        </span>
      </q-card>
    </div>

    <div class="col-md-4 q-ma-sm colSize">
      <q-card class="my-card" @click="routeSide">
        <q-img
          class="imgSize zoom"
          src="~assets/popular-destinations/side.webp"
        >
        </q-img>
        <span
          class="absolute-bottom text-center text-white text-overline q-pb-sm text-bold"
          style="font-size: 18px"
        >
          {{ $t('side') }}
        </span>
      </q-card>
    </div>

    <div class="col-md-4 q-ma-sm colSize">
      <q-card class="my-card" @click="routeAdrasan">
        <q-img
          class="imgSize zoom"
          src="~assets/popular-destinations/adrasan.webp"
        >
        </q-img>
        <span
          class="absolute-bottom text-center text-white text-overline q-pb-sm text-bold"
          style="font-size: 18px"
        >
          {{ $t('adrasan') }}
        </span>
      </q-card>
    </div>
  </div>

  <div class="text-center q-gutter-md q-pt-xl q-mb-none">
    <h1 class="my-title-font-bold" style="margin-bottom: 0">
      {{ $t('popularExcursions') }}
    </h1>
  </div>

  <div class="row justify-center">
    <tour-card
      :image="adrasanSuluadaBoatTourImage"
      title="Остров Сулуада из Кемера"
      date="Каждый день"
      hours="4 часа "
      currency="attach_money"
      oldPrice="27"
      price="25"
      food="Ужин"
      transfer="Трансфер"
      location="Кемер"
      routeName="adrasanSuluadaBoatTour"
    />
    <tour-card
      :image="goynukCanyonImage"
      title="Экскурсия в Каньон Гейнюк"
      date="Пн. Ср.  Пт."
      hours="4 часа"
      currency="attach_money"
      oldPrice="18"
      price="13"
      food="Ужин"
      transfer="Трансфер"
      location="Кемер"
      routeName="goynukCanyonTour"
    />

    <tour-card
      :image="taziCanyonFourPackImage"
      title="Экскурсия в Тазы каньон - 4 в 1"
      date="Каждый день"
      hours="9-10 часов"
      currency="attach_money"
      oldPrice="34"
      price="30"
      food="Ужин"
      transfer="Трансфер"
      location="Кемер"
      routeName="taziCanyonFourPackTour"
    />

    <tour-card
      :image="antalyaCityTourImage"
      title="Экскурсия по Анталии из Кемера"
      date="Вт. Пт. Вс."
      hours="9 часов"
      currency="attach_money"
      oldPrice="28"
      price="25"
      food="Ужин"
      transfer="Трансфер"
      location="Кемер"
      routeName="antalyaCityTour"
    />

    <tour-card
      :image="demreMyraKekovaImage"
      title="Экскурсия в Демре Мира Кекова"
      date="Вт. Чт. Вс."
      hours="9-10 часов"
      currency="attach_money"
      oldPrice="28"
      price="25"
      food="Ужин"
      transfer="Трансфер"
      location="Кемер"
      routeName="demreMyraKekovaTour"
    />

    <tour-card
      :image="pamukkaleTourFromKemerImage"
      title="Памуккале из Кемера"
      date="Вт. Вс."
      hours="14 часов"
      currency="attach_money"
      oldPrice="42"
      price="35"
      food="Ужин"
      transfer="Трансфер"
      location="Кемер"
      routeName="pamukkaleTourFromKemer"
    />

    <tour-card
      :image="kemerYachtTourImage"
      title="Прогулка на Яхте в Кемере"
      date="Вт. Чт. Сб."
      hours="7 часов"
      currency="attach_money"
      oldPrice="18"
      price="15"
      food="Ужин"
      transfer="Трансфер"
      location="Кемер"
      routeName="yachtTourFromKemer"
    />

    <tour-card
      :image="turkishBathImage"
      title="Турецкая Баня (Хамам) в Кемере"
      date="Каждый день"
      hours="2,5 часов"
      currency="attach_money"
      oldPrice="18"
      price="15"
      food="Ужин"
      transfer="Трансфер"
      location="Кемер"
      routeName="turkishBath"
    />

    <tour-card
      :image="tahtaliJeepSafariImage"
      title="Джип Сафари на Гору Тахталы & Бейдаглары"
      date="Каждый день"
      hours="8 часов"
      currency="attach_money"
      oldPrice="29"
      price="25"
      food="Ужин"
      transfer="Трансфер"
      location="Кемер"
      routeName="tahtaliJeepSafari"
    />

    <tour-card
      :image="kemerDivingImage"
      title="Дайвинг в Кемере"
      date="Каждый день"
      hours="8 часов"
      currency="attach_money"
      oldPrice="30"
      price="25"
      food="Ужин"
      transfer="Трансфер"
      location="Кемер"
      routeName="kemerDiving"
    />

    <tour-card
      :image="olymposTourImage"
      title="Экскурсия в Олимпос"
      date="Каждый день"
      hours="8 часов"
      currency="attach_money"
      oldPrice="27"
      price="25"
      food="Ужин"
      transfer="Трансфер"
      location="Кемер"
      routeName="olymposTour"
    />

    <tour-card
      :image="suluCehennemAdasiTourImage"
      title="Экскурсия на Остров Сулу ада (на закате)"
      date="Каждый день"
      hours="8 часов"
      currency="attach_money"
      oldPrice="27"
      price="25"
      food="Ужин"
      transfer="Трансфер"
      location="Кемер"
      routeName="suluCehennemAdasiTour"
    />

    <tour-card
      :image="kemerAtvSafariImage"
      title="Квадро Сафари в Кемере"
      date="Каждый день"
      hours="3 часа"
      currency="attach_money"
      oldPrice="28"
      price="25"
      food="Ужин"
      transfer="Трансфер"
      location="Кемер"
      routeName="kemerAtvSafari"
    />

    <tour-card
      :image="kemerSnorkelDivingImage"
      title="Экскурсия Снорклинг в Кемере"
      date="Каждый день"
      hours="8 часов"
      currency="attach_money"
      oldPrice="28"
      price="25"
      food="Ужин"
      transfer="Трансфер"
      location="Кемер"
      routeName="kemerSnorkelDiving"
    />

    <tour-card
      :image="fishingInUlupinarImage"
      title="Пикник и Рыбалка в Улупинаре"
      date="Каждый день"
      hours="8 часов"
      currency="attach_money"
      oldPrice="32"
      price="30"
      food="Ужин"
      transfer="Трансфер"
      location="Кемер"
      routeName="fishingInUlupinar"
    />

    <tour-card
      :image="kemerHorseRidingImage"
      title="Прогулка на Лошадях в Кемере"
      date="Каждый день"
      hours="4 часа"
      currency="attach_money"
      oldPrice="34"
      price="30"
      food="Ужин"
      transfer="Трансфер"
      location="Кемер"
      routeName="kemerHorseRiding"
    />

    <tour-card
      :image="dolphinTourImage"
      title="Шоу Дельфинов в Кемере"
      date="Каждый день"
      hours="4-5 часов"
      currency="attach_money"
      oldPrice="34"
      price="30"
      food="Ужин"
      transfer="Трансфер"
      location="Кемер"
      routeName="dolphinTour"
    />

    <tour-card
      :image="dolusuParkTourImage"
      title="Аквапарк Долусу в Кемере"
      date="Каждый день"
      hours="8 часов"
      currency="attach_money"
      oldPrice="38"
      price="35"
      food="Ужин"
      transfer="Трансфер"
      location="Кемер"
      routeName="dolusuParkTour"
    />

    <tour-card
      :image="tahtaliTeleferikTourImage"
      title="Канатная Дорога Тахталы из Кемера"
      date="Каждый день"
      hours="4 часа"
      currency="attach_money"
      oldPrice="50"
      price="45"
      food="Ужин"
      transfer="Трансфер"
      location="Кемер"
      routeName="tahtaliTeleferikTour"
    />

    <tour-card
      :image="seaFishingTourImage"
      title="Морская Рыбалка в Кемере"
      date="Каждый день"
      hours="4 часа"
      currency="attach_money"
      oldPrice="60"
      price="50"
      food="Ужин"
      transfer="Трансфер"
      location="Кемер"
      routeName="seaFishingTour"
    />

    <tour-card
      :image="kapadokyaTourImage"
      title="Экскурсия в Каппадокию (Все Включено)"
      date="Пн. Вт. Чт. Сб. Вс."
      hours="2 дня"
      currency="attach_money"
      oldPrice="90"
      price="80"
      food="Ужин"
      transfer="Трансфер"
      location="Кемер"
      routeName="ikiGunlukKapadokyaTuruHerseyDahil"
    />

    <tour-card
      :image="adrasanYamacParasutu"
      title="Параглайдинг в Кемере Адрасан (1300m)"
      date="Каждый день"
      hours="6 часов"
      currency="attach_money"
      oldPrice="165"
      price="150"
      food="Ужин"
      transfer="Трансфер"
      location="Кемер"
      routeName="adrasanYamacParasutu"
    />

    <tour-card
      :image="pamukkaleSicakHavaBalonuImage"
      title="Полёт на Воздушном Шаре в Памуккале"
      date="Пон. Четв."
      hours="13-14 часов"
      currency="attach_money"
      oldPrice="230"
      price="210"
      food="Ужин"
      transfer="Трансфер"
      location="Кемер"
      routeName="pamukkaleSicakHavaBalonu"
    />

    <tour-card
      :image="kemerdenIstanbulTuruImage"
      title="Экскурсия в Стамбул из Кемера"
      date="Уточняйте у менеджера"
      hours="22 часа"
      currency="attach_money"
      oldPrice="219"
      price="199"
      food="Ужин"
      transfer="Трансфер"
      location="Кемер"
      routeName="kemerdenIstanbulTuru"
    />

    <tour-card
      :image="tahtaliYamacParasutuImage"
      title="Параглайдинг с Горы Тахталы 2365m"
      date="Каждый день"
      hours="5 часов"
      currency="attach_money"
      oldPrice="270"
      price="250"
      food="Ужин"
      transfer="Трансфер"
      location="Кемер"
      routeName="tahtaliYamacParasutu"
    />

    <tour-card
      :image="kemerdenAkvarayumTuruImage"
      title="Экскурсия в Аквариум из Кемера"
      date="Уточнить"
      hours="4 часа"
      currency="attach_money"
      oldPrice="60"
      price="55"
      food="Ужин"
      transfer="Трансфер"
      location="Кемер"
      routeName="kemerdenAkvarayumTuru"
    />

    <tour-card
      :image="landOfLegendsImage"
      title="Аквапарк The Land of Legends из Кемера"
      date="Пн. Вт. Ср. Чт. Пт. Сб."
      hours="10 часов"
      currency="attach_money"
      oldPrice="75"
      price="70"
      food="Ужин"
      transfer="Трансфер"
      location="Кемер"
      routeName="kemerdenLandOfLegends"
    />

    <tour-card
      :image="kemerDinoParkTourImage"
      title="Экскурсия в Динопарк в Кемере"
      date="Каждый день"
      hours="3 часа"
      currency="attach_money"
      oldPrice="34"
      price="30"
      food="Ужин"
      transfer="Трансфер"
      location="Кемер"
      routeName="kemerDinoParkTour"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import TourCard from 'components/TourCard.vue';
import adrasanSuluadaBoatTourImage from 'assets/tour-images/adrasan-suluada/card/adrasan-suluada.webp';
import goynukCanyonImage from 'assets/tour-images/goynuk-canyon/card/goynuk-canyon.webp';
import taziCanyonFourPackImage from 'assets/tour-images/tazi-canyon-four-pack/card/tazi-canyon-four-pack.webp';
import antalyaCityTourImage from 'assets/tour-images/antalya-city-tour/card/antalya-city-tour.webp';
import demreMyraKekovaImage from 'assets/tour-images/demre-myra-kekova/card/demre-myra-kekova.webp';
import pamukkaleTourFromKemerImage from 'assets/tour-images/pamukkale-tour-from-kemer/card/pamukkale-tour-from-kemer.webp';
import kemerYachtTourImage from 'assets/tour-images/kemer-yacht-tour/card/kemer-yacht-tour.webp';
import turkishBathImage from 'assets/tour-images/turkish-bath/card/turkish-bath.webp';
import tahtaliJeepSafariImage from 'assets/tour-images/tahtali-jeep-safari/card/tahtali-jeep-safari.webp';
import kemerDivingImage from 'assets/tour-images/kemer-diving/card/kemer-diving.webp';
import olymposTourImage from 'assets/tour-images/olympos-tour/card/olympos-tour.webp';
import suluCehennemAdasiTourImage from 'assets/tour-images/sulu-cehennem-adasi/card/sulu-cehennem-adasi.webp';
import kemerAtvSafariImage from 'assets/tour-images/kemer-atv-safari/card/kemer-atv-safari.webp';
import kemerSnorkelDivingImage from 'assets/tour-images/kemer-snorkel-diving/card/kemer-snorkel-diving.webp';
import fishingInUlupinarImage from 'assets/tour-images/fishing-in-ulupinar/card/fishing-in-ulupinar.webp';
import kemerHorseRidingImage from 'assets/tour-images/kemer-horse-riding/card/kemer-horse-riding.webp';
import dolphinTourImage from 'assets/tour-images/dolphin-tour/card/dolphin-tour.webp';
import dolusuParkTourImage from 'assets/tour-images/dolusu-park-tour/card/dolusu-park-tour.webp';
import tahtaliTeleferikTourImage from 'assets/tour-images/tahtali-teleferik-tour/card/tahtali-teleferik-tour.webp';
import seaFishingTourImage from 'assets/tour-images/sea-fishing/card/sea-fishing.webp';
import kapadokyaTourImage from 'assets/tour-images/cappadocia-tour/card/cappadocia-tour.webp';
import adrasanYamacParasutu from 'assets/tour-images/adrasan-yamac-parasutu/card/yamac-parasutu.webp';
import pamukkaleSicakHavaBalonuImage from 'assets/tour-images/pamukkale-sicak-hava-balonu/card/pamukkale-sicak-hava-balonu.webp';
import kemerdenIstanbulTuruImage from 'assets/tour-images/istanbul-tour/card/istanbul-tour.webp';
import tahtaliYamacParasutuImage from 'assets/tour-images/tahtali-yamac-parasutu/card/yamac-parasutu.webp';
import kemerdenAkvarayumTuruImage from 'assets/tour-images/akvaryum-turu/card/antalya-akvaryum.webp';
import landOfLegendsImage from 'assets/tour-images/land-of-legends/card/land-of-legends.webp';
import kemerDinoParkTourImage from 'assets/tour-images/dino-park/card/kemer-dino-park.webp';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'IndexPage',
  components: { 'tour-card': TourCard },
  setup() {
    const router = useRouter();

    return {
      slide: ref(1),

      adrasanSuluadaBoatTourImage,
      goynukCanyonImage,
      taziCanyonFourPackImage,
      antalyaCityTourImage,
      demreMyraKekovaImage,
      pamukkaleTourFromKemerImage,
      kemerYachtTourImage,
      turkishBathImage,
      tahtaliJeepSafariImage,
      kemerDivingImage,
      olymposTourImage,
      suluCehennemAdasiTourImage,
      kemerAtvSafariImage,
      kemerSnorkelDivingImage,
      fishingInUlupinarImage,
      kemerHorseRidingImage,
      dolphinTourImage,
      dolusuParkTourImage,
      tahtaliTeleferikTourImage,
      seaFishingTourImage,
      kapadokyaTourImage,
      adrasanYamacParasutu,
      pamukkaleSicakHavaBalonuImage,
      kemerdenIstanbulTuruImage,
      tahtaliYamacParasutuImage,
      kemerdenAkvarayumTuruImage,
      landOfLegendsImage,
      kemerDinoParkTourImage,

      routeBelek() {
        router.push({ name: 'belek' });
      },
      routeKemer() {
        router.push({ name: 'kemer' });
      },
      routeAlanya() {
        router.push({ name: 'alanya' });
      },
      routeManavgat() {
        router.push({ name: 'manavgat' });
      },
      routeSide() {
        router.push({ name: 'side' });
      },
      routeAdrasan() {
        router.push({ name: 'adrasan' });
      },
    };
  },
});
</script>

<style lang="sass" scoped>
.my-card
  overflow: hidden
  height: 200px
  width: 100%
  max-width: 300px
  margin: auto

.imgSize
  transition: transform .3s
  min-width: 200px
  max-width: 300px
  width: 100%
  height: 100%

.zoom:hover
  transform: scale(1.1)

h1
  font-size: 32px
  font-weight: bold

p
  font-size: 18px

.slideZoomIn
  position: absolute
  -webkit-animation: thing 15s, fadeOut .7s
  -o-animation: thing 15s, fadeOut .7s
  animation: thing 15s, fadeOut .7s

.labelFont
  font-size: 1em

.infoBox
  max-width: 1000px

.sliderContainer
  height: 500px
  width: auto
  position: relative

.sliderText
  position: absolute
  z-index: 1
  font-size: 10vw
  font-size: 6vh
  background: rgba(0, 0, 0, 0.47)

.colSize
  width: 300px
  height: 200px

.iconSize
  width: 6em
  height: 6em

.myContainer
  width: 1000px
  margin-left: auto
  margin-right: auto

@media screen and (max-width: 1000px)
  .infoBox
    width: auto

  .myContainer
    width: auto
    margin-left: auto
    margin-right: auto

@keyframes thing
  from
    transform: scale(1, 1)
  to
    transform: scale(1.15, 1.15)

@keyframes fadeOut
  from
    opacity: 0
  to
    opacity: 1
</style>
