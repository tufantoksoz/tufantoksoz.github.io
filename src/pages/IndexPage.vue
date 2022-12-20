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
        >
        </q-img>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="slideZoomIn q-pa-none">
        <q-img
          fit="fill"
          height="500px"
          src="../assets/index-page-slider/antalya-2.jpg"
        >
        </q-img>
      </q-carousel-slide>

      <q-carousel-slide :name="3" class="slideZoomIn q-pa-none">
        <q-img
          fit="fill"
          height="500px"
          src="../assets/index-page-slider/antalya-3.jpg"
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
        <span>7/24 Support</span>
      </div>
    </div>

    <div class="col-xs-6 col-sm-4 col-md-4 q-pa-md">
      <div>
        <q-img class="iconSize" src="../assets/homepage-icons/insurance.png" />
      </div>

      <div class="q-pt-sm">
        <span>Free Insurance</span>
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
        <span>Pay On The Day</span>
      </div>
    </div>

    <div class="col-xs-6 col-sm-4 col-md-4 q-pa-md">
      <div>
        <q-img class="iconSize" src="../assets/homepage-icons/transfer.png" />
      </div>

      <div class="q-pt-sm">
        <span>Free Transfer</span>
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
        <span>No Pre-paid Booking</span>
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
        <span>Best Price Guarantee</span>
      </div>
    </div>
  </div>

  <div class="text-center">
    <h1 class="q-ma-xs my-title-font-bold">Popular Destinations</h1>
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
      Popular Excursions
    </h4>
  </div>

  <div class="row justify-center">
    <tour-card
      :image="adrasanImage"
      title="Adrasan Suluada Island Boat Tour"
      date="Every Day"
      hours="8 Hours"
      currency="euro"
      oldPrice="38"
      price="30"
      food="Dinner"
      transfer="Transfer"
      location="Adrasan"
      :routeName="adrasanSuluadaPath"
    />
    <tour-card
      :image="goynukImage"
      title="Экскурсия в Каньон Гейнюк"
      date="Every Day"
      hours="4 Hours"
      currency="attach_money"
      oldPrice="18"
      price="13"
      food="Dinner"
      transfer="Transfer"
      location="Göynük"
      :routeName="goynukCanyonPath"
    />

    <tour-card
      :image="kemerTekneImage"
      title="Прогулка на Корабле в Кемере"
      date="Every Day"
      hours="8 Hours"
      currency="attach_money"
      oldPrice="20"
      price="15"
      food="Dinner"
      transfer="Transfer"
      location="Kemer"
      :routeName="kemerTeknePath"
    />

    <tour-card
      :image="kemerSnokerDalisImage"
      title="Снорклинг в Кемере"
      date="Every Day"
      hours="8 Hours"
      currency="attach_money"
      oldPrice="23"
      price="20"
      food="Dinner"
      transfer="Transfer"
      location="Kemer"
      :routeName="kemerSnokerDalisPath"
    />

    <tour-card
      :image="kemerDalisImage"
      title="Дайвинг в Кемере"
      date="Every Day"
      hours="8 Hours"
      currency="attach_money"
      oldPrice="26"
      price="23"
      food="Dinner"
      transfer="Transfer"
      location="Kemer"
      :routeName="kemerDalisPath"
    />

    <tour-card
      :image="kemerYunusImage"
      title="Дельфинарий в Кемере"
      date="Every Day"
      hours="5 Hours"
      currency="attach_money"
      oldPrice="27"
      price="25"
      food="Dinner"
      transfer="Transfer"
      location="Kemer"
      :routeName="kemerYunusPath"
    />

    <tour-card
      :image="kemerBuggyImage"
      title="Дельфинарий в Кемере"
      date="Every Day"
      hours="5 Hours"
      currency="attach_money"
      oldPrice="27"
      price="25"
      food="Dinner"
      transfer="Transfer"
      location="Kemer"
      :routeName="kemerBuggyPath"
    />

    <tour-card
      :image="suluadaGunbatimiImage"
      title="Экскурсия на остров Сулуада на Закате из Кемера"
      date="Every Day"
      hours="8 Hours"
      currency="attach_money"
      oldPrice="28"
      price="25"
      food="Dinner"
      transfer="Transfer"
      location="Kemer"
      :routeName="suluadaGunbatimiPath"
    />

    <tour-card
      :image="ulupinarBalikImage"
      title="Рыбалка в Улупинаре — Цена 2022"
      date="Every Day"
      hours="4 Hours"
      currency="attach_money"
      oldPrice="27"
      price="25"
      food="Dinner"
      transfer="Transfer"
      location="Kemer"
      :routeName="ulupinarBalikPath"
    />

    <tour-card
      :image="olimposYanartasUlupinarImage"
      title="Экскурсия в Олимпос-Химера-Улупинар из Кемера"
      date="Every Day"
      hours="5 Hours"
      currency="attach_money"
      oldPrice="27"
      price="25"
      food="Dinner"
      transfer="Transfer"
      location="Kemer"
      :routeName="olimposYanartasUlupinarPath"
    />

    <tour-card
      :image="demreKekovaImage"
      title="Экскурсия в Олимпос-Химера-Улупинар из Кемера"
      date="Every Day"
      hours="5 Hours"
      currency="attach_money"
      oldPrice="27"
      price="25"
      food="Dinner"
      transfer="Transfer"
      location="Kemer"
      :routeName="demreKekovaPath"
    />

    <tour-card
      :image="antalyCityImage"
      title="Обзорная Экскурсия по Анталии из Кемера"
      date="Every Day"
      hours="9 Hours"
      currency="attach_money"
      oldPrice="27"
      price="25"
      food="Dinner"
      transfer="Transfer"
      location="Kemer"
      :routeName="antalyaCityPath"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import TourCard from 'components/TourCard.vue';
