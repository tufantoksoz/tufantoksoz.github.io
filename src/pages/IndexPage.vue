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
          src="../assets/index-page-slider/antalya-1.jpg"
          no-spinner
        >
        </q-img>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="slideZoomIn q-pa-none">
        <q-img
          fit="fill"
          height="500px"
          src="../assets/index-page-slider/antalya-2.jpg"
          no-spinner
        >
        </q-img>
      </q-carousel-slide>

      <q-carousel-slide :name="3" class="slideZoomIn q-pa-none">
        <q-img
          fit="fill"
          height="500px"
          src="../assets/index-page-slider/antalya-3.jpg"
          no-spinner
        >
        </q-img>
      </q-carousel-slide>

      <q-carousel-slide :name="4" class="slideZoomIn q-pa-none">
        <q-img
          fit="fill"
          height="500px"
          src="../assets/index-page-slider/antalya-4.jpg"
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
          src="../assets/homepage-icons/customer-service.png"
        />
      </div>

      <div class="q-pt-sm">
        <span>{{ $t('724Support') }}</span>
      </div>
    </div>

    <div class="col-xs-6 col-sm-4 col-md-4 q-pa-md">
      <div>
        <q-img class="iconSize" src="../assets/homepage-icons/insurance.png" />
      </div>

      <div class="q-pt-sm">
        <span>{{ $t('freeInsurance') }}</span>
      </div>
    </div>

    <div class="col-xs-6 col-sm-4 col-md-4 q-pa-md">
      <div>
        <q-img
          class="iconSize"
          src="../assets/homepage-icons/pay-on-the-day.png"
        />
      </div>

      <div class="q-pt-sm">
        <span>{{ $t('payOnTheDay') }}</span>
      </div>
    </div>

    <div class="col-xs-6 col-sm-4 col-md-4 q-pa-md">
      <div>
        <q-img class="iconSize" src="../assets/homepage-icons/transfer.png" />
      </div>

      <div class="q-pt-sm">
        <span>{{ $t('freeTransfer') }}</span>
      </div>
    </div>

    <div class="col-xs-6 col-sm-4 col-md-4 q-pa-md">
      <div>
        <q-img
          class="iconSize"
          src="../assets/homepage-icons/no-prepaid-booking.png"
        />
      </div>

      <div class="q-pt-sm">
        <span>{{ $t('noPrePaidBooking') }}</span>
      </div>
    </div>

    <div class="col-xs-6 col-sm-4 col-md-4 q-pa-md">
      <div>
        <q-img
          class="iconSize"
          src="../assets/homepage-icons/cheap-price.png"
        />
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
          src="../assets/popular-destinations/belek.jpg"
        >
        </q-img>
        <span
          class="absolute-bottom text-center text-white text-overline q-pb-sm text-bold"
          style="font-size: 18px"
        >
          Belek
        </span>
      </q-card>
    </div>

    <div class="col-md-4 q-ma-sm colSize">
      <q-card class="my-card" @click="routeKemer">
        <q-img
          class="imgSize zoom"
          src="../assets/popular-destinations/kemer.jpg"
        >
        </q-img>
        <span
          class="absolute-bottom text-center text-white text-overline q-pb-sm text-bold"
          style="font-size: 18px"
        >
          Kemer
        </span>
      </q-card>
    </div>

    <div class="col-md-4 q-ma-sm colSize">
      <q-card class="my-card" @click="routeAlanya">
        <q-img
          class="imgSize zoom"
          src="../assets/popular-destinations/alanya.jpg"
        >
        </q-img>
        <span
          class="absolute-bottom text-center text-white text-overline q-pb-sm text-bold"
          style="font-size: 18px"
        >
          Alanya
        </span>
      </q-card>
    </div>

    <div class="col-md-4 q-ma-sm colSize">
      <q-card class="my-card" @click="routeManavgat">
        <q-img
          class="imgSize zoom"
          src="../assets/popular-destinations/manavgat.jpg"
        >
        </q-img>
        <span
          class="absolute-bottom text-center text-white text-overline q-pb-sm text-bold"
          style="font-size: 18px"
        >
          Manavgat
        </span>
      </q-card>
    </div>

    <div class="col-md-4 q-ma-sm colSize">
      <q-card class="my-card" @click="routeSide">
        <q-img
          class="imgSize zoom"
          src="../assets/popular-destinations/side.jpg"
        >
        </q-img>
        <span
          class="absolute-bottom text-center text-white text-overline q-pb-sm text-bold"
          style="font-size: 18px"
        >
          Side
        </span>
      </q-card>
    </div>

    <div class="col-md-4 q-ma-sm colSize">
      <q-card class="my-card" @click="routeAdrasan">
        <q-img
          class="imgSize zoom"
          src="../assets/popular-destinations/adrasan.jpg"
        >
        </q-img>
        <span
          class="absolute-bottom text-center text-white text-overline q-pb-sm text-bold"
          style="font-size: 18px"
        >
          Adrasan
        </span>
      </q-card>
    </div>
  </div>

  <div class="text-center q-gutter-md q-pt-xl q-mb-none">
    <h4 class="my-title-font-bold" style="margin-bottom: 0">
      {{ $t('popularExcursions') }}
    </h4>
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
      :food="$t('dinner')"
      :transfer="$t('transfer')"
      location="Adrasan"
      :routeName="adrasanSuluadaBoatTourPath"
    />
    <tour-card
      :image="goynukCanyonImage"
      title="Экскурсия в Каньон Гейнюк"
      date="Пн. Ср.  Пт."
      hours="4 часа"
      currency="attach_money"
      oldPrice="18"
      price="13"
      :food="$t('dinner')"
      :transfer="$t('transfer')"
      location="Göynük"
      :routeName="goynukCanyonPath"
    />

    <tour-card
      :image="taziCanyonFourPackImage"
      title="Экскурсия в Тазы каньон - 4 в 1"
      date="Каждый день"
      hours="9-10 часов"
      currency="attach_money"
      oldPrice="34"
      price="30"
      :food="$t('dinner')"
      :transfer="$t('transfer')"
      location="Manavgat"
      :routeName="taziCanyonFourPackPath"
    />

    <tour-card
      :image="antalyaCityTourImage"
      title="Экскурсия по Анталии из Кемера"
      date="Вт. Пт. Вс."
      hours="9 часов"
      currency="attach_money"
      oldPrice="28"
      price="25"
      :food="$t('dinner')"
      :transfer="$t('transfer')"
      location="Antalya"
      :routeName="antalyaCityTourPath"
    />

    <tour-card
      :image="demreMyraKekovaImage"
      title="Экскурсия в Демре Мира Кекова"
      date="Вт. Чт. Вс."
      hours="9-10 часов"
      currency="attach_money"
      oldPrice="28"
      price="25"
      :food="$t('dinner')"
      :transfer="$t('transfer')"
      location="Antalya"
      :routeName="demreMyraKekovaPath"
    />

    <tour-card
      :image="pamukkaleTourFromKemerImage"
      title="Памуккале из Кемера"
      date="Вт. Вс."
      hours="14 часов"
      currency="attach_money"
      oldPrice="42"
      price="35"
      :food="$t('dinner')"
      :transfer="$t('transfer')"
      location="Kemer"
      :routeName="pamukkaleTourFromKemerPath"
    />

    <tour-card
      :image="kemerYachtTourImage"
      title="Прогулка на Яхте в Кемере"
      date="Вт. Чт. Сб."
      hours="7 часов"
      currency="attach_money"
      oldPrice="18"
      price="15"
      :food="$t('dinner')"
      :transfer="$t('transfer')"
      location="Kemer"
      :routeName="kemerYachtTourPath"
    />

    <tour-card
      :image="turkishBathImage"
      title="Турецкая Баня (Хамам) в Кемере"
      date="Каждый день"
      hours="2,5 часов"
      currency="attach_money"
      oldPrice="18"
      price="15"
      :food="$t('dinner')"
      :transfer="$t('transfer')"
      location="Kemer"
      :routeName="turkishBathPath"
    />

    <tour-card
      :image="tahtaliJeepSafariImage"
      title="Джип Сафари на Гору Тахталы & Бейдаглары"
      date="Каждый день"
      hours="8 часов"
      currency="attach_money"
      oldPrice="29"
      price="25"
      :food="$t('dinner')"
      :transfer="$t('transfer')"
      location="Kemer"
      :routeName="tahtaliJeepSafariPath"
    />

    <tour-card
      :image="kemerDivingImage"
      title="Дайвинг в Кемере"
      date="Каждый день"
      hours="8 часов"
      currency="attach_money"
      oldPrice="30"
      price="25"
      :food="$t('dinner')"
      :transfer="$t('transfer')"
      location="Kemer"
      :routeName="kemerDivingPath"
    />

    <tour-card
      :image="olymposTourImage"
      title="Экскурсия в Олимпос"
      date="Каждый день"
      hours="8 часов"
      currency="attach_money"
      oldPrice="27"
      price="25"
      :food="$t('dinner')"
      :transfer="$t('transfer')"
      location="Kemer"
      :routeName="olymposTourPath"
    />

    <tour-card
      :image="suluCehennemAdasiTourImage"
      title="Экскурсия на Остров Сулу ада (на закате)"
      date="Каждый день"
      hours="8 часов"
      currency="attach_money"
      oldPrice="27"
      price="25"
      :food="$t('dinner')"
      :transfer="$t('transfer')"
      location="Kemer"
      :routeName="suluCehennemAdasiTourPath"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import TourCard from 'components/TourCard.vue';
