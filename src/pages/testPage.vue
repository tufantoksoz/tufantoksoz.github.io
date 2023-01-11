<template>
  <q-page class="container q-pa-xl">
    <div class="flexbox">
      <div class="one">
        <q-card class="q-mb-md" style="height: 100%">
          <q-card-section horizontal style="height: inherit">
            <q-img
              src="https://api.tatilmaximum.com.tr/uploads/banners/fb466538-97c3-4f24-9d80-81b68eda8b0e.jpg"
            >
              <div class="absolute-full text-subtitle2">
                <div class="q-pa-sm">
                  <div class="q-mb-md">
                    <span class="text-weight-bold" style="font-size: large"
                      >Antalya Çıkışlı Turlar</span
                    >
                  </div>

                  <div>
                    <q-btn
                      class="q-px-md q-py-none"
                      color="white"
                      text-color="indigo-10"
                      label="Tümünü Gör"
                      no-caps
                      dense
                    ></q-btn>
                  </div>
                </div>
              </div>
            </q-img>
          </q-card-section>
        </q-card>
      </div>
      <div class="two">
        <q-card class="q-mb-md" style="height: 100%">
          <q-card-section horizontal style="height: inherit">
            <q-img
              src="https://api.tatilmaximum.com.tr/uploads/banners/fb466538-97c3-4f24-9d80-81b68eda8b0e.jpg"
            >
              <div class="absolute-full text-subtitle2">
                <div class="q-pa-sm">
                  <div class="q-mb-md">
                    <span class="text-weight-bold" style="font-size: large"
                      >Kemer Çıkışlı Turlar</span
                    >
                  </div>

                  <div>
                    <q-btn
                      class="q-px-md q-py-none"
                      color="white"
                      text-color="indigo-10"
                      label="Tümünü Gör"
                      no-caps
                      dense
                    ></q-btn>
                  </div>
                </div>
              </div>
            </q-img>
          </q-card-section>
        </q-card>
      </div>
      <div class="three">
        <q-card class="q-mb-md" style="height: 100%">
          <q-card-section horizontal style="height: inherit">
            <q-img
              src="https://api.tatilmaximum.com.tr/uploads/banners/fb466538-97c3-4f24-9d80-81b68eda8b0e.jpg"
            >
              <div class="absolute-full text-subtitle2">
                <div class="q-pa-sm">
                  <div class="q-mb-md">
                    <span class="text-weight-bold" style="font-size: large"
                      >Belek Çıkışlı Turlar</span
                    >
                  </div>

                  <div>
                    <q-btn
                      class="q-px-md q-py-none"
                      color="white"
                      text-color="indigo-10"
                      label="Tümünü Gör"
                      no-caps
                      dense
                    ></q-btn>
                  </div>
                </div>
              </div>
            </q-img>
          </q-card-section>
        </q-card>
      </div>
      <div class="four">
        <q-card class="q-mb-md" style="height: 100%">
          <q-card-section horizontal style="height: inherit">
            <q-img
              src="https://api.tatilmaximum.com.tr/uploads/banners/fb466538-97c3-4f24-9d80-81b68eda8b0e.jpg"
            >
              <div class="absolute-full text-subtitle2">
                <div class="q-mb-sm">
                  <span class="text-weight-bold" style="font-size: large"
                    >Side Çıkışlı Turlar</span
                  >
                </div>

                <div>
                  <q-btn
                    class="q-px-md q-py-none"
                    color="white"
                    text-color="indigo-10"
                    label="Tümünü Gör"
                    no-caps
                    dense
                  ></q-btn>
                </div>
              </div>
            </q-img>
          </q-card-section>
        </q-card>

        <q-card class="q-mb-md" style="height: 100%">
          <q-card-section horizontal style="height: inherit">
            <q-img
              src="https://api.tatilmaximum.com.tr/uploads/banners/fb466538-97c3-4f24-9d80-81b68eda8b0e.jpg"
            >
              <div class="absolute-full text-subtitle2">
                <div class="q-mb-sm">
                  <span class="text-weight-bold" style="font-size: large"
                    >Alanya Çıkışlı Turlar</span
                  >
                </div>

                <div>
                  <q-btn
                    class="q-px-md q-py-none"
                    color="white"
                    text-color="indigo-10"
                    label="Tümünü Gör"
                    no-caps
                    dense
                  ></q-btn>
                </div>
              </div>
            </q-img>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
.flexbox {
  width: 320px;
  height: auto;
  display: grid;
  gap: 16px;
}

.one {
  order: 2;
}

.two {
  grid-column: 1 / 3;
  order: 1;
}

.three {
  order: 3;
}

.four {
  display: grid;
  grid-column: 1 / 3;
  grid-gap: 1ch;
  order: 4;
}

@media screen and (min-width: 500px) {
  .flexbox {
    width: auto;
    grid-template-columns: calc(33.333% - 0.333ch) calc(33.333% - 0.333ch) calc(
        33.333% - 0.333ch
      );
  }

  .one {
    grid-row: 1 / 3;
    order: 1;
  }

  .two {
    order: 2;
    grid-column: 2 / 4;
  }

  .three {
    order: 3;
  }

  .four {
    grid-column: 3 / 4;
    order: 4;
  }
}
</style>
