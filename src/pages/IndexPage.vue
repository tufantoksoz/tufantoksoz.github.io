<template>
  <q-img
    v-if="$q.platform.is.desktop"
    class="bannerSizeDesktop"
    src="https://via.placeholder.com/1500x500"
  ></q-img>
  <q-img
    v-if="$q.platform.is.mobile"
    class="bannerSizeMobile"
    src="https://via.placeholder.com/400x300"
  ></q-img>
  <q-page class="pageContainer justify-evenly q-pb-md">
    <div class="text-center">
      <h1 class="q-mb-sm">H1 TITLE</h1>
      <p class="q-mt-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      </p>
    </div>

    <div class="row justify-center">
      <div class="justify-center q-pa-md q-gutter-md">
        <q-intersection once transition="scale" class="card-item">
          <q-card class="my-card cursor-pointer">
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
          <q-card class="my-card cursor-pointer">
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
          <q-card class="my-card cursor-pointer">
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
          <q-card class="my-card cursor-pointer">
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
          <q-card class="my-card cursor-pointer">
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
          <q-card class="my-card cursor-pointer">
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

    <div class="row justify-center">
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
.my-card
  width: 400px
  max-width: 400px

.card-item
  height: 200
  width: 400px

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
    console.log(process.env.bannerUrl);
    const test = () => {
      router.push({ path: '/testPost' });
    };

    return { test };
  },
});
</script>