import adrasanSuluadaBoatTourImage from 'assets/popular-excursions/adrasan-suluada-boat-tour.jpg';
import goynukCanyonImage from 'assets/popular-excursions/goynuk-canyon.webp';
import taziCanyonFourPackImage from 'assets/tour-images/tazi-canyon-four-pack/card/tazi-canyon-four-pack.webp';
import antalyaCityTourImage from 'assets/tour-images/antalya-city-tour/card/antalya-city-tour.webp';
import demreMyraKekovaImage from 'assets/tour-images/demre-myra-kekova/card/demre-myra-kekova.webp';
import pamukkaleTourFromKemerImage from 'assets/tour-images/pamukkale-tour-from-kemer/desktop/pamukkale-tour-from-kemer.webp';
import kemerYachtTourImage from 'assets/tour-images/kemer-yacht-tour/card/kemer-yacht-tour.webp';
import turkishBathImage from 'assets/tour-images/turkish-bath/card/turkish-bath.webp';
import tahtaliJeepSafariImage from 'assets/tour-images/tahtali-jeep-safari/card/tahtali-jeep-safari.webp';
import kemerDivingImage from 'assets/tour-images/kemer-diving/card/kemer-diving.webp';
import olymposTourImage from 'assets/tour-images/olympos-tour/card/olympos-tour.webp';
import suluCehennemAdasiTourImage from 'assets/tour-images/sulu-cehennem-adasi/card/sulu-cehennem-adasi.webp';

