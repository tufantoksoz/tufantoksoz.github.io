<template>
  <q-img
    v-if="$q.platform.is.desktop"
    class="bannerSizeDesktop"
    :src="imgDesktop"
  ></q-img>
  <q-img
    v-if="$q.platform.is.mobile"
    class="bannerSizeMobile"
    :src="imgMobile"
  ></q-img>

  <div class="pageContainer">
    <q-breadcrumbs class="text-brown q-pa-md q-gutter-sm">
      <template v-slot:separator>
        <q-icon size="1.5em" name="chevron_right" color="primary" />
      </template>

      <q-breadcrumbs-el label="Home" icon="home" to="/" />
      <q-breadcrumbs-el
        :label="breadCrumbsCategory"
        icon="category"
        :to="breadCrumbsCategoryRoute"
      />
      <q-breadcrumbs-el :label="breadCrumbsTourLabel" icon="tour" />
    </q-breadcrumbs>

    <q-separator />

    <div>
      <h1>{{ articleTitle }}</h1>
      <p>{{ articleSummaryText }}</p>

      <q-expansion-item
        expand-separator
        header-class="text-primary text-center"
        :label="expansionText"
        @update:model-value="toggle"
      >
        <q-card>
          <q-card-section>
            <p>{{ articleFullText }}</p>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-separator class="q-mb-lg" />

      <q-img class="q-mb-lg" :src="articleImg"></q-img>

      <q-expansion-item
        icon="info"
        label="TOUR INFO"
        header-class="text-primary"
        class="expansion"
        expand-separator
      >
        <q-card>
          <q-card-section>
            {{ tourInfoText }}
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-separator />

      <q-expansion-item
        icon="star"
        label="Includes / Excludes"
        header-class="text-primary"
        class="expansion"
        expand-separator
      >
        <div class="row">
          <div class="col">
            <q-card
              class="my-card q-pl-md q-pt-md"
              flat
              v-for="(item, index) in includes"
              :key="index"
            >
              <q-card-section horizontal>
                <q-icon
                  class="q-pa-md q-gutter-md"
                  name="check_circle"
                  color="positive"
                  size="24px"
                ></q-icon>
                {{ item }}
              </q-card-section>
            </q-card>
          </div>

          <div class="col">
            <q-card
              class="my-card q-pl-md q-pt-md"
              flat
              v-for="(item, index) in excludes"
              :key="index"
            >
              <q-card-section horizontal>
                <q-icon
                  class="q-pa-md q-gutter-md"
                  name="cancel"
                  color="negative"
                  size="24px"
                ></q-icon>
                {{ item }}
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-expansion-item>

      <q-separator />

      <q-expansion-item
        icon="event"
        label="Days & Time"
        header-class="text-primary"
        class="expansion"
      >
        <q-card>
          <q-card-section>
            {{ daysTimeText }}
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-separator />

      <h3 class="q-pl-lg q-mb-none">F.A.Q</h3>

      <div v-for="(item, index) in faq" :key="index">
        <q-expansion-item expand-separator icon="add" :label="item.label">
          <q-card>
            <q-card-section>
              {{ item.text }}
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </div>
    </div>

    <q-separator class="q-my-lg" />

    <div class="q-pa-md q-mr-none" style="max-width: 600px">
      <h3 class="text-center">Booking Form</h3>
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-pa-md q-gutter-md shadow-5"
      >
        <q-input
          filleds
          v-model="name"
          label="Your name *"
          hint="Name and surname"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Please type name and surname',
          ]"
        />

        <q-input
          filleds
          type="date"
          v-model="date"
          label="Select Date"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Please select date',
            (val) => (val > 0 && val < 100) || 'Please type a real age',
          ]"
        />

        <q-toggle v-model="accept" label="I accept the license and terms" />

        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </div>
  </div>
</template>

<style lang="sass" scoped>

h1
  font-size: 28px
  font-weight: bold

h3
  font-size: 24px
  font-weight: bold

p
  font-size: 22px

.my-card
  width: 100%
  max-width: 350px

.expansion
  font-size: large
</style>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'TourPage',
  props: {
    imgDesktop: String,
    imgMobile: String,
    breadCrumbsCategory: String,
    breadCrumbsCategoryRoute: String,
    breadCrumbsTourLabel: String,
    articleTitle: String,
    articleSummaryText: String,
    articleFullText: String,
    articleImg: String,
    tourInfoText: String,
    includes: Array,
    excludes: Array,
    daysTimeText: String,
    faq: Object,
    price: Number,
  },
  setup() {
    let expansionText = ref('Read More...');

    const $q = useQuasar();

    const name = ref(null);
    const date = ref(Date);
    const accept = ref(false);

    const toggle = (e: boolean) => {
      if (e == true) {
        expansionText.value = 'Read Less';
      } else {
        expansionText.value = 'Read More...';
      }
    };

    return {
      toggle,
      expansionText,
      name,
      date,
      accept,

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first',
          });
        } else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted',
          });
        }
      },

      onReset() {
        name.value = null;
        accept.value = false;
      },
    };
  },
});
</script>
