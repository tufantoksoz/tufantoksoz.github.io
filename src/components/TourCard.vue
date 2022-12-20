<template>
  <div class="q-pa-md q-gutter-md">
    <q-intersection once transition="scale" class="card-item">
      <q-card class="cursor-pointer my-card" @click="routeTo" v-ripple bordered>
        <img :src="image" height="180" />
        <q-card-section>
          <div class="row no-wrap items-center">
            <div class="col-9 my-text-font text-h5" style="font-size: 18px">
              {{ title }}
            </div>
            <div class="col-3">
              <div class="row float-right">
                <span class="text-body1 text-strike text-grey">
                  {{ currencyType }}{{ oldPrice }}</span
                >
              </div>
              <div class="row float-right items-center">
                <q-icon color="green" size="24px" :name="currency" />
                <span class="text-h5" style="margin: 0px">{{ price }}</span>
              </div>
            </div>
          </div>

          <div class="row">
            <q-list class="col">
              <q-item>
                <q-item-section class="q-pr-sm" avatar>
                  <q-icon color="primary" name="calendar_today" />
                </q-item-section>

                <q-item-section>
                  <q-item-label class="labelFont">{{ date }}</q-item-label>
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section class="q-pr-sm" avatar>
                  <q-icon color="red" name="schedule" />
                </q-item-section>

                <q-item-section>
                  <q-item-label class="labelFont">{{ hours }}</q-item-label>
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section class="q-pr-sm" avatar>
                  <q-icon color="green" name="payments" />
                </q-item-section>

                <q-item-section>
                  <q-item-label class="labelFont">Pay on the day</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>

            <div class="col">
              <q-list class="col">
                <q-item>
                  <q-item-section class="q-pr-sm" avatar>
                    <q-icon color="yellow-7" name="restaurant" />
                  </q-item-section>

                  <q-item-section>
                    <q-item-label class="labelFont">{{ food }}</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item>
                  <q-item-section class="q-pr-sm" avatar>
                    <q-icon color="brown-5" name="directions_bus" />
                  </q-item-section>

                  <q-item-section>
                    <q-item-label class="labelFont">{{
                      transfer
                    }}</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item>
                  <q-item-section class="q-pr-sm" avatar>
                    <q-icon color="purple-9" name="location_on" />
                  </q-item-section>

                  <q-item-section>
                    <q-item-label class="labelFont">{{
                      location
                    }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-intersection>
  </div>
</template>

<style lang="sass" scoped>
.card-item
  height: 450px
  width: 300px

.my-card
  height: 450px
  width: 300px

.q-item__section--avatar
  min-width: 0px

.labelFont
  font-size: 13px
  font-family: "Poppins", sans-serif
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'TourCard',
  props: {
    image: String,
    title: String,
    currency: String,
    oldPrice: String,
    price: String,
    date: String,
    hours: String,
    food: String,
    transfer: String,
    location: String,
    routeName: { type: String, required: true },
  },

  setup(props) {
    const router = useRouter();

    const currencyType = props.currency == 'euro' ? '€' : '$';

    const routeTo = () => {
      router.push({ path: props.routeName });
    };

    return { routeTo, currencyType };
  },
});
</script>
