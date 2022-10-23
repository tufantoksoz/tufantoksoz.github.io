<template>
  <q-img
    class="bannerSizeDesktop desktop-only"
    src="https://via.placeholder.com/1500x500"
  ></q-img>
  <q-img
    class="bannerSizeMobile mobile-only"
    src="https://via.placeholder.com/400x300"
  ></q-img>

  <q-page class="justify-evenly q-pb-md q-px-lg">
    <div class="text-center">
      <h1 class="q-mb-sm">H1 TITLE</h1>
      <p class="q-mt-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      </p>
    </div>

    <div class="pageContainer row justify-center">
      <div class="justify-center q-pa-md q-gutter-md">
        <q-intersection once transition="scale" class="card-item">
          <q-card class="cursor-pointer" v-ripple>
            <q-img
              src="https://via.placeholder.com/400x267.png.png?text=Destinations+Img"
            >
              <div class="absolute-bottom text-subtitle2 text-center">
                Place Name
              </div>
            </q-img>
          </q-card>
        </q-intersection>
      </div>

      <div class="justify-center q-pa-md q-gutter-md">
        <q-intersection once transition="scale" class="card-item">
          <q-card class="cursor-pointer" v-ripple>
            <q-img
              src="https://via.placeholder.com/400x267.png.png?text=Destinations+Img"
            >
              <div class="absolute-bottom text-subtitle2 text-center">
                Place Name
              </div>
            </q-img>
          </q-card>
        </q-intersection>
      </div>

      <div class="justify-center q-pa-md q-gutter-md">
        <q-intersection once transition="scale" class="card-item">
          <q-card class="cursor-pointer" v-ripple>
            <q-img
              src="https://via.placeholder.com/400x267.png.png?text=Destinations+Img"
            >
              <div class="absolute-bottom text-subtitle2 text-center">
                Place Name
              </div>
            </q-img>
          </q-card>
        </q-intersection>
      </div>

      <div class="justify-center q-pa-md q-gutter-md">
        <q-intersection once transition="scale" class="card-item">
          <q-card class="cursor-pointer" v-ripple>
            <q-img
              src="https://via.placeholder.com/400x267.png.png?text=Destinations+Img"
            >
              <div class="absolute-bottom text-subtitle2 text-center">
                Place Name
              </div>
            </q-img>
          </q-card>
        </q-intersection>
      </div>

      <div class="justify-center q-pa-md q-gutter-md">
        <q-intersection once transition="scale" class="card-item">
          <q-card class="cursor-pointer" v-ripple>
            <q-img
              src="https://via.placeholder.com/400x267.png.png?text=Destinations+Img"
            >
              <div class="absolute-bottom text-subtitle2 text-center">
                Place Name
              </div>
            </q-img>
          </q-card>
        </q-intersection>
      </div>

      <div class="justify-center q-pa-md q-gutter-md">
        <q-intersection once transition="scale" class="card-item">
          <q-card class="cursor-pointer">
            <q-img
              src="https://via.placeholder.com/400x267.png.png?text=Destinations+Img"
            >
              <div class="absolute-bottom text-subtitle2 text-center">
                Place Name
              </div>
            </q-img>
          </q-card>
        </q-intersection>
      </div>
    </div>

    <div class="text-center q-gutter-md q-pt-xl q-mb-none">
      <h4 style="margin-bottom: 0; font-weight: bold">Excursions List</h4>
    </div>

    <div class="pageContainer row justify-center">
      <tour-card
        image="https://via.placeholder.com/400x300"
        title="Quad Safari"
        date="Every Day"
        hours="8 Hours"
        price="30"
        :method="test"
      ></tour-card>

      <tour-card
        image="https://via.placeholder.com/400x300"
        title="Quad Safari"
        date="Every Day"
        hours="8 Hours"
        price="30"
        :method="test"
      ></tour-card>

      <tour-card
        image="https://via.placeholder.com/400x300"
        title="Quad Safari"
        date="Every Day"
        hours="8 Hours"
        price="30"
        :method="test"
      ></tour-card>

      <tour-card
        image="https://via.placeholder.com/400x300"
        title="Quad Safari"
        date="Every Day"
        hours="8 Hours"
        price="30"
        :method="test"
      ></tour-card>
    </div>
  </q-page>
</template>

<style lang="sass" scoped>

.card-item
  width: 300px
  height: 200px

h1
  font-size: 32px
  font-weight: bold

p
  font-size: 18px
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import TourCard from 'components/TourCard.vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'IndexPage',
  components: { 'tour-card': TourCard },
  setup() {
    const router = useRouter();

    const test = () => {
      router.push({ path: '/testPost' });
    };

    return { test };
  },
});
</script>
