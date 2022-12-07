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
      <q-card class="my-card">
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
      <q-card class="my-card">
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
      <q-card class="my-card">
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
      <q-card class="my-card">
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
      <q-card class="my-card">
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
      <q-card class="my-card">
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
      :method="adrasanSuluadaBoatTour"
    ></tour-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import TourCard from 'components/TourCard.vue';
import { useRouter } from 'vue-router';
import adrasanImage from 'assets/popular-excursions/adrasan-suluada-boat-tour.jpg';

export default defineComponent({
  name: 'IndexPage',
  components: { 'tour-card': TourCard },
  errorCaptured(err, vm, info) {
    console.log('err');
    console.log(err);
    console.log('*********************');

    console.log('vm');
    console.log(vm);
    console.log('*********************');

    console.log('info');
    console.log(info);
    console.log('*********************');
  },
  setup() {
    const router = useRouter();
    const adrasanSuluadaBoatTour = () => {
      router.push({ path: '/adrasan-suluada-boat-tour' });
    };

    return {
      adrasanSuluadaBoatTour,
      slide: ref(1),
      adrasanImage,
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