import adrasanImage from 'assets/popular-excursions/adrasan-suluada-boat-tour.jpg';
import goynukImage from 'assets/popular-excursions/goynuk-canyon.webp';
import kemerTekneImage from 'assets/posts/tekne-tour/tekne-tour.jpeg';
import kemerSnokerDalisImage from 'assets/posts/kemer-snoker-dalis/kemer-dalis-1.jpeg';
import kemerDalisImage from 'assets/posts/kemer-dalis/kemer-dalis-1.jpeg';
import kemerYunusImage from 'assets/posts/kemer-yunus/kemer-yunus-1.jpeg';
import kemerBuggyImage from 'assets/posts/kemer-buggy/kemer-buggy-1.jpg';
import suluadaGunbatimiImage from 'assets/posts/suluada-gunbatimi/suluada-gunbatimi-1.jpeg';
import ulupinarBalikImage from 'assets/posts/ulupinar-balik-tutma/ulupinar-balik-tutma-2.jpeg';
import olimposYanartasUlupinarImage from 'assets/posts/olimpos-yanartas-ulupinar/olimpos-ulupinar-yanartas-1.webp';
import demreKekovaImage from 'assets/posts/demre-kekova/demre-kekova-1.jpg';
import antalyCityImage from 'assets/posts/antalya-city/antalya-city-1.jpeg';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'IndexPage',
  components: { 'tour-card': TourCard },
  setup() {
    const router = useRouter();
    const adrasanSuluadaPath = '/adrasan-suluada-boat-tour';
    const goynukCanyonPath = '/goynuk-canyon-tour';
    const kemerTeknePath = '/kemer-tekne-tour';
    const kemerSnokerDalisPath = '/kemer-snoker-dalis-tour';
    const kemerDalisPath = '/kemer-dalis-tour';
    const kemerYunusPath = '/kemer-yunus-tour';
    const kemerBuggyPath = '/kemer-buggy-tour';
    const suluadaGunbatimiPath = '/kemer-gun-batimi-suluada-tour';
    const ulupinarBalikPath = '/ulupinar-balik-tutma-tour';
    const olimposYanartasUlupinarPath = '/olimpos-yanartas-ulupinar-tour';
    const demreKekovaPath = '/demre-kekova-tour';
    const antalyaCityPath = '/antayla-city-tour';
    return {
      adrasanSuluadaPath,
      goynukCanyonPath,
      kemerTeknePath,
      kemerSnokerDalisPath,
      kemerDalisPath,
      kemerYunusPath,
      kemerBuggyPath,
      suluadaGunbatimiPath,
      ulupinarBalikPath,
      olimposYanartasUlupinarPath,
      demreKekovaPath,
      antalyaCityPath,
      slide: ref(1),
      adrasanImage,
      goynukImage,
      kemerTekneImage,
      kemerSnokerDalisImage,
      kemerDalisImage,
      kemerYunusImage,
      kemerBuggyImage,
      suluadaGunbatimiImage,
      ulupinarBalikImage,
      olimposYanartasUlupinarImage,
      demreKekovaImage,
      antalyCityImage,

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
