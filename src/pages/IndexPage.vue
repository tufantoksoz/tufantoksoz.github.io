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
    class="infoBox row rounded-borders relative-position items-center shadow-3"
  >
    <q-item class="col-sm-4">
      <q-item-section avatar>
        <q-icon color="white" name="credit_score" size="5em" />
      </q-item-section>

      <q-item-section>
        <q-item-label class="text-white my-title-font-bold"
          >BEST PRICE GUARANTEE</q-item-label
        >
        <q-item-label class="labelFont my-text-font" overline
          >Price match within 48 hours of order confirmation</q-item-label
        >
      </q-item-section>
    </q-item>
    <q-item class="col-sm-4">
      <q-item-section avatar>
        <q-icon color="white" name="support_agent" size="5em" />
      </q-item-section>

      <q-item-section>
        <q-item-label class="text-white my-title-font-bold"
          >7/24 SUPPORT</q-item-label
        >
        <q-item-label class="labelFont my-text-font" overline
          >We are here to help, before, during, and even after your
          trip</q-item-label
        >
      </q-item-section>
    </q-item>
    <q-item class="col-sm-4">
      <q-item-section avatar>
        <q-icon color="white" name="star" size="5em" />
      </q-item-section>

      <q-item-section>
        <q-item-label class="text-white my-title-font-bold"
          >NO PREPAYMENT</q-item-label
        >
        <q-item-label class="labelFont my-text-font" overline
          >Book without prepayment. Pay on the day</q-item-label
        >
      </q-item-section>
    </q-item>
  </div>

  <div>
    <q-page class="justify-evenly q-pb-md q-px-lg">
      <div class="text-center">
        <h1 class="q-ma-xs my-title-font-bold">Popular Destinations</h1>
      </div>

      <div class="q-pa-md row justify-center q-gutter-md">
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
    </q-page>
  </div>
</template>

<style lang="sass" scoped>
.my-card
  overflow: hidden
  width: 100%
  max-width: 300px

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
  background: #f2994a
  background: -webkit-linear-gradient(to right, #f2c94c, #f2994a)
  background: linear-gradient(to right, #f2c94c, #f2994a)
  max-width: 1200px
  margin: auto
  height: 200px
  z-index: 1
  top: -50px

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

@media screen and (max-width: 600px)
  .infoBox
    top: 0
    width: 100%
    height: 300px

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

<script lang="ts">
import { defineComponent, ref } from 'vue';
import TourCard from 'components/TourCard.vue';
import { useRouter } from 'vue-router';
import adrasanImage from 'assets/popular-excursions/adrasan-suluada-boat-tour.jpg';

export default defineComponent({
  name: 'IndexPage',
  components: { 'tour-card': TourCard },
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