import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'IndexPage',
  components: { 'tour-card': TourCard },
  setup() {
    const router = useRouter();
    const adrasanSuluadaBoatTourPath = '/adrasan-suluada-boat-tour';
    const goynukCanyonPath = '/goynuk-canyon-tour';
    const taziCanyonFourPackPath = '/tazi-canyon-four-pack-tour';
    const antalyaCityTourPath = '/antalya-city-tour';
    const demreMyraKekovaPath = '/demre-myra-kekova-tour';
    const pamukkaleTourFromKemerPath = '/pamukkale-tour-from-kemer';
    const kemerYachtTourPath = '/yacht-tour-from-kemer';
    const turkishBathPath = '/turkish-bath';
    const tahtaliJeepSafariPath = '/tahtali-jeep-safari';
    const kemerDivingPath = '/kemer-diving';
    const olymposTourPath = '/olympos-tour';
    const suluCehennemAdasiTourPath = '/sulu-cehennem-adasi-tour';
    return {
      slide: ref(1),

      adrasanSuluadaBoatTourPath,
      goynukCanyonPath,
      taziCanyonFourPackPath,
      antalyaCityTourPath,
      demreMyraKekovaPath,
      pamukkaleTourFromKemerPath,
      kemerYachtTourPath,
      turkishBathPath,
      tahtaliJeepSafariPath,
      kemerDivingPath,
      olymposTourPath,
      suluCehennemAdasiTourPath,

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
  font-size: 7vh
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
