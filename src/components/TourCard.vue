<template>
  <div class="q-pa-md q-gutter-md">
    <q-intersection once transition="scale" class="card-item">
      <q-card class="cursor-pointer" flat @click="method" v-ripple>
        <img :src="image" />
        <q-card-section>
          <div class="row no-wrap items-center">
            <div class="col text-h5">{{ title }}</div>
            <q-icon class="text-h5" color="green" name="euro" />
            <p class="text-h5" style="margin: 0px">{{ price }}</p>
          </div>

          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-icon color="primary" name="calendar_today" />
              </q-item-section>

              <q-item-section>
                <q-item-label>{{ date }}</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon color="red" name="schedule" />
              </q-item-section>

              <q-item-section>
                <q-item-label>{{ hours }}</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon color="green" name="payments" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Pay on the day</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </q-intersection>
  </div>
</template>

<style lang="sass" scoped>
.card-item
  height: 430px
  width: 300px

.q-item__section--avatar
  min-width: 0px
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TourCard',
  props: {
    image: String,
    title: String,
    price: String,
    date: String,
    hours: String,
    method: { type: Function },
  },
});
</script>
